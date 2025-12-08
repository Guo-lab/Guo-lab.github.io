import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Button, Alert, Form } from 'react-bootstrap';
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
    const [searchTag, setSearchTag] = useState('');

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
            project.title?.toLowerCase().includes(searchTag.toLowerCase()) ||
            project.type?.toLowerCase().includes(searchTag.toLowerCase()) ||
            project.tech?.some((tech) => tech.toLowerCase().includes(searchTag.toLowerCase())) ||
            project.description?.toLowerCase().includes(searchTag.toLowerCase())
        );
    };

    const groupProjectsByType = (projects) => {
        const filteredProjects = filterProjectsBySearch(projects);
        return {
            'Work in Progress (Last updated: Jan 29, 2025)': 
                filteredProjects.filter((project) => project.type === 'wip'),
            'Research Projects': filteredProjects.filter((project) => project.type === 'research'),
            'Course Projects & Labs': filteredProjects.filter((project) => project.type === 'course'),
            'Other Projects & Labs': filteredProjects.filter((project) => project.type === 'others'),
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
                        
                        {/* Instructions Callout */}
                        <Alert variant="info" className="mb-4">
                            <Alert.Heading>📌 How to Navigate Projects</Alert.Heading>
                            <p className="mb-0">
                                Click the project title in the card to see details, click GitHub icon to access 
                                the repo if it is public.
                            </p>
                        </Alert>

                        {/* Search Callout */}
                        <Alert variant="primary" className="mb-4">
                            <Alert.Heading>🔍 Search Projects</Alert.Heading>
                            <Form.Group className="mb-0">
                                <Form.Control
                                    type="text"
                                    placeholder="Search by tag, title, or technology..."
                                    value={searchTag}
                                    onChange={(e) => setSearchTag(e.target.value)}
                                />
                            </Form.Group>
                        </Alert>
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
                                                color: '#888',
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
