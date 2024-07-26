import { useState } from 'react';
import './Layout.css'; // Import your CSS file for styling
import sakura from "../assets/img/sakura.png"
import sakura1 from "../assets/img/sakura1.png"
import sun from "../assets/img/sun.png"
import shadow from "../assets/img/shadow.png"
import table from "../assets/img/table.png"
import mountain from "../assets/img/mountain.png"
import mountain1 from "../assets/img/mountain1.png"
import useWindowDimensions from './useWindowDimensions';
import bar from '../assets/icons/bar.svg'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


const Layout = () => {
    const [left, setleft] = useState()

    const { width } = useWindowDimensions()


    return (
        <>
            <div className='header'>

                <nav>
                    <img src={bar} alt="bar" className='bar' />
                    <button>
                        Live
                    </button>
                    <div>

                        <a href="#">
                            Что это за праздник?
                        </a>


                        <a href="#">
                            Как празднуют?
                        </a>
                        <a href="#">
                            Люди говорят
                        </a>
                        <a href="#">
                            Участие
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            Забронируйте место
                        </a>
                    </div>
                </nav>
            </div>

            <ParallaxProvider>
                <div className=''>


                    <div className='parallax' id="parallax">
                        <Parallax translateY={["620px", "-300px"]}>
                          <div className='flex'>

                        <div className='div1'>
                            Ханами Сакура и фестиваль цветения сакуры в Японии
                        </div>

                        <div className='div2'>
                            <button className="play-button">
                                <span className="play-icon"></span>
                            </button>
                        </div>

                        </div> 
                        </Parallax>

                        <Parallax scale={[2.2, 0]} translateX={["-200px", "400px"]} translateY={["-100px", "100px"]} className='img1'>
                            <img src={sun} alt="image" />
                        </Parallax>

                        <Parallax className='img3'>
                        <img src={shadow} alt="image" />
                        </Parallax>

                        <Parallax scale={[1.4, 0]}  translateX={["200px", "-400px"]} className='img2'>
                        <img src={sakura} alt="image"  />
                        </Parallax> 
                        
                        <Parallax scale={[2.2, 0.3]} translateY={["-500px", "100px"]} >
                            <img src={table} alt="image" className='img4' />
                        </Parallax>

                        <Parallax scale={[2, 0.3]} translateY={["800px", "300px"]}>
                            <img src={mountain1} alt="mountain" className='img6'/>
                        </Parallax>

                        <Parallax scale={[2 , 0.3]} translateY={["500px", "10px"]} >
                         <img src={mountain} alt="mountain" className='img5'/>
                        </Parallax>
                        <img src={sakura1} alt="sakura" className='img7'
                            style={{ left: `${width > 1440 ? 1800 : 1400 - left * 2.2}px`, top: `${width > 1440 ? 638 : 350 - left * 0.6}px` }} />
                    </div>



                </div>
            </ParallaxProvider>

                

        </>
    );
};

export default Layout;
