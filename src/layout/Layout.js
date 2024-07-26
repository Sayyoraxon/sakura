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

            <div className='layout'
                onScroll={(e) => setleft(e.target.scrollTop)}>

                <div className='parallax' id="parallax"
                style={{ top: `${width > 1440 ? 177 - 2 * left : 30 - 2 * left}px`}}>
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


                    <img src={sun} alt="image" className='img1'
                        style={{ left: `${width > 1440 ? -178 + left * 3.1 : -178 + left * 1.5}px`, width: `${717 - left * 1.2}px`, top: width > 1440 ? "543px" : "250px" }} />
                    <img src={sakura} alt="image" className='img2'
                        style={{ left: `${width > 1440 ? 100 + left * 2 : 100}px`, width: `${717 - left * 1.6}px`, top: `${width > 1440 ? 538 + left * 0.3 : 250}px` }} />
                    <img src={shadow} alt="image" className='img3'
                        style={{ width: `${6470 - left * 4}px`, left: `${-2491 + left * 2.5}px`, top: `${width > 1440 ? 911 - left * 0.7 : 618 - left * 0.8}px` }} />
                    <img src={table} alt="image" className='img4'
                        style={{ right: `${width > 1440 ? 478 - left * 0.03 : 178 - left * 0.01}px`, width: `${499 - left * 1.1}px`, top: width > 1440 ? "718px" : "430px" }} />
                    <img src={mountain} alt="mountain" className='img5'
                        style={{ left: `${width > 1440 ? -1307 + left * 3.5 : -1307 + left * 2.8}px`, top: `${width > 1440 ? 830 - left * 0.8 : 500 - left}px`, width: `${1845 - left}px` }} />
                    <img src={mountain1} alt="mountain" className='img6'
                        style={{ left: `${width > 1440 ? -1107 + left * 3.5 : -1107 + left * 2.8}px`, top: `${width > 1440 ? 849 - left * 0.8 : 500 - left}px`, width: `${1645 - left}px` }} />
                    <img src={sakura1} alt="sakura" className='img7'
                        style={{ right: `${width > 1440 ? -1000 + left * 2.2 : -1000 + left * 2.6}px`, top: `${width > 1440 ? 638 - left * 0.4 : 350 - left * 0.6}px` }} />
                </div>
            </div>



        </>
    );
};

export default Layout;
