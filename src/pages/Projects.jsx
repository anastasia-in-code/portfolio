import { Container } from "@mui/material"
import aiapp from '../videos/aiapp.mp4'

const Projects = () => {

    return <Container sx={{ pt: 10, pb: 20 }}>
        <h2>My hobby projects:</h2>
        <div className="projects">
            <Project name="Face recognition app"
                imgSrc={aiapp}
                description="Face Recognition AI is a web application that utilizes external AI services to detect and highlight faces in photos. With this application, you can simply provide a link to a photo, and it will display the photo with the detected face(s) outlined in a square. 📸"
                link="https://face-recognizer-fe-c56d26d8abe4.herokuapp.com/" />
        </div>

    </Container>
}

const Project = ({ name, description, link }) => {
    return <div className="proj">
        <a className='highlight' href={link}><h3>{name}</h3></a>
        <div className="project-content">
            <a target='_blank' rel="noreferrer" href={link}>
                <video
                    onMouseEnter={(e) => {
                        e.target.play()
                    }}
                    onMouseLeave={(e) => {
                        e.target.pause()
                    }}
                    src={aiapp}
                    muted />
            </a>
            <p>{description}</p>
        </div>

    </div>
}

export default Projects