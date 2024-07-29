import { useState } from 'react';
import './Layout.css'; // Import your CSS file for styling
import sakura from "../assets/img/sakura.png"
import sakura1 from "../assets/img/sakura1.png"
import sun from "../assets/img/sun.png"
import shadow from "../assets/img/shadow.png"
import table from "../assets/img/table.png"
import mountain from "../assets/img/mountain.png"
import mountain1 from "../assets/img/mountain1.png"
import stones from "../assets/img/stones.png"
import useWindowDimensions from './useWindowDimensions';
import bar from '../assets/icons/bar.svg'


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
                >
                    <div className='flex1'
                    style={{ top: `${width > 1440 ? 177 - 2 * left : 30 - 2 * left}px`}}>
                        <div className='div1'>
                            Ханами Сакура и фестиваль цветения сакуры в Японии
                        </div>
                        <div className='div3'>
                            <p>
                            Начался Ханами Сакура и фестиваль цветения 
                            </p>
                            <h1>
                            Сакуры в Японии
                            </h1>
                        </div>
                        <div className='div2'>
                            <button className="play-button">
                                <span className="play-icon"></span>
                            </button>
                        </div>
                    </div>


                    <img src={sun} alt="image" className='img1'
                        style={{ left: `${ width > 1440 ? -178 + left * 3.1 : width < 500 ? -100 : -178 + left * 1.5}px`, width: width < 500 ? `${250}px` : `${717 - left * 1.2}px`, top: width > 1440 ? `${380 + left * 0.8}px` : "250px" }} />
                    <img src={sakura} alt="image" className='img2'
                        style={{ left: `${width > 1440 ? 100 + left * 2 : 100}px`, width: `${717 - left * 1.7}px`, top: `${width > 1440 ? 380 + left * 0.9 : 250}px` }} />
                    <img src={shadow} alt="image" className='img3'
                        style={{ width: `${6470 - left * 4}px`, left: `${-2491 + left * 2.5}px`, top: `${width > 1440 ? 750 + left * 0.1 : 618 - left * 0.8}px` }} />
                    <img src={table} alt="image" className='img4'
                        style={{ right: `${width > 1440 ? 478 - left * 0.03 : 178 - left * 0.01}px`, width: `${499 - left * 1.1}px`, top: width > 1440 ? `${560+left*0.6}px` : "430px" }} />
                    <img src={mountain} alt="mountain" className='img5'
                        style={{ left: `${width > 1440 ? -1307 + left * 4.4 : -1307 + left * 2.8}px`, top: `${width > 1440 ? 1030 - left * 1.3 : 500 - left}px`, width: `${1845 - left * 2.3}px` }} />
                    <img src={mountain1} alt="mountain" className='img6'
                        style={{ left: `${width > 1440 ? -1107 + left * 4.4 : -1107 + left * 2.8}px`, top: `${width > 1440 ? 1049 - left * 1.3 : 500 - left}px`, width: `${1645 - left * 2.3}px` }} />
                    <img src={sakura1} alt="sakura" className='img7'
                        style={{ right: `${width > 1440 ? -1000 + left * 2.2 : -1000 + left * 2.6}px`, top: `${width > 1440 ? 638 - left * 0.3 : 350 - left * 0.6}px` }} />
                    <img src={stones} alt="stones" className='img8'
                    style={{left: width > 1440 ? `${-300 + left}px` : `${-100 + left}px`, top: width > 1440 ? `${1500-left*1.5}px` : `${900-left * 0.8}px`, width: width > 1440 ? `${1605 - left * 2}px` : `${1300 - left * 3}px`}}/>
                </div>
            </div>



        </>
    );
};

export default Layout;
