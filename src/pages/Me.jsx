import { Avatar, Card, Button } from '@mui/material';

import me from '../me2.png'
import About from '../components/About'
import Contacts from '../components/Contacts'

import gitIcon from '../icons/git.png'
import cssIcon from '../icons/css.png'
import htmlIcon from '../icons/html.png'
import jenkinsIcon from '../icons/jenkins.png'
import nodeIcon from '../icons/node.png'
import jsIcon from '../icons/javascript.png'
import jiraIcon from '../icons/jira.png'
import mongoIcon from '../icons/mongodb.png'
import reactIcon from '../icons/react.png'
import reduxIcon from '../icons/redux.png'

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
            <img src={gitIcon}></img>
            <img src={cssIcon}></img>
            <img src={htmlIcon}></img>
            <img src={jenkinsIcon}></img>
            <img src={nodeIcon}></img>
            <img src={jsIcon}></img>
            <img src={reactIcon}></img>
            <img src={reduxIcon}></img>
            <img src={mongoIcon}></img>
            <img src={jiraIcon}></img>
        </div>
    </>
}

export default Me

