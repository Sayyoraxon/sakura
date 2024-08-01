import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css'; // Import your CSS file for styling
import Footer from './MainComponents/Footer';
import Layout from './layout/Layout';
import MainContent from './pages/MainContent';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import Impression from './pages/Impression';


const App = () => {

  const [close, setClose] = useState(false)
  const [left, setleft] = useState()

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout close={close} setClose={setClose} />}>
        <Route index element = {<MainContent left={left} setleft={setleft}/>}/>
        <Route path="impression" element={<Impression/>}/>
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
