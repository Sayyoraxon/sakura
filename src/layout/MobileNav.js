import "./MobileNav.css"
import close from "../assets/icons/close.svg"
import user from "../assets/icons/user.svg"
import line from "../assets/icons/Subtract.svg"
import { NavLink } from "react-router-dom"

const MobileNav = ({setClose}) => {
    return (
        <div className='mobileNav'>
            <img src={close} alt="close" onClick={()=>setClose(false)}/>
            <div className="flex2">
                <img src={user} alt="user" />
                <div>
                    <p>
                        Ваше имя будет здесь
                    </p>
                    <p>
                        22 Декабрья. 2021
                    </p>
                </div>
            </div>
            <div className="wavy">
                <img src={line} alt="line" />
            </div>
            <NavLink>
                О Празднике
            </NavLink>
            <NavLink to="impression">
                Впечатлении
            </NavLink>
            <NavLink>
                Бронировать место
            </NavLink>
            <p className="text">
                Вы еще не вошли в свою учетную запись
            </p>
            <div className="flex3">
                <button>
                    Войти    
                </button>
                |
                <button>
                    Регистрация
                </button>
            </div>

        </div>
    )
}

export default MobileNav