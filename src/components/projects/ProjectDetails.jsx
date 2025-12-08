import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import PropTypes from 'prop-types';
import FallbackSpinner from '../utils/FallbackSpinner';


import endpoints from '../../constants/endpoints';
import loadProjectDetails from '../../utils/contentLoader';

// styles:
const styles = {
    containerStyle: {
        marginTop: 10,
        marginBottom: 100,
    },
};

const componentsRenders = {
    ul: ({ children }) => <ul style={{ paddingLeft: '0rem', paddingBottom: '0rem' }}>{children}</ul>,
    ol: ({ children }) => <ol style={{ paddingLeft: '0rem' }}>{children}</ol>,
    li: ({ children }) => <li style={{ paddingBottom: '0.3rem' }}>{children}</li>,
};

function parseMarkdownText(text) {
    return <ReactMarkdown children={text} components={componentsRenders} rehypePlugins={[rehypeRaw]} />;
}

const ProjectDetails = (props) => {
    const theme = useContext(ThemeContext);

    const { title } = props;

    const { projectTitle } = useParams();
    console.warn('projectTitle:', projectTitle);

    const [details, setDetails] = useState(null);
    const [markdownContent, setMarkdownContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProjectContent = async () => {
            setLoading(true);
            setMarkdownContent(null);
            setDetails(null);
            
            // Convert URL-encoded title back to readable title
            const decodedTitle = projectTitle.replace(/-/g, ' ');

            console.info('Loading content for:', decodedTitle);
            
            let hasMarkdown = false;
            
            try {
                const markdownData = await loadProjectDetails(decodedTitle);
                if (markdownData) {
                    console.log('Successfully loaded Markdown for:', decodedTitle);
                    setMarkdownContent(markdownData);
                    hasMarkdown = true;
                }
            } catch (error) {
                console.warn('Failed to load Markdown content for', decodedTitle, ':', error);
            }

            // Always load JSON as fallback, regardless of markdown success
            if (!hasMarkdown) {
                console.log('Loading JSON fallback for:', decodedTitle);
                try {
                    const res = await fetch(endpoints.details);
                    const data = await res.json();
                    console.log('Loaded JSON details:', data);
                    setDetails(data);
                } catch (error) {
                    console.error('Failed to load JSON details:', error);
                }
            }
            
            setLoading(false);
        };

        loadProjectContent();
    }, [projectTitle]);

    if (loading) {
        return <FallbackSpinner />;
    }

    // If we have Markdown content, render it directly
    if (markdownContent) {
        console.log('Rendering Markdown content for:', projectTitle);
        return (
            <div className="section-content-container">
                <Container style={styles.containerStyle}>
                    <Row>
                        <div
                            style={{
                                fontSize: '3em',
                                fontWeight: 'bold',
                                marginBottom: '30px',
                                fontFamily: 'Cambria',
                            }}
                        >
                            {/* {markdownContent.metadata.title} */}
                        </div>
                    </Row>
                    <Row>
                        <div style={{ width: '100%', textAlign: 'left' }}>
                            <ReactMarkdown 
                                children={markdownContent.content} 
                                components={componentsRenders} 
                                rehypePlugins={[rehypeRaw]} 
                            />
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }

    console.log('No Markdown content, using JSON details for:', projectTitle);
    // Fallback to details system
    if (!details) {
        return (
            <div className="section-content-container">
                <Container style={styles.containerStyle}>
                    <div>Details Contents not found</div>
                </Container>
            </div>
        );
    }
    return (
        <></>
    );
};

ProjectDetails.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ProjectDetails;
