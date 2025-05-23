import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import "./App.css";
import Home from "./components/Home";
import Approach from './components/Approach';
import Seo from './components/Seo';
import Website from './components/Website';
import Branding from './components/Branding';
import Google_Ads from './components/Google_Ads';
import Social from './components/Social';
import Audit from './components/Audit';
import MetaAds from './components/MetaAds';
import Consulting from './components/Consulting';
import Communication from './components/Communication';
import Update from './components/Update';
import QuickContact from './components/templates/QuickContact';
import About from './components/About';
import ScrollToTop from './components/templates/ScrollToTop';
function App() {
  return (
    <div className="main-container">
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Approach' element={<Approach/>}/>
          <Route path='/Seo' element={<Seo/>}/>
          <Route path='/Website' element={<Website/>}/>
          <Route path='/Branding' element={<Branding/>}/>
          <Route path='/GoogleAds' element={<Google_Ads/>}/>
          <Route path='/Social' element={<Social/>}/>
          <Route path='/Audit' element={<Audit/>}/>
          <Route path='/MetaAds' element={<MetaAds/>}/>
          <Route path='/Consulting' element={<Consulting/>}/>
          <Route path='/Communication' element={<Communication/>}/>
          <Route path='/Update' element={<Update/>}/>
          <Route path='/QuickContact' element={<QuickContact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
