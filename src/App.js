import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css'; // Import your CSS file for styling
import Footer from './MainComponents/Footer';
import Layout from './layout/Layout';
import MainContent from './pages/MainContent';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';


const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout/>}>
        <Route index element = {<MainContent/>}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={routes}/>
  
    </>
  );
};

export default App;
