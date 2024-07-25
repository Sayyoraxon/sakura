import './App.css'; // Import your CSS file for styling
import Footer from './MainComponents/Footer';
import Layout from './layout/Layout';
import MainContent from './pages/MainContent';


const App = () => {


  return (
    <>
  
      <Layout/>
      <MainContent/>
      <Footer/>
    </>
  );
};

export default App;
