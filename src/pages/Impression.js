import "./style.css"
import abbos from "../assets/img/profil2.png"
import mishel from "../assets/img/mishel.png"
import lolita from "../assets/img/lolita.png"
import prf1 from "../assets/img/download.png"
import prf2 from "../assets/img/download-1.png"
import prf3 from "../assets/img/download-2.png"
import arrow from "../assets/icons/arrow2.svg"

const Impression = () => {

    const cards = [
        {
            id: "1",
            name: "Abbos Janizakov",
            img1: abbos,
            img2: prf1
        },
        {
            id: "2",
            name: "Lolita Coy",
            img1: lolita,
            img2: prf2
        },
        {
            id: "3",
            name: "Mishel Francua",
            img1: mishel,
            img2: prf3
        }

    ]

    const length = cards.length - 1


    return (
        <div className='impression'>
            {cards.map((card, i) => (
                <div key={card.id} className='card'>
                    <div>
                        <div>
                            <p>Поделился</p>
                            <p>{card.name}</p>
                        </div>
                        <div>
                            <img src={card.img1} alt="profil" />
                        </div>
                    </div>
                    <img src={card.img2} alt='post' />

                    {
                        i === length &&
                        <div className="arrow">
                            <img src={arrow} alt="arrow" />
                        </div>
                    }
                </div>
            ))}
        </div>
    )
}

export default Impression