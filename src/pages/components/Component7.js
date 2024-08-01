import './Component7.css'
import flower from '../../assets/img/flowersakura.png'
import arrow from '../../assets/icons/arrow.svg'
import profil1 from '../../assets/img/profil1.png'
import profil2 from '../../assets/img/profil2.png'
import profil3 from '../../assets/img/profil3.png'
import profil4 from '../../assets/img/profil4.png'
import profil5 from '../../assets/img/profil5.png'

const Component7 = ({left}) => {
  return (
    <div className='component7'
      style={{top: `${-470-left*7}px`}}
    >
        <div className='mobileVer2'>
            <p>
                Люди делятся своими впечатлениями
            </p>
            <img src={arrow} alt="arrow"/>
        </div>
        <div className='profilDiv'>
            <div>
                <p>
                    Нас более  
                </p>
                <p>
                    1 млрд. 
                </p>
            </div>
            <div>
                <div style={{zIndex: "5"}}>
                  <img src={profil3} alt='profil'/>  
                </div>
                <div style={{zIndex: "4"}}>
                  <img src={profil2} alt='profil'/>  
                </div>
                <div style={{zIndex: "3"}}>
                  <img src={profil1} alt='profil'/>  
                </div>
                <div style={{zIndex: "2"}}>
                  <img src={profil4} alt='profil'/>  
                </div>
                <div>
                  <img src={profil5} alt='profil'/>  
                </div>
            </div>
        </div>
        <div>
            <img src={flower} alt="flower"/>
        </div>
    </div>
  )
}

export default Component7