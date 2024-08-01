import "./style.css"
import Component1 from './components/Component1'
import Component2 from "./components/Component2"
import Component3 from "./components/Component3"
import Component4 from "./components/Component4"
import Component5 from "./components/Component5"
import Component6 from "./components/Component6"
import Component7 from "./components/Component7"
import Animation from "../layout/Animation"

const MainContent = ({left, setleft}) => {

  return (
    <div className="main">
      <Animation left={left} setleft={setleft}/>
      <div className='mainContent'>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 left={left} />
        <Component7 left={left} />
      </div>
    </div>
  )
}

export default MainContent