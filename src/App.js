import './App.css';
import {useState} from 'react'

import {
  ThemeProvider,
} from '@mui/material/styles';

import theme from './theme';

import Footer from './components/Footer';
import Header from './components/Header';
import Me from './pages/Me';
import ResumeComponent from './pages/Experience';

function App() {
  const [path, setPath] = useState('')

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header setPath={setPath}/>
        {path === 0 && <Me />}
        {path === 1 && <ResumeComponent />}
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
