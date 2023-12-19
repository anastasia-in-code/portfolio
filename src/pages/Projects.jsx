import { Container } from "@mui/material";

import aiapp from "../videos/aiapp.mp4";
import gymapp from "../videos/gym.mp4";
import musicapp from "../videos/music-app.mp4";
import admin from '../videos/admin.mp4'

const Projects = () => {
  return (
    <Container sx={{ pt: 10, pb: 20 }}>
      <h2>My hobby projects:</h2>
      <div className="projects">
        <Project
          name="Gym App"
          videoSrc={gymapp}
          description="Introducing GymFlex Pro a fitness project designed to target various muscle groups and 
                elevate your workout experience. Powered by React and styled with Material-UI, it's the ultimate companion for achieving your
                 fitness goals. Start your journey to a healthier, stronger you today!"
          link="https://anastasia-in-code.github.io/gym-app/"
          gitlink="https://github.com/anastasia-in-code/gym-app"
        />

        <Project
          name="Face recognition app"
          videoSrc={aiapp}
          description="Face Recognition AI is a web application that utilizes external AI services to detect and highlight faces in photos. With this application, you can simply provide a link to a photo, and it will display the photo with the detected face(s) outlined in a square."
          link="https://anastasia-in-code.github.io/face-recognition/"
          gitlink="https://github.com/anastasia-in-code/face-recognition"
        />

        <Project
          name="Music app"
          videoSrc={musicapp}
          description="A small React and Tailwind CSS responsive web application serves as a simple music player, offering an intuitive user interface for seamless navigation. "
          link="https://anastasia-in-code.github.io/music-app/"
          gitlink="https://github.com/anastasia-in-code/music-app"
        />

        <Project
          name="Admin Panel"
          videoSrc={admin}
          description="This platform empowers users to access and analyze statistics and charts, providing a visually engaging and informative interface for efficient data interpretation. The combination of React.js and Material UI ensures a seamless user experience. "
          link="https://anastasia-in-code.github.io/admin-panel-client/dashboard"
          gitlink="https://github.com/anastasia-in-code/admin-panel-client"
        />
      </div>
    </Container>
  );
};

const Project = ({ videoSrc, name, description, link, gitlink }) => {
  return (
    <div className="proj">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a className="highlight" target="_blank" rel="noreferrer" href={link}>
          <h3>{name}</h3>
        </a>
        <a
          className="highlight"
          target="_blank"
          rel="noreferrer"
          href={gitlink}
        >
          <h3>GitHub</h3>
        </a>
      </div>

      <div className="project-content">
        <a target="_blank" rel="noreferrer" href={link}>
          <video
            onMouseEnter={(e) => {
              e.target.play();
            }}
            onMouseLeave={(e) => {
              e.target.pause();
            }}
            src={videoSrc}
            muted
          />
        </a>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default Projects;
