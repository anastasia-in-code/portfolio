import { Paper, Container, Typography, Link } from '@mui/material';

const Footer = () => {
    return <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <Container maxWidth="sm">
            <Typography variant="body2" align="center">
                <b>Contact me:</b>
                <br />
                Email: <Link href="mailto:anastasiia.perih@gmail.com">anastasiia.perih@gmail.com</Link>
                <br />
                Cell: <Link href="tel:+15517992167">+1 (551) 799-21-67</Link>
                <br />
                LinkedIn: <Link href="https://www.linkedin.com/in/anastasiia-perih/" target="_blank" rel="noopener noreferrer">linkedin.com/in/anastasiya-perih/</Link>
                <br />
                GitHub: <Link href="https://github.com/anastasia-in-code" target="_blank" rel="noopener noreferrer">github.com/unicorn1408</Link>
            </Typography>
        </Container>
    </Paper>
}

export default Footer