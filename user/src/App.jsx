import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// NOTE: File names caused error in importing
import Navbar from './Components/Navbar/Navbar';
import HomeSection from './Components/HomeSection/HomeSection';
import AboutSection from './Components/AboutSection/AboutSection';
import NumbersSections from './Components/NumbersSection/NumbersSection';
import NewsSection from './Components/NewsSection/NewsSection';
import Footer from './Components/Footer/Footer';
import MainSection from './Components/pages/careers/MainSection';
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