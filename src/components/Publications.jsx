import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row, Card, Modal, Button } from 'react-bootstrap';

import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-reveal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './utils/FallbackSpinner';

const styles = {
    nameStyle: {
        marginTop: '20px',
        fontSize: '1em', // Adjust as needed
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

    // introImageContainer: {
    //   display: 'flex',
    //   margin: '50px 0',
    //   justifyContent: 'center',
    //   width: '100%',
    //   flexDirection: 'column', // Stack image and text vertically
    //   alignItems: 'center', // Center content horizontally
    //   flex: 1.4,
    // },

    introImageContainer: {
        // position: 'fixed',
        // top: '160px',
        // left: 0,
        margin: '20px 50px',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1.3,
    },

    image: {
        maxWidth: '100%', // Adjust fraction as needed
        maxHeight: '100%', // Optional: maintain aspect ratio or control height
        borderRadius: '50%', // Make the image oval
        height: 'auto', // Ensure height scales proportionally with width
        objectFit: 'cover', // Ensure the image covers the area without distortion
        marginBottom: '0px', // Space between image and text
    },

    publicationContainer: {
        margin: '0px 20px 0 10px',
        flexDirection: 'column',
        whiteSpace: 'pre-wrap',
        textAlign: 'left',
        fontSize: '1.0em',
        fontWeight: 500,
        padding: '3px', // Add padding to the text column
        flex: 3.5,
    },

    publicationItem: {
        marginBottom: '30px',
        padding: '0px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        paddingRight: '0px', // Reduce right padding
    },

    title: {
        fontSize: '1.3em',
        fontWeight: 'bold',
        marginBottom: '10px',
        fontFamily: 'Times New Roman, serif',
    },

    authors: {
        fontSize: '1.0em',
        marginBottom: '10px',
        fontFamily: 'Times New Roman, serif',
    },

    venue: {
        fontSize: '1em',
        marginBottom: '10px',
        color: '#555',
        fontFamily: 'Times New Roman, serif',
    },

    year: {
        fontSize: '0.9em',
        fontFamily: 'Arial, sans-serif',
    },

    abstract: {
        fontSize: '0.7em',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
    },
};

function Publications(props) {
    const { header } = props;
    const [homeData, setHomeData] = useState(null);
    const [publicationData, setPublicationData] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [bibtexContent, setBibtexContent] = useState('');

    useEffect(() => {
        fetch(endpoints.home, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => {
                console.log('Fetched home data:', res);
                setHomeData(res);
            })
            .catch((err) => err);

        fetch(endpoints.publications, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => {
                console.log('Fetched publications:', res);
                setPublicationData(res);
            })
            .catch((err) => err);
        console.log(publicationData);
    }, []);

    const handleShowBibtex = (bibtex) => {
        setBibtexContent(bibtex);
        setShowModal(true);
    };
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            {/* <Header title={header} /> */}
            <Fade>
                <div className="section-content-container">
                    <Container>
                        {homeData && publicationData ? (
                            <Row>
                                <Col style={styles.introImageContainer}>
                                    <div style={{ flexDirection: 'row' }}>
                                        <img src={homeData?.imageSource} alt="profile" style={styles.image} />
                                        <div style={styles.mainContainer}>
                                            <h5 style={styles.nameStyle}>{homeData?.name}</h5>
                                            <div style={styles.typewriterContainer}>
                                                <Typewriter
                                                    options={{
                                                        loop: true,
                                                        autoStart: true,
                                                        strings: homeData?.roles,
                                                        wrapperClassName: 'typewriter',
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <Social />
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col style={styles.publicationContainer}>
                                    {publicationData.publications
                                        .slice()
                                        .reverse()
                                        .map((publication) => (
                                            <Card key={publication.id} style={styles.publicationItem}>
                                                <Card.Body>
                                                    <Card.Title style={styles.title}>{publication.title}</Card.Title>
                                                    <Card.Subtitle style={styles.authors}>
                                                        {publication.authors}
                                                    </Card.Subtitle>
                                                    <Card.Text style={styles.venue}>{publication.venue}</Card.Text>
                                                    <Card.Text style={styles.year}>
                                                        <FontAwesomeIcon icon={faCalendarAlt} style={styles.yearIcon} />
                                                        &nbsp;&nbsp;
                                                        {publication.date}
                                                    </Card.Text>
                                                    <Card.Text style={styles.abstract}>
                                                        <ReactMarkdown>{publication.abstract}</ReactMarkdown>
                                                    </Card.Text>

                                                    <Card.Link href={publication.paperurl} target="_blank">
                                                        [Paper Link]
                                                    </Card.Link>

                                                    {publication.bib && (
                                                        <Card.Link
                                                            href="#"
                                                            onClick={() => handleShowBibtex(publication.bib)}
                                                        >
                                                            [BibTeX]
                                                        </Card.Link>
                                                    )}
                                                </Card.Body>
                                            </Card>
                                        ))}
                                </Col>
                            </Row>
                        ) : (
                            <FallbackSpinner />
                        )}
                    </Container>
                </div>
            </Fade>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>BibTeX Entry</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <pre>{bibtexContent}</pre>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

Publications.propTypes = {
    header: PropTypes.string.isRequired,
};

export default Publications;
