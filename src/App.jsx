import './App.scss'
import Header from './components/Header/Header.jsx';
import HomePage from './pages/HomePage/HomePage.jsx'
import AboutMePage from './pages/AboutMePage/AboutMePage.jsx'
import CertificatePage from './pages/CertificatePage/CertificatePage.jsx'
import ResumePage from './pages/ResumePage/ResumePage.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero.jsx';

function App() {
  

  return (
    <>

    <BrowserRouter>
     
     <Header/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/AboutMePage' element={< AboutMePage/>}/>
      <Route path='/CertificatePage' element={< CertificatePage/>}/>
      <Route path='/ResumePage' element={< ResumePage/>}/>
      
     </Routes>
     
      
     
     </BrowserRouter>

    </>
  )
}

export default App
