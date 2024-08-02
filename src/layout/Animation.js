import './Animation.css'
import sakura from "../assets/img/sakura.png"
import sakura1 from "../assets/img/sakura1.png"
import sun from "../assets/img/sun.png"
import shadow from "../assets/img/shadow.png"
import table from "../assets/img/table.png"
import mountain from "../assets/img/mountain.png"
import mountain1 from "../assets/img/mountain1.png"
import stones from "../assets/img/stones.png"
import useWindowDimensions from './useWindowDimensions'
import video from "../assets/videos/japansakura.mp4"


const Animation = ({ left, setleft }) => {


    const { width } = useWindowDimensions()

    return (
        <>
            <div className='layout'
                onScroll={(e) => setleft(e.target.scrollTop)}>

                <div className='parallax' id="parallax"
                >
                    <div className='flex1'
                        style={{ top: `${width > 1440 ? 84 - 2 * left : 10 - 2 * left}px` }}>
                        <div className='div1'>
                            <div>
                                <p>花</p>
                                <p>見</p>
                                <p>桜</p>
                                <p>と</p>
                            </div>

                            <div>
                                <p>日</p>
                                <p>本</p>
                                <p>の</p>
                            </div>

                            <div>
                                <p>桜</p>
                                <p>ま</p>
                                <p>つ</p>
                                <p>り</p>
                            </div>

                            <div>
                                <p>さ</p>
                                <p>く</p>
                                <p>ら</p>
                                <p>は</p>
                                <p>単</p>
                            </div>

                            <div>
                                <p>な</p>
                                <p>る</p>
                                <p>花</p>
                                <p>木</p>
                                <p>で</p>
                                <p>は</p>
                            </div>

                            <div>
                                <p>あ</p>
                                <p>り</p>
                                <p>ま</p>
                                <p>せ</p>
                                <p>ん</p>
                            </div>
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
                        <video width="560" height="315" autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
                            <button className="play-button">
                                <span className="play-icon"></span>
                            </button>
                        </div>
                    </div>


                    <img src={sun} alt="img" className='img1'
                        style={{ left: `${width > 1440 ? -178 + left * 3.1 : width < 500 ? -120 + left : -178 + left * 1.5}px`, width: width < 500 ? `${240 - left * 0.2}px` : `${717 - left * 1.2}px`, top: width < 500 ? `${460 - left * 0.25}px` : width > 1440 ? `${380 + left * 0.8}px` : "250px" }} />
                    <img src={sakura} alt="img" className='img2'
                        style={{ left: `${width < 500 ? -10 + left * 0.6 : width > 1440 ? 100 + left * 2 : 100}px`, width: `${width < 500 ? 233 - left * 0.5 : 717 - left * 1.7}px`, top: `${width < 500 ? 464 - left * 0.15 : width > 1440 ? 380 + left * 0.9 : 250}px` }} />
                    <img src={shadow} alt="img" className='img3'
                        style={{ width: `${6470 - left * 4}px`, left: `${-2491 + left * 2.5}px`, top: `${width < 500 ? 578 - left * 0.45 : width > 1440 ? 750 + left * 0.1 : 618 - left * 0.8}px` }} />
                    <img src={table} alt="img" className='img4'
                        style={{ right: `${width < 900 ? 0 : width < 500 ? -70 - left * 0.6 : width > 1440 ? 478 - left * 0.03 : 178 - left * 0.01}px`, width: `${width < 500 ? 175 - left * 0.4 : 499 - left * 1.1}px`, top: width < 500 ? `${530}px` : width > 1440 ? `${560 + left * 0.6}px` : "430px" }} />
                    <img src={mountain} alt="mountain" className='img5'
                        style={{ left: `${width < 500 ? -900 + left * 3.5 : width > 1440 ? -1307 + left * 4.4 : -1307 + left * 2.8}px`, top: `${width < 500 ? 800 - left * 1.4 : width > 1440 ? 1030 - left * 1.3 : 500 - left}px`, width: `${width < 500 ? 1200 - left * 3.5 : 1845 - left * 2.3}px` }} />
                    <img src={mountain1} alt="mountain" className='img6'
                        style={{ left: `${width < 500 ? -890 + left * 3.5 : width > 1440 ? -1107 + left * 4.4 : -1107 + left * 2.8}px`, top: `${width < 500 ? 794 - left * 1.4 : width > 1440 ? 1049 - left * 1.3 : 500 - left}px`, width: `${width < 500 ? 1200 - left * 3.5 : 1645 - left * 2.3}px` }} />
                    <img src={sakura1} alt="sakura" className='img7'
                        style={{ right: `${width < 500 ? -900 + left * 3 : width > 1440 ? -1000 + left * 2.2 : -1000 + left * 2.6}px`, top: `${width < 500 ? 1000 - left * 1.2 : width > 1440 ? 638 - left * 0.3 : 350 - left * 0.6}px` }} />
                    <img src={stones} alt="stones" className='img8'
                        style={{ left: width < 500 ? -300 + left : width > 1440 ? `${-300 + left}px` : `${-100 + left}px`, top: width < 500 ? 1200 - left * 2.5 : width > 1440 ? `${1500 - left * 1.5}px` : `${900 - left * 0.8}px`, width: width > 1440 ? `${1605 - left * 2}px` : `${1300 - left * 3}px` }} />
                </div>
            </div>
        </>
    )
}

export default Animation