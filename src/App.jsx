import './App.scss'
import Header from './components/Header/Header.jsx';
import HomePage from './pages/HomePage/HomePage.jsx'
import AboutMePage from './pages/AboutMePage/AboutMePage.jsx'
import CertificatePage from './pages/CertificatePage/CertificatePage.jsx'
import ResumePage from './pages/ResumePage/ResumePage.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import FullStackPage from './pages/FullStackPage/FullStackPage.jsx'
import  UXPage from './pages/UXPage/UXPage.jsx'
import Footer from './components/Footer/Footer.jsx';

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
      <Route path='/FullStackPage' element={< FullStackPage/>}/>
      <Route path='/UXPage' element={<  UXPage/>}/>
      
     </Routes>
     
     <Footer/>
     
     </BrowserRouter>

    </>
  )
}

export default App
