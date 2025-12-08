import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import PropTypes from 'prop-types';
import { Buffer } from 'buffer';
import matter from 'gray-matter';
import FallbackSpinner from '../utils/FallbackSpinner';
import endpoints from '../../constants/endpoints';

window.Buffer = Buffer;

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

    const loadProjectDetails = async (projectName) => {
        const filename = projectName.replace(/\s+/g, '-').toLowerCase();
        const markdownPath = `content/projects/${filename}.md`;
        
        try {
            console.info('🔍 DEBUG: Fetching MARKDOWN from path:', markdownPath);
            console.info('🔍 DEBUG: Full URL will be:', `${window.location.origin}/${markdownPath}`);
            
            console.log('Window Location Origin:', window.location.origin);
            console.log('Env Path:', process.env.PUBLIC_URL);

            let response = await fetch(markdownPath);
            console.info('📄 MARKDOWN fetch response:', response);
            
            if (!response.ok) {
                console.info('❌ Response not OK:', response.status, response.statusText);
                console.info('🔄 Trying fallback with PUBLIC_URL...');
                
                const fallbackPath = `${process.env.PUBLIC_URL || ''}/content/projects/${filename}.md`;
                console.info('🔍 Fallback path:', fallbackPath);
                
                response = await fetch(fallbackPath);
                console.info('📄 Fallback fetch response:', response);
                
                if (!response.ok) {
                    console.info('❌ Fallback also failed:', response.status, response.statusText);
                    return null;
                }
            }
            
            console.info('📖 Reading response text...');
            const markdown = await response.text();
            console.info('✅ Successfully read markdown text, length:', markdown.length);
            
            console.info('🔧 Parsing with gray-matter...');
            const { data, content } = matter(markdown);
            
            console.info('✅ Parsed metadata:', data);
            console.info('✅ Parsed content preview:', content.substring(0, 100) + '...');

            return { metadata: data, content };
        } catch (error) {
            console.error('❌ Error in loadProjectDetails:', error);
            return null;
        }
    };

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
