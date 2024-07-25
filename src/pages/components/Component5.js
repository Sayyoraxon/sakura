import "./Component5.css"
import map from "../../assets/img/map.png"

const Component5 = () => {
    return (
        <div className='component5'>
            <button>
                Оставить отзыв
            </button>
            <div className="flex">
                <div className='verticalLetter'>
                    <p>こ</p>
                    <p>の</p>
                    <p>お</p>
                    <p>祝</p>
                    <p>い</p>
                    <p>に</p>
                    <p>参</p>
                </div>
                <div className='verticalLetter'>
                    <p>加</p>
                    <p>し</p>
                    <p>ま</p>
                    <p>せ</p>
                    <p>ん</p>
                    <p>か</p>
                </div>
                <div className='verticalLetter last'>
                    <p>К</p>
                    <p>а</p>
                    <p>л</p>
                    <p>е</p>
                    <p>н</p>
                    <p>д</p>
                    <p>а</p>
                    <p>р</p>
                    <p>ь</p>
                </div>
                <div className='map'>
                    <div>
                        Дата межрегионального периода цветения сакуры
                    </div>
                
                    <img src={map} alt="map"/>
                </div>
            </div>
        </div>
    )
}

export default Component5