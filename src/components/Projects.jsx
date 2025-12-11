import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button, Alert, Form } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
// import Fade from 'react-reveal/Fade'; // Removed to fix legacy context warning

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
    const [searchTag, setSearchTag] = useState('');
    const [groupByYear, setGroupByYear] = useState(false);

    useEffect(() => {
        console.log('🔍 DEBUG: Fetching JSON from path:', endpoints.projects);
        console.log('🔍 DEBUG: Full URL will be:', `${window.location.origin}/${endpoints.projects}`);
        
        fetch(endpoints.projects, {
            method: 'GET',
        })
            .then((res) => {
                console.log('✅ JSON fetch response:', res);
                return res.json();
            })
            .then((res) => {
                console.log('Fetched projects data:', res);
                setData(res);
            })
            .catch((err) => err);
    }, []);

    const filterProjectsBySearch = (projects) => {
        if (!searchTag.trim()) return projects;
        return projects.filter((project) =>
            project.tags?.some((tag) => tag.toLowerCase().includes(searchTag.toLowerCase()))
        );
    };

    const groupProjectsByType = (projects) => {
        const filteredProjects = filterProjectsBySearch(projects);
        return {
            'Work in Progress (Last updated: Dec 8, 2025)': 
                filteredProjects.filter((project) => project.type === 'wip'),
            'Research Projects': filteredProjects.filter((project) => project.type === 'research'),
            'Course Projects & Labs': filteredProjects.filter((project) => project.type === 'course'),
            'Other Projects & Labs': filteredProjects.filter((project) => project.type === 'others'),
        };
    };

    const groupProjectsByYear = (projects) => {
        const filteredProjects = filterProjectsBySearch(projects);
        const yearGroups = {};
        
        filteredProjects.forEach((project) => {
            const year = new Date(project.startDate).getFullYear();
            const yearKey = `${year}`;
            
            if (!yearGroups[yearKey]) {
                yearGroups[yearKey] = [];
            }
            yearGroups[yearKey].push(project);
        });

        // Sort years in descending order (latest first) and return as Map to preserve order
        const sortedYears = Object.keys(yearGroups).sort((a, b) => parseInt(b, 10) - parseInt(a, 10));
        console.log('🔍 DEBUG: Years before sorting:', Object.keys(yearGroups));
        console.log('🔍 DEBUG: Years after sorting:', sortedYears);
        
        // Use Map to preserve insertion order
        const sortedYearGroups = new Map();
        sortedYears.forEach((year) => {
            // Sort projects within each year by start date (latest first)
            const sortedProjects = yearGroups[year].sort((a, b) => 
                new Date(b.startDate) - new Date(a.startDate)
            );
            sortedYearGroups.set(year, sortedProjects);
        });

        return sortedYearGroups;
    };

    const renderProjectRows = (projects) => {
        return (
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {projects
                    ?.slice(0, projects.length)
                    .sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
                    .map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
            </Row>
        );
    };

    return (
        <>
            {data ? (
                <div className="section-content-container">
                    <Container style={styles.containerStyle}>
                        
                        <Row className="mb-3">
                            {/* Instructions Callout */}
                            <Col md={6}>
                                <Alert variant="info" className="py-3 px-3">

                                <Alert.Heading
                                    className="mb-1 text-center"
                                    style={{
                                        fontSize: '1.1rem',
                                        fontFamily: "'Old Standard TT', serif", // modern, clean font
                                        fontWeight: 600, // semi-bold
                                        color: '#0d6efd' // optional accent color
                                    }}
                                >
                                    📌 How to Navigate Projects
                                </Alert.Heading>

                                    <div
                                    style={{
                                        borderLeft: '3px solid #0dcaf0',
                                        paddingLeft: '1rem',
                                        marginLeft: '0.3rem',
                                        fontSize: '0.85rem'
                                    }}
                                    >
                                    <p className="mb-0 text-start">
                                        Click the project title in the card to see details.
                                    </p>
                                    <p className="mb-0 text-start">
                                        Click the GitHub icon to access the repo if it is public.
                                    </p>
                                    </div>

                                </Alert>
                            </Col>


                            {/* Search Callout */}
                            <Col md={6}>
                                <Alert variant="primary" className="h-90 py-3 px-2">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <Alert.Heading 
                                            className="mb-0"                                     
                                            style={{
                                                fontSize: '1.1rem',
                                                fontFamily: "'Old Standard TT', serif", // modern, clean font
                                                fontWeight: 600, // semi-bold
                                                color: '#0d6efd' // optional accent color
                                            }}
                                        >
                                            🔍 Search Projects
                                        </Alert.Heading>
                                        <Button
                                            variant="outline-primary"
                                            size="sm"
                                            style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}
                                            onClick={() => setGroupByYear(!groupByYear)}
                                        >
                                            Group by {groupByYear ? 'Type' : 'Year'}
                                        </Button>
                                    </div>
                                    <Form.Group className="mb-0">
                                        <Form.Control
                                            type="text"
                                            placeholder="Search by tags only (e.g., control, planning, robotics)..."
                                            value={searchTag}
                                            onChange={(e) => setSearchTag(e.target.value)}
                                            style={{ fontSize: '0.85rem' }}
                                        />
                                    </Form.Group>
                                </Alert>
                            </Col>
                        </Row>
                        
                        {(() => {
                            const groupedProjects = groupByYear 
                                ? groupProjectsByYear(data.projects) 
                                : groupProjectsByType(data.projects);
                            
                            const keysArray = groupByYear 
                                ? Array.from(groupedProjects.keys()) 
                                : Object.keys(groupedProjects);
                            
                            return keysArray.map((groupKey, index) => {
                                const projects = groupByYear 
                                    ? groupedProjects.get(groupKey)
                                    : groupedProjects[groupKey];
                                return (
                                    projects.length > 0 && (
                                        <div key={groupKey}>
                                            {index > 0 && <hr style={{ border: '1px solid #aaa', margin: '25px 0' }} />}
                                            <h4
                                                style={{
                                                    textAlign: 'center',
                                                    margin: '25px 0',
                                                    fontSize: '2em', // Increase font size
                                                    fontWeight: 'bold',
                                                    color: '#888',
                                                    fontFamily: 'Times New Roman, serif',
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                {groupKey}
                                            </h4>
                                            {renderProjectRows(projects)}
                                        </div>
                                    )
                                );
                            });
                        })()}
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
