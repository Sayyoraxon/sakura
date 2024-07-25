import "./Component3.css"
import img1 from "../../assets/img/img1.png"
import img2 from "../../assets/img/img2.png"
import img3 from "../../assets/img/img3.png"
import img4 from "../../assets/img/img4.png"
import img5 from "../../assets/img/img5.png"

const Component3 = () => {
  return (
    <div className="component3">
      <div>
        <img src={img1} alt="sakura"/>
        <img src={img2} alt="sakura"/>
        <img src={img3} alt="sakura"/>
        <img src={img4} alt="sakura"/>
        <img src={img5} alt="sakura"/>
      </div>
      <button>
        Подробнее
      </button>
    </div>
  )
}

export default Component3