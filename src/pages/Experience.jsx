import React from 'react';
import { Container, Typography, Paper, List, ListItem, Button, ListItemText } from '@mui/material';

const ResumeComponent = () => {
    return (
            <Container sx={{ pt: 10, pb:20}}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>
                    Professional Experience
                </Typography>

                <Paper elevation={3} sx={{ padding: 2, marginBottom: 2 }}>
                    <Typography variant="h6" sx={{ marginBottom: 1 }}>
                        Full Stack Software Engineer at DataArt (Jan 2021 - Oct 2023)
                    </Typography>
                    <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                        Projects:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText
                                primary="Healthcare Advertising Company"
                                secondary="The BI tool simplifies data handling (calculations, report generation, and export)"
                            />
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                <ul className='achive'>
                                    <li>Designed and implemented UI, according to Web Content Accessibility Guidelines.</li>
                                    <li>Reengineered existing React components for reusability, reducing maintenance efforts by 70%.</li>
                                    <li>Implemented data validation mechanisms based on analytics feedback, improving data accuracy by 17%.</li>
                                    <li>Implemented Role-Based Access Control, improving security and access control.</li>
                                    <li>Implemented a real-time chat feature based on Socket protocol, enriching user experience.</li>
                                    <li>Implemented caching mechanism, resulting in a 25% reduction in response times.</li>
                                    <li>Implemented sorting and filtering functionality, improving data organization and retrieval.</li>
                                    <li>Conducted demos and learning sessions.</li>
                                </ul>
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary="Marketplace"
                                secondary="The platform enables buyers and sellers to connect to exchange goods and services"
                            />
                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                <ul className='achive'>
                                    <li>Implemented REST API service, enhancing data access and interactions.</li>
                                    <li>Optimized application logic, reducing client-side workload and HTTP requests by 68%.</li>
                                    <li>Covered over 60% of the system's functionality with unit tests.</li>
                                    <li>Optimized data storage and retrieval, resulting in a 15% reduction in execution time and enhanced response time.</li>
                                    <li>Developed internal JWT-based login service, promoting reusability, and enhancing user authentication.</li>
                                </ul>
                            </Typography>
                        </ListItem>


                    </List>
                </Paper>

                <Button variant="contained">DOWNLOAD RESUME</Button>

                {/* <Typography variant="h5" sx={{ marginTop: 4, marginBottom: 2 }}>
                    Skills
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                    Languages: JavaScript, TypeScript, HTML, CSS, SQL, JSON
                </Typography> */}


            </Container>
    );
};

export default ResumeComponent;
