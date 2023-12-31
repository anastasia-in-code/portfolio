import { Box, BottomNavigation } from '@mui/material';

import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AppsIcon from '@mui/icons-material/Apps';

const Header = ({ path, setPath }) => {
    return <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
            <div className='shadow'>
                <BottomNavigation
                    showLabels
                    value={path}
                    onChange={(event, newValue) => {
                        setPath(newValue)
                    }}
                >
                    <BottomNavigationAction label="Me" icon={<AssignmentIndIcon />} />
                    <BottomNavigationAction label="Experience" icon={<BusinessCenterIcon />} />
                    <BottomNavigationAction label="Projects" icon={<AppsIcon />} />
                </BottomNavigation>
            </div>

        </Box>
}

export default Header