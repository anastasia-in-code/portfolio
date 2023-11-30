import { Container } from "@mui/material"

import aiapp from '../videos/aiapp.mp4'
import gymapp from '../videos/gym.mp4'

const Projects = () => {


    return <Container sx={{ pt: 10, pb: 20 }}>
        <h2>My hobby projects:</h2>
        <div className="projects">

            <Project name="Gym App"
                videoSrc={gymapp}
                description="Introducing GymFlex Pro a fitness project designed to target various muscle groups and 
                elevate your workout experience.Built with React, GymFlex Pro offers a responsive design, ensuring a seamless experience across various devices, from desktops to mobile devices. GymFlex Pro provides a diverse range of exercises accompanied 
                by clear instructions to ensure effective and safe training. Powered by React and styled with Material-UI, it's the ultimate companion for achieving your
                 fitness goals. Start your journey to a healthier, stronger you today!"
                link="https://anastasia-in-code.github.io/gym-app/" gitlink='https://github.com/anastasia-in-code/gym-app' />

            <Project name="Face recognition app"
                videoSrc={aiapp}
                description="Face Recognition AI is a web application that utilizes external AI services to detect and highlight faces in photos. With this application, you can simply provide a link to a photo, and it will display the photo with the detected face(s) outlined in a square."
                link="https://face-recognizer-fe-c56d26d8abe4.herokuapp.com/" gitlink='https://github.com/anastasia-in-code/face-recognition' />


        </div>

    </Container>
}

const Project = ({ videoSrc, name, description, link, gitlink }) => {
    return <div className="proj">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <a className='highlight' target='_blank' rel="noreferrer"  href={link}><h3>{name}</h3></a>
            <a className='highlight' target='_blank' rel="noreferrer" href={gitlink}><h3>GitHub</h3></a>
        </div>

        <div className="project-content">
            <a target='_blank' rel="noreferrer" href={link}>
                <video
                    onMouseEnter={(e) => {
                        e.target.play()
                    }}
                    onMouseLeave={(e) => {
                        e.target.pause()
                    }}
                    src={videoSrc}
                    muted />
            </a>

            <p>{description}</p>
        </div>

    </div>
}

export default Projects