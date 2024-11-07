import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomeSection from './components/homesection/HomeSection';
import AboutSection from './components/aboutsection/AboutSection';
import NumbersSections from './components/numberssection/NumbersSection';
import NewsSection from './components/newssection/NewsSection';
import Footer from './components/footer/Footer';
import MainSection from './components/pages/careers/MainSection';
import FirstSection from './Components/pages/breadforgood/firstsection/FirstSection'
import SecondSection from './Components/pages/breadforgood/secondsection/SecondSection';
import ThirdSection from './Components/pages/breadforgood/thirdsection/ThirdSection';
import FourthSection from './Components/pages/breadforgood/fourthsection/FourthSection';
import PaymentForm from './Components/pages/donation/PaymentForm';
import MiniSection from './Components/pages/breadforgood/miniSection/MiniSection';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <HomeSection />
            <AboutSection />
            <NumbersSections />
            <NewsSection />
            <Footer />
          </>
        }/>

        <Route path='/donation' element={ 
          <>
            <Navbar />
            <PaymentForm />
            <Footer />
          </>
        }/> 

        <Route path='/careers' element={
          <>
            <Navbar />
            <MainSection />
            <Footer />
          </>
        }/>

        <Route path='/bfg' element={
          <>
            <Navbar />
            <FirstSection />
            < MiniSection/>
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <Footer />
          </>
        }/>

      </Routes>
    </Router>
  );
};

export default App;