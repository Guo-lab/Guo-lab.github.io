import React, { useContext } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { NavLink } from 'react-router-dom'; // Import Link for routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const styles = {
    // badgeStyle: {
    //   paddingLeft: 10,
    //   paddingRight: 10,
    //   paddingTop: 5,
    //   paddingBottom: 5,
    //   margin: 5,
    // },

    cardStyle: {
        borderRadius: 8,
        overflow: 'hidden', // Ensures content stays within card boundaries
        // height: '680px', // Reduced card height for more compact appearance
        minHeight: '680px',
        maxHeight: '1080px',
        border: 'none', // Remove the border
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)', // Reduced shadow for more compact feel
    },

    cardTitleStyle: {
        fontSize: '1.25em', // Enlarged title font size
        fontWeight: 500,
        alignItems: 'center',
        marginBottom: '0.5rem', // Reduced margin
    },

    cardTextStyle: {
        margin: '5px 0 5px', // Reduced top margin
        textAlign: 'left',
        fontSize: '0.85em', // Enlarged text font size
        width: '100%',
        lineHeight: '1.4', // Slightly more relaxed line height for readability
    },

    cardImageStyle: {
        height: '260px !important', // Reduced image height for compactness
        maxHeight: '260px',
        minHeight: '260px',
        objectFit: 'contain', // Show full image without clipping
        borderRadius: '5px 5px 5px 5px',
        objectPosition: 'center',
        width: '100%',
        backgroundColor: '#f8f9fa', // Light background to fill empty space
    },

    cardVideoStyle: {
        height: '260px !important', // Reduced video height to match images
        maxHeight: '260px',
        minHeight: '260px',
        objectFit: 'contain', // Show full video without clipping
        borderRadius: '5px 5px 5px 5px',
        objectPosition: 'center',
        width: '100%',
        display: 'block', // Ensure video behaves like block element
        backgroundColor: '#f8f9fa', // Light background to fill empty space
    },
    //   cardImageStyle: {
    //     height: '270px',
    //     objectFit: 'contain',
    //     borderRadius: '5px 5px 5px 5px',
    //     objectPosition: 'center',
    //     width: '100%',
    // },
    linkStyle: {
        textDecoration: 'none',
        padding: 10,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman, serif',
        color: '#49bf9d',
        transition: 'color 0.3s',
    },

    linkHoverStyle: {
        color: '#007bff', // Change to desired hover color for title
    },

    githubIconStyle: {
        marginLeft: 'auto',
        color: '#FFD700',
        textDecoration: 'none',
        transition: 'color 0.3s',
    },

    githubIconHoverStyle: {
        color: '#007bff',
        transform: 'scale(1.2) rotate(30deg)',
    },

    dateStyle: {
        fontSize: '0.85em', // Reduced font size
        color: '#888',
        marginTop: '3px', // Reduced margin
        marginBottom: '8px', // Added small bottom margin
        fontFamily: 'Times New Roman, serif',
    },
};

const componentsRenders = {
    ul: ({ children }) => <ul style={{ paddingLeft: '0rem', paddingBottom: '0rem' }}>{children}</ul>,
    ol: ({ children }) => <ol style={{ paddingLeft: '0rem' }}>{children}</ol>,
    li: ({ children }) => <li style={{ paddingBottom: '0.3rem' }}>{children}</li>,
};

const StyledNavLink = styled(NavLink)`
    &:hover {
        color: ${(props) => props.theme.navbarTheme.linkHoverColor};
    }
    &::after {
        background-color: ${(props) => props.theme.accentColor};
    }
`;

const ProjectCard = (props) => {
    const theme = useContext(ThemeContext);
    const parseBodyText = (text) => <ReactMarkdown children={text} components={componentsRenders} />;
    const { project } = props;

    return (
        <Col>
            <Card
                style={{
                    ...styles.cardStyle,
                    backgroundColor: theme.cardBackground,
                    borderColor: theme.cardBorderColor,
                }}
                text={theme.bsSecondaryVariant}
            >
                {project?.mediaType === 'video' ? (
                    <Card.Img variant="top" as="video" controls autoPlay muted loop style={styles.cardVideoStyle}>
                        <source src={project?.image} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Card.Img>
                ) : (
                    <Card.Img variant="top" src={project?.image} style={styles.cardImageStyle} />
                )}

                <Card.Body style={{ padding: '0.75rem' }}>
                    <hr style={{ border: '1px solid #ccc', margin: '3px 0' }} />
                    <Card.Title style={styles.cardTitleStyle}>
                        <StyledNavLink
                            key={project.title}
                            to={`/${project.title.replace(/\s+/g, '-')}`}
                            theme={theme}
                            style={styles.linkStyle}
                            // target="_blank"
                            // rel="noopener noreferrer"
                            onMouseEnter={(e) => (e.currentTarget.style.color = styles.linkHoverStyle.color)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = styles.linkStyle.color)}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            {project.title}
                        </StyledNavLink>

                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.githubIconStyle}
                                aria-label="Open GitHub repository"
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = styles.githubIconHoverStyle.color;
                                    e.currentTarget.style.transform = styles.githubIconHoverStyle.transform;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = styles.githubIconStyle.color;
                                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                                }}
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        )}
                    </Card.Title>

                    <Card.Text style={styles.dateStyle}>
                        <FontAwesomeIcon icon={faCalendarAlt} style={styles.yearIcon} />
                        &nbsp;&nbsp;
                        {new Date(project.startDate).toLocaleDateString()}
                        &nbsp;-&nbsp;
                        {new Date(project.endDate).toLocaleDateString()}
                    </Card.Text>

                    {project.tags && project.tags.length > 0 && (
                        <div style={{ marginTop: '6px', marginBottom: '6px' }}>
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index} 
                                    style={{ 
                                        marginRight: '4px', 
                                        marginBottom: '3px',
                                        fontSize: '0.65em', // Smaller tag text
                                        padding: '2px 6px', // Reduced padding
                                        backgroundColor: 'rgba(13, 110, 253, 0.1)',
                                        color: '#0d6efd',
                                        border: 'none',
                                        borderRadius: '0.2rem', // Slightly smaller border radius
                                        display: 'inline-block'
                                    }}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <div style={styles.cardTextStyle}>{parseBodyText(project.bodyText)}</div>
                </Card.Body>
            </Card>
        </Col>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        bodyText: PropTypes.string.isRequired,

        image: PropTypes.string,
        mediaType: PropTypes.string,

        links: PropTypes.arrayOf(
            PropTypes.shape({
                text: PropTypes.string.isRequired,
                href: PropTypes.string.isRequired,
            })
        ),

        tags: PropTypes.arrayOf(PropTypes.string),
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        githubUrl: PropTypes.string,
        detailsUrl: PropTypes.string,
    }).isRequired,
};

export default ProjectCard;
