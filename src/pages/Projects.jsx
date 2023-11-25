import { Container } from "@mui/material"
import aiapp from '../imgs/projects/aiapp.png'

const Projects = () => {
    return <Container sx={{ pt: 10, pb: 20 }}>
        <h2>My hobby projects:</h2>
        <div className="projects">
            <Project name="Face recognition app"
                imgSrc={aiapp}
                description="lorem inpsum"
                link="https://face-recognizer-fe-c56d26d8abe4.herokuapp.com/" />
            <Project name="Face recognition app"
                imgSrc={aiapp}
                description="lorem inpsum"
                link="https://face-recognizer-fe-c56d26d8abe4.herokuapp.com/" />
            <Project name="Face recognition app"
                imgSrc={aiapp}
                description="lorem inpsum"
                link="https://face-recognizer-fe-c56d26d8abe4.herokuapp.com/" />
            <Project name="Face recognition app"
                imgSrc={aiapp}
                description="lorem inpsum"
                link="https://face-recognizer-fe-c56d26d8abe4.herokuapp.com/" />
        </div>

    </Container>


}

const Project = ({ name, imgSrc, description, link }) => {
    return <div className="proj">
        <a href={link}>{name}</a>
        <p>{description}</p>

        <a target='_blank' rel="noreferrer" href={link}><img className="projectImg" alt={name} src={imgSrc} /></a>
    </div>
}

export default Projects