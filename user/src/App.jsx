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
import PaymentForm from './Components/pages/donation/PaymentForm'

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
          </>
        }/> 

        <Route path='/careers' element={
          <>
            <Navbar />
            <MainSection />
            <Footer />
          </>
        }/>
      </Routes>
    </Router>
  );
};

export default App;