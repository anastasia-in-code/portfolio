import { Box, BottomNavigation } from '@mui/material';
import { useState } from 'react'

import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AppsIcon from '@mui/icons-material/Apps';

const Header = ({ setPath }) => {
    const [value, setValue] = useState(1);
    return <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
            <div className='shadow'>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
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