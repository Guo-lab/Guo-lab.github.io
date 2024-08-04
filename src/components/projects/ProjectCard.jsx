import React, { useContext } from 'react';
import {
  Button, Card, Badge, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import ReactMarkdown from 'react-markdown';

import { Link } from 'react-router-dom'; // Import Link for routing
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },

  cardStyle: {
    // borderRadius: 10,
    overflow: 'hidden', // Ensures content stays within card boundaries
    height: '100%', // Ensures the card takes up the full height of its container
    boxShadow: 'none', // Remove the box shadow for no border effect
    border: 'none', // Remove the border
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  cardTitleStyle: {
    fontSize: '1.3em',
    fontWeight: 500,
    alignItems: 'center',
  },

  cardTextStyle: {
    textAlign: 'left',
    fontSize: '0.7em',
    width: '100%',
    lineHeight: '1.4', // Adjust line height for better readability
  },

  cardImageStyle: {
    // height: '230px', // Set a fixed height for images
    objectFit: '', // Ensures image covers the area without stretching
    borderRadius: '5px 5px 5px 5px',
    objectPosition: 'center',
    width: '100%',
  },
  
  linkStyle: {
    textDecoration: 'none',
    padding: 10,
    color: '#49bf9d',
  },

  githubIconStyle: {
    marginLeft: 'auto',
    color: '#FFD700',
    textDecoration: 'none',
  },

  // buttonStyle: {
  //   margin: 5,
  // },

  dateStyle: {
    fontSize: '0.8em',
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

const ProjectCard = (props) => {
  const theme = useContext(ThemeContext);
  const parseBodyText = (text) => (
    <ReactMarkdown 
      children={text} 
      components={componentsRenders}
    />
  );
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
        
        <Card.Img variant="top" src={project?.image} style={styles.cardImageStyle} />
        
        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>
            
            <Link to={`/project/${project.title}`} style={styles.linkStyle}>
              {project.title}
            </Link>
            
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.githubIconStyle}
                aria-label="Open GitHub repository"
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

          <Card.Text style={styles.cardTextStyle}>
            {parseBodyText(project.bodyText)}
          </Card.Text>

        </Card.Body>

        {/* <Card.Body>
          {project?.links?.map((link) => (
            <Button
              key={link.href}
              style={styles.buttonStyle}
              variant={'outline-' + theme.bsSecondaryVariant}
              onClick={() => window.open(link.href, '_blank')}
            >
              {link.text}
            </Button>
          ))}
        </Card.Body> */}
        
        {/* {project.tags && (
          <Card.Footer style={{ backgroundColor: theme.cardFooterBackground }}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                pill
                bg={theme.bsSecondaryVariant}
                text={theme.bsPrimaryVariant}
                style={styles.badgeStyle}
              >
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )} */}

      </Card>

    </Col>
  );
};

ProjectCard.propTypes = {

  project: PropTypes.shape({
    
    title: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    
    image: PropTypes.string,
    
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })),
    
    tags: PropTypes.arrayOf(PropTypes.string),
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    githubUrl: PropTypes.string,

  }).isRequired,

};

export default ProjectCard;
