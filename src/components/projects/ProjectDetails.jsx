import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
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

const ProjectDetails = () => {
    const theme = useContext(ThemeContext);
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
                            {markdownContent.metadata.title}
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
    // Fallback to JSON details system
    if (!details) {
        return (
            <div className="section-content-container">
                <Container style={styles.containerStyle}>
                    <div>Details Contents not found</div>
                </Container>
            </div>
        );
    }

    const project = details?.details?.find((p) => p.title.replace(/\s+/g, '-') === projectTitle);
    console.log('project:', project?.body);

    const projectBodyItems = project?.body.map((item, index) => {
        const isEven = index % 2 === 0;
        if (!item.text && item.image) {
            return item.ifVideo ? (
                <video
                    controls
                    loop
                    autoPlay
                    muted
                    style={{
                        display: 'block', // Set display to block
                        maxWidth: '80%',
                        margin: '10px auto', // Center the image
                        marginBottom: '50px',
                    }}
                >
                    <source src={item.image} type="video/mp4" />
                    <track kind="captions" srcLang="en" label="English" default />
                </video>
            ) : (
                <img
                    src={item.image}
                    alt={`Project Body Item ${index}`}
                    style={{
                        display: 'block', // Set display to block
                        maxWidth: '80%',
                        margin: '10px auto', // Center the image
                        marginBottom: '50px',
                    }}
                />
            );
        }

        if (item.text && !item.image) {
            return (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        textAlign: 'left',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '40px',
                    }}
                >
                    <div style={{ flex: 1, width: '300px', maxWidth: '80%' }}>{parseMarkdownText(item.text)}</div>
                </div>
            );
        }
        return (
            <div
                key={index}
                style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                    marginBottom: '20px',
                    justifyContent: isEven ? 'flex-end' : 'flex-start',
                }}
            >
                {isEven ? (
                    <>
                        {item.text && (
                            <div style={{ flex: 1, marginLeft: '20px' }}>
                                {item.ifVideo ? (
                                    <video
                                        controls
                                        loop
                                        autoPlay
                                        muted
                                        style={{
                                            marginRight: '10px',
                                            float: 'right',
                                            marginLeft: '30px',
                                            maxHeight: '350px',
                                            maxWidth: '650px',
                                        }}
                                    >
                                        <source src={item.image} type="video/mp4" />
                                        <track kind="captions" srcLang="en" label="English" default />
                                    </video>
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={`Project Body Item ${index}`}
                                        style={{
                                            marginRight: '10px',
                                            float: 'right',
                                            marginLeft: '30px',
                                            maxHeight: '400px',
                                            maxWidth: '650px',
                                        }} // Float img
                                    />
                                )}
                                <div style={{ marginRight: '10%', overflow: 'hidden' }}>
                                    {parseMarkdownText(item.text)}
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {item.text && (
                            <div style={{ flex: 1, marginRight: '20px', display: 'flex', gap: '5px' }}>
                                {item.ifVideo ? (
                                    <video
                                        controls
                                        loop
                                        autoPlay
                                        muted
                                        style={{
                                            marginLeft: '10px',
                                            float: 'left',
                                            marginRight: '30px',
                                            maxHeight: '350px',
                                            maxWidth: '650px',
                                        }}
                                    >
                                        <source src={item.image} type="video/mp4" />
                                        <track kind="captions" srcLang="en" label="English" default />
                                    </video>
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={`Project Body Item ${index}`}
                                        style={{
                                            marginLeft: '10px',
                                            float: 'left',
                                            marginRight: '30px',
                                            maxHeight: '400px',
                                            maxWidth: '650px',
                                        }} // Float img
                                    />
                                )}
                                <div style={{ marginLeft: '10px', overflow: 'hidden' }}>
                                    {parseMarkdownText(item.text)}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        );
    });

    return (
        <>
            {project ? (
                <>
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
                                    {project.title}{' '}
                                </div>
                            </Row>

                            <Row>{projectBodyItems}</Row>
                        </Container>
                    </div>
                </>
            ) : (
                <></>
            )}
        </>
    );
};

// ProjectDetails.propTypes = {
//     detail: PropTypes.shape({
//         title: PropTypes.string,
//         body: PropTypes.string.isRequired,
//     }).isRequired,
// };

export default ProjectDetails;
