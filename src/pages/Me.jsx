import { Avatar, Card, Button } from '@mui/material';

import me from '../imgs/me2.png'
import About from '../components/About'
import Contacts from '../components/Contacts'

import gitIcon from '../imgs/icons/git.png'
import cssIcon from '../imgs/icons/css.png'
import htmlIcon from '../imgs/icons/html.png'
import jenkinsIcon from '../imgs/icons/jenkins.png'
import nodeIcon from '../imgs/icons/node.png'
import jsIcon from '../imgs/icons/javascript.png'
import jiraIcon from '../imgs/icons/jira.png'
import mongoIcon from '../imgs/icons/mongodb.png'
import reactIcon from '../imgs/icons/react.png'
import reduxIcon from '../imgs/icons/redux.png'

const Me = () => {
    return <>
        <div className='about'>
            <div className='picture'>
                <Avatar
                    alt="me"
                    src={me}
                    sx={{ width: 300, height: 300 }}
                />
                <Contacts />
            </div>
            <div className='bio'>
                <Card variant="outlined"><About /></Card>
                <div className='buttons'>
                    <Button variant="contained">DOWNLOAD RESUME</Button>
                    <Button variant="contained">HOBBY PROJECTS</Button>
                </div>
            </div>

        </div>
        <div className='tools'>
            <img alt='git' src={gitIcon}></img>
            <img alt='css' src={cssIcon}></img>
            <img alt='html' src={htmlIcon}></img>
            <img alt='jenkins' src={jenkinsIcon}></img>
            <img alt='node' src={nodeIcon}></img>
            <img alt='js' src={jsIcon}></img>
            <img alt='react' src={reactIcon}></img>
            <img alt='redux' src={reduxIcon}></img>
            <img alt='mongo' src={mongoIcon}></img>
            <img alt='jira' src={jiraIcon}></img>
        </div>
    </>
}

export default Me

