import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Container, Row, Col, Spinner, Alert, 
} from 'react-bootstrap';
import { ThemeContext } from 'styled-components';

import endpoints from '../../constants/endpoints';
import ProjectCard from './ProjectCard';
import FallbackSpinner from '../utils/FallbackSpinner';

const styles = {
  containerStyle: {
    marginTop: 10,
    marginBottom: 100,
  },

  imageStyle: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
  },

  videoStyle: {
    width: '100%',
    maxHeight: '400px',
  },

  titleStyle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },

  bodyTextStyle: {
    fontSize: '1.2rem',
    lineHeight: '1.5',
  },

  summaryStyle: {
    marginBottom: '2rem',
  },
};


const ProjectPage = () => {
  const theme = useContext(ThemeContext);
  const { projectTitle } = useParams(); // Get the project title from the URL
  const [project, setProject] = useState(null); // State to store the project data

  useEffect(() => { // Fetch project data based on the projectTitle
    const filterRes = (res) => res.projects.filter((p) => p.title === projectTitle)[0];
    fetch(endpoints.project, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('Fetched projects data:', res);
        setProject(filterRes(res));
        console.log('Project:', filterRes(res));
      })
      .catch((err) => err);
  }, []);

  return (
    <>
      {project ? (
        <div>
          <Container className="section-content-container">
            <h1>
              Project Page: &nbsp;
              {projectTitle} 
            </h1>
            <Row>
              <Col md={6}>
                {project.mediaType === 'image' ? (
                  <img src={project.image2} alt={project.title} style={styles.imageStyle} />
                ) : (
                  <video controls style={styles.videoStyle}>
                    <source src={project.image2} type="video/mp4" />
                    <track kind="captions" label="English" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </Col>
              <Col md={6}>
                <div style={styles.summaryStyle}>
                  <h2>Project Summary</h2>
                  <p style={styles.bodyTextStyle}>{project.bodyText}</p>
                </div>
                <div>
                  <strong>
                    Start Date:
                  </strong> 
                  {project.startDate}
                  {/* Add more project details as needed */}
                </div>
              </Col>
            </Row>
          </Container>
      
        </div>
      ) : <FallbackSpinner /> }
    </>
  );
};

export default ProjectPage;
