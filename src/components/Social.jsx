import React, { useEffect, useState, useContext } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faResearchgate } from '@fortawesome/free-brands-svg-icons';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import endpoints from '../constants/endpoints';

const styles = {
    iconStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },

    rowStyle: {
        justifyContent: 'center',
        marginBottom: '6px',
        fontSize: '0.9em',
    },

    iconStyle2: {
        marginRight: 10,
        fontSize: '1.5em',
    },
};

function Social() {
    const theme = useContext(ThemeContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoints.social, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((res) => {
                console.log('Fetched social data:', res);
                setData(res);
            })
            .catch((err) => err);
    }, []);

    return (
        <div className="social">
            <Col style={styles.rowStyle}>
                <a
                    href="https://www.researchgate.net/profile/Siqi-Guo-11"
                    aria-label="Visit ResearchGate"
                    style={{ fontFamily: 'Times New Roman', textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faResearchgate} size="4x" style={styles.iconStyle2} />
                    Research Gate
                </a>
            </Col>
            <Col style={styles.rowStyle}>
                <a
                    // eslint-disable-next-line max-len
                    href="https://www.google.com/maps/place/Carnegie+Mellon+University/@40.4432027,-79.9454248,17z/data=!4m14!1m7!3m6!1s0x8834f21f58679a9f:0x88716b461fc4daf4!2sCarnegie+Mellon+University!8m2!3d40.4432027!4d-79.9428499!16zL20vMGN3eF8!3m5!1s0x8834f21f58679a9f:0x88716b461fc4daf4!8m2!3d40.4432027!4d-79.9428499!16zL20vMGN3eF8?authuser=1&entry=ttu"
                    aria-label="Visit Location"
                    style={{ fontFamily: 'Times New Roman', textDecoration: 'none' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLocationPin} size="4x" style={styles.iconStyle2} />
                    5000 Forbes Ave, Pittsburgh, PA 15213
                </a>
            </Col>
            <Col style={{ ...styles.rowStyle, marginTop: '40px' }}>
                {data
                    ? data.social.map((social) => (
                          <SocialIcon
                              key={social.network}
                              style={styles.iconStyle}
                              url={social.href}
                              network={social.network}
                              bgColor={theme.socialIconBgColor}
                              target="_blank"
                              rel="noopener"
                          />
                      ))
                    : null}
            </Col>
        </div>
    );
}

export default Social;
