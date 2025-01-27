import React, { useContext } from 'react';
import { Button, Card, Badge, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';

// import { Link } from 'react-router-dom'; // Import Link for routing
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
        borderRadius: 10,
        overflow: 'hidden', // Ensures content stays within card boundaries
        height: '600px', // Ensures the card takes up the full height of its container
        border: 'none', // Remove the border
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)', // Subtle shadow for depth
    },

    cardTitleStyle: {
        fontSize: '1.3em',
        fontWeight: 500,
        alignItems: 'center',
    },

    cardTextStyle: {
        margin: '10px 0 5px',
        textAlign: 'left',
        fontSize: '0.7em',
        width: '100%',
        lineHeight: '1.4', // Adjust line height for better readability
    },

    cardImageStyle: {
        height: '230px', // Set a fixed height for images
        objectFit: 'cover',
        borderRadius: '5px 5px 5px 5px',
        objectPosition: 'center',
        width: '100%',
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

    // buttonStyle: {
    //   margin: 5,
    // },

    dateStyle: {
        fontSize: '1em',
        color: '#888',
        marginTop: '5px',
        fontFamily: 'Times New Roman, serif',
    },
};

const componentsRenders = {
    ul: ({ children }) => <ul style={{ paddingLeft: '0rem', paddingBottom: '0rem' }}>{children}</ul>,
    ol: ({ children }) => <ol style={{ paddingLeft: '0rem' }}>{children}</ol>,
    li: ({ children }) => <li style={{ paddingBottom: '0.3rem' }}>{children}</li>,
};

const ExternalNavLink = styled.a`
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
                    <Card.Img variant="top" as="video" controls autoPlay muted loop style={styles.cardImageStyle}>
                        <source src={project?.image} type="video/mp4" />
                        Your browser does not support the video tag.
                    </Card.Img>
                ) : (
                    <Card.Img variant="top" src={project?.image} style={styles.cardImageStyle} />
                )}

                <Card.Body>
                    <hr style={{ border: '1px solid #ccc', margin: '3px 0' }} />
                    <Card.Title style={styles.cardTitleStyle}>
                        <ExternalNavLink
                            key={project.title}
                            href={`/${project.title.replace(/\s+/g, '-')}`}
                            theme={theme}
                            style={styles.linkStyle}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={(e) => (e.currentTarget.style.color = styles.linkHoverStyle.color)}
                            onMouseLeave={(e) => (e.currentTarget.style.color = styles.linkStyle.color)}
                        >
                            {project.title}
                        </ExternalNavLink>

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

                    <Card.Text style={styles.cardTextStyle}>{parseBodyText(project.bodyText)}</Card.Text>
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
