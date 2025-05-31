import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import "./App.css";
import Home from "./components/Home";
import Approach from './components/Approach';
import Seo from './components/Seo';
import Website from './components/Website';
import Google_Ads from './components/Google_Ads';
import Social from './components/Social';
import Audit from './components/Audit';
import QuickContact from './components/templates/QuickContact';
import About from './components/About';
import ScrollToTop from './components/templates/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
function App() {
  return (
    <div className="main-container">
      <Router>
        <ScrollToTop/>
        <WhatsAppButton/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Approach' element={<Approach/>}/>
          <Route path='/Seo' element={<Seo/>}/>
          <Route path='/Website' element={<Website/>}/>
          <Route path='/GoogleAds' element={<Google_Ads/>}/>
          <Route path='/Social' element={<Social/>}/>
          <Route path='/Audit' element={<Audit/>}/>
          <Route path='/QuickContact' element={<QuickContact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
