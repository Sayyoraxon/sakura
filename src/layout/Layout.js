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


const Layout = () => {
    const [left, setleft] = useState()

    const { width } = useWindowDimensions()

    return (
        <>
            <div className='header'>
                
                <nav>
                <img src={bar} alt="bar" className='bar'/>
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
            onScroll={(e)=>setleft(e.target.scrollTop)}>

                <div className='parallax' id="parallax">
                    <div className='div1'
                        style={{top: `${width>1440 ? 177 : 30 -2*left}px`, left: width>1440 ? "440px" : "200px"}}
                    >
                        Ханами Сакура и фестиваль цветения сакуры в Японии
                    </div>
                    <div className='div2'
                        style={{top: `${width>1440 ? 177 : 30-2*left}px`, left: width>1440 ? "925px" : "700px"}}>
                        <button className="play-button">
                            <span className="play-icon"></span>
                        </button>
                    </div>
                    <img src={sun} alt="image" className='img1'
                        style={{ left: `${-178 + left * 1.5}px`, width: `${717 - left * 1.1}px`, top: width > 1440 ? "543px" : "250px" }} />
                    <img src={sakura} alt="image" className='img2'
                        style={{ width: `${717 - left * 2.2}px`, top: `${width > 1440 ? 538 : 250 + left * 0.3}px` }} />
                    <img src={shadow} alt="image" className='img3'
                        style={{ width: `${6470 - left * 10}px`, left: `${-2491 + left * 2.5}px`, top: `${width > 1440 ? 911 : 618 - left * 0.8}px` }} />
                    <img src={table} alt="image" className='img4'
                        style={{ left: `${1059 + left * 1.3}px`, width: `${499 - left * 1.1}px`, top: width > 1440 ? "718px" : "430px" }} />
                    <img src={mountain} alt="mountain" className='img5'
                        style={{ left: `${-2307 + left * 7.7}px`, top: `${width > 1440 ? 710 : 422 - left * 0.5}px`, width: `${2779 - left * 7}px` }} />
                    <img src={mountain1} alt="mountain" className='img6'
                        style={{ left: `${-1107 + left * 4.4}px`, top: `${width > 1440 ? 879 : 591 - left * 0.93}px`, width: `${1645 - left * 4.5}px` }} />
                    <img src={sakura1} alt="sakura" className='img7'
                        style={{ left: `${width > 1440 ? 1800 : 1400 - left * 2.2}px`, top: `${width > 1440 ? 638 : 350 - left * 0.6}px` }} />
                </div>
            </div>
        </>
    );
};

export default Layout;
