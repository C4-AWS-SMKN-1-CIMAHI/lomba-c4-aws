import Nabar from './components/Navbar'
import Footer from './components/Footer'
import CopyRight from './components/CopyRight'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import KelasPage from './pages/KelasPage'
import TestimonialPage from './pages/TestimonialPage'
import SyaratKetenPage from './pages/SyaratKetenPage'
import FaqPage from './pages/FaqPage'
import useScrollToTop from './components/useScrollToTop'

function App() {

    useScrollToTop()
    return <div>
        <Nabar/>
        <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path='/kelas' Component={KelasPage}/>
            <Route path='/testimonial' Component={TestimonialPage}/>
            <Route path='/faq' Component={FaqPage}/>
            <Route path='/syaratketen' Component={SyaratKetenPage}/>
        </Routes>
        <Footer/>
        <CopyRight/>
    </div>
}

export default App