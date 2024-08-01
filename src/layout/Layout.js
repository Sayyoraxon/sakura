import Footer from '../MainComponents/Footer';
import bar from '../assets/icons/bar.svg'
import { Outlet } from 'react-router-dom';
import './Layout.css'
import MobileNav from './MobileNav';


const Layout = ({close, setClose}) => {
 

    return (
        <>

            {close && <MobileNav setClose={setClose}/>}

            <div className='header'>

                <nav>
                    <img src={bar} alt="bar" className='bar' 
                    onClick={()=>setClose(true)}/>
                    <button>
                        Live
                    </button>
                    <div className='navbar'>

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
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;
