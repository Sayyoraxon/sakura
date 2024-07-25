import "./Footer.css"
import img from "../assets/img/footerImg.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <a href="#">
            Впечатлении
            </a>
            <a href="#">
            Больше о празднике  
            </a>
            <a href="#">
            Как участвовать?  
            </a>
            <p>
            Copyright 2021 R  
            </p>
        </div>
        <div className="second">
        <p>
            Хотели бы вы принять участие в фестивале сакуры? 
        </p>
        <button>
            Связаться
        </button>
        </div>
        <img src={img} alt="img"/>
    </div>
  )
}

export default Footer