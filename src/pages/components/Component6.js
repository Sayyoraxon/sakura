import "./Component6.css"
import warning from "../../assets/icons/warning.svg"

const Component6 = () => {
  return (
    <div className='component6'>
        <div>
            <div className="mobileVer">
                <p>
                    Вы хотите забронировать место? 
                </p>
                <img src={warning} alt="warning"/>
            </div>
            <p>
                Участвуйте в этом празднике 
            </p>
            <label>
                Имя и фамилия
                <input type="text" placeholder="プレースホルダー"/>
            </label>
            <div>
                <label>
                    Номер телефона
                    <input type="tel" placeholder="番号"/>
                </label>
                <label>
                    Адрес электронной почты
                    <input type="text" placeholder="電子メールアドレス"/>
                </label>
            </div>
            <button>
                Отправит
            </button>
            <div className="absDiv" id="none">

            </div>
        </div>
    </div>
  )
}

export default Component6