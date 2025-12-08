import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import FallbackSpinner from './components/utils/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
import endpoints from './constants/endpoints';

import ProjectDetails from './components/projects/ProjectDetails';

function MainApp() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.routes, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => err);
    }, []);

    return (
        <div className="MainApp">
            <NavBarWithRouter />

            <main className="main">
                <Switch>
                    <Suspense fallback={<FallbackSpinner />}>
                        <Route exact path="/" component={() => <Home header="Home" />} />

                        {data &&
                            data.sections.map((route) => {
                                const SectionComponent = React.lazy(() => import('./components/' + route.component));
                                console.info('Loading component for route:', route);

                                return (
                                    <Route
                                        key={route.headerTitle}
                                        path={route.path}
                                        component={() => <SectionComponent header={route.headerTitle} />}
                                    />
                                );
                            })}

                        <Route 
                            path="/:projectTitle" 
                            render={({ match }) => {
                                const { projectTitle } = match.params;
                                console.warn('Routing to project details for:', projectTitle);
                                const reserved = ['about', 'projects', 'contact', 'publications', 'home'];
                                if (reserved.includes(projectTitle.toLowerCase())) {
                                    console.warn('Attempted to access reserved route:', projectTitle);
                                    return <></>;
                                }
                                return (<ProjectDetails title={projectTitle} />);
                              }}
                        />
                        
                    </Suspense>
                </Switch>
            </main>
        </div>
    );
}

export default MainApp;
