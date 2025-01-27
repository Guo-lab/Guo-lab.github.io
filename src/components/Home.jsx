import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-reveal';

import Header from './Header';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './utils/FallbackSpinner';

const styles = {
    nameStyle: {
        fontSize: '1.5em', // Adjust as needed
        marginBottom: '0.5em', // Add margin to separate from Typewriter
    },

    mainContainer: {
        height: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center', // Center text for compact layout
        padding: '50px', // Add padding to compact the layout
    },

    introTextContainer: {
        margin: '0px 50px',
        flexDirection: 'column',
        whiteSpace: 'pre-wrap',
        textAlign: 'left',
        fontSize: '1.0em',
        fontWeight: 500,
        padding: '10px', // Add padding to the text column
        flex: 2.5,
    },

    introImageContainer: {
        margin: '20px 0',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        flexDirection: 'column', // Stack image and text vertically
        alignItems: 'center', // Center content horizontally
        flex: 1.1,
    },

    image: {
        maxWidth: '100%', // Adjust fraction as needed
        maxHeight: '100%', // Optional: maintain aspect ratio or control height
        borderRadius: '50%', // Make the image oval
        height: 'auto', // Ensure height scales proportionally with width
        objectFit: 'cover', // Ensure the image covers the area without distortion
        marginBottom: '0px', // Space between image and text
    },
};

function Home(props) {
    const { header } = props;
    const [data, setData] = useState(null);

    const parseIntro = (text) => <ReactMarkdown children={text} />;

    useEffect(() => {
        fetch(endpoints.home, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => err);
    }, []);

    return (
        <>
            <Header title={header} />
            <Fade>
                <div className="section-content-container">
                    <Container>
                        {data ? (
                            <Row>
                                <Col style={styles.introImageContainer}>
                                    <div style={{ flexDirection: 'row' }}>
                                        <img src={data?.imageSource} alt="profile" style={styles.image} />
                                        <div style={styles.mainContainer}>
                                            <h5 style={styles.nameStyle}>{data?.name}</h5>
                                            <div style={styles.typewriterContainer}>
                                                <Typewriter
                                                    options={{
                                                        loop: true,
                                                        autoStart: true,
                                                        strings: data?.roles,
                                                        wrapperClassName: 'typewriter',
                                                        delay: 80,
                                                        pauseFor: 3000,
                                                    }}
                                                    style={{ fontSize: '3em' }}
                                                />
                                            </div>
                                            <div>
                                                <Social />
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col style={styles.introTextContainer}>{parseIntro(data.about)}</Col>
                            </Row>
                        ) : (
                            <FallbackSpinner />
                        )}
                    </Container>
                </div>
            </Fade>
        </>
    );
}

Home.propTypes = {
    header: PropTypes.string.isRequired,
};

export default Home;
