import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Header from './Header';
import endpoints from '../constants/endpoints';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './utils/FallbackSpinner';

const styles = {
    containerStyle: {
        marginTop: 10,
        marginBottom: 100,
    },
};

const Projects = (props) => {
    const theme = useContext(ThemeContext);
    const { header } = props;

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.projects, {
            method: 'GET',
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((res) => {
                console.log('Fetched projects data:', res);
                setData(res);
            })
            .catch((err) => err);
    }, []);

    const groupProjectsByType = (projects) => {
        return {
            'Work in Progress': projects.filter((project) => project.type === 'wip'),
            'Research Projects': projects.filter((project) => project.type === 'research'),
            'Course Projects': projects.filter((project) => project.type === 'course'),
            'Others Projects': projects.filter((project) => project.type === 'others'),
        };
    };

    const renderProjectRows = (projects) => {
        return (
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {projects
                    ?.slice(0, projects.length)
                    .sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
                    .map((project) => (
                        <Fade key={project.title}>
                            <ProjectCard project={project} />
                        </Fade>
                    ))}
            </Row>
        );
    };

    return (
        <>
            {data ? (
                <div className="section-content-container">
                    <Container style={styles.containerStyle}>
                        {Object.keys(groupProjectsByType(data.projects)).map((type) => {
                            const projects = groupProjectsByType(data.projects)[type];
                            return (
                                projects.length > 0 && (
                                    <div key={type}>
                                        <h4
                                            style={{
                                                textAlign: 'center',
                                                margin: '25px 0',
                                                fontSize: '2em', // Increase font size
                                                fontWeight: 'bold',
                                                color: '#333',
                                                fontFamily: 'Times New Roman, serif',
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            {type}
                                        </h4>
                                        {renderProjectRows(projects)}
                                        <hr style={{ border: '1px solid #aaa', margin: '10px 0' }} />
                                    </div>
                                )
                            );
                        })}
                    </Container>
                </div>
            ) : (
                <FallbackSpinner />
            )}
        </>
    );
};

Projects.propTypes = {
    header: PropTypes.string.isRequired,
};

export default Projects;
