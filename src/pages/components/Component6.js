import "./Component6.css"

const Component6 = () => {
  return (
    <div className='component6'>
        <div>
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
            <div className="absDiv">

            </div>
        </div>
    </div>
  )
}

export default Component6