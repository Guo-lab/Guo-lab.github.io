import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';

import Header from './Header';
import endpoints from '../constants/endpoints';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './utils/FallbackSpinner';

const styles = {
  containerStyle: {
    marginTop: 10,
    marginBottom: 100,
  },
};

const Projects = (props) => {
  const theme = useContext(ThemeContext);
  const { header } = props;
  
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.projects, {
      method: 'GET',
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        console.log('Fetched projects data:', res);
        setData(res);
      })
      .catch((err) => err);
  }, []);

  return (
    <>

      {data ? (
        <div className="section-content-container">
          
          <Container style={styles.containerStyle}>
            
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
              
              {data.projects?.slice(0, data.length)
                .sort((a, b) => new Date(b.endDate) - new Date(a.endDate)).map((project) => (
                  <Fade key={project.title}>
                  
                    <ProjectCard project={project} />
                
                  </Fade>
                ))}
              
            </Row>

          </Container>
        
        </div>
      ) 
        : <FallbackSpinner /> }

    </>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;
