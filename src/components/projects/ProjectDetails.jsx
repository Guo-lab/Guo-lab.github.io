import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import FallbackSpinner from '../utils/FallbackSpinner';

import endpoints from '../../constants/endpoints';

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
    return <ReactMarkdown children={text} components={componentsRenders} />;
}

const ProjectDetails = () => {
    const theme = useContext(ThemeContext);
    const { projectTitle } = useParams();
    console.log('projectTitle:', projectTitle);

    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(endpoints.details, {
            method: 'GET',
        })
            .then((res) => {
                console.log('fetching ', res);
                return res.json();
            })
            .then((res) => {
                console.log('and then setDetails:', res);
                setDetails(res);
            })
            .catch((err) => err);
    }, []);
    if (!details) {
        return (
            <>
                <div>Details Contents not found</div>
            </>
        );
    }

    const project = details?.details?.find((p) => p.title.replace(/\s+/g, '-') === projectTitle);
    console.log('project:', project?.body);

    const projectBodyItems = project?.body.map((item, index) => {
        const isEven = (index / 2) % 2 === 0;
        if (!item.text && item.image) {
            return item.ifVideo ? (
                <video
                    controls
                    loop
                    style={{
                        display: 'block', // Set display to block
                        maxWidth: '70%',
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
                        maxWidth: '70%',
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
                        justifyContent: 'flex-start',
                        marginBottom: '40px',
                    }}
                >
                    <div style={{ flex: 1, width: '300px' }}>{parseMarkdownText(item.text)}</div>
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
                                        style={{
                                            marginRight: '10px',
                                            float: 'right',
                                            marginLeft: '30px',
                                            maxHeight: '300px',
                                        }}
                                    >
                                        <source src={item.image} type="video/mp4" />
                                        <track kind="captions" srcLang="en" label="English" default />
                                    </video>
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={`Project Body Item ${index}`}
                                        style={{ marginRight: '10px', float: 'right', marginLeft: '30px' }} // Float img
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
                                        style={{
                                            marginLeft: '10px',
                                            float: 'left',
                                            marginRight: '30px',
                                            maxHeight: '300px',
                                        }}
                                    >
                                        <source src={item.image} type="video/mp4" />
                                        <track kind="captions" srcLang="en" label="English" default />
                                    </video>
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={`Project Body Item ${index}`}
                                        style={{ marginLeft: '10px', float: 'left', marginRight: '30px' }} // Float img
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
