import { useVarContext } from "../../contexts/varContext"
import {VarForm} from "./VarForm"

function Menu() {

    const {isMenuOpen, toggleMenu} = useVarContext()

    return (
    <div>
        <button onClick={()=>{toggleMenu()}}>Toggle</button>
        {isMenuOpen ? (<VarForm/>) : <div>Closed</div>}
    </div>
  )
}

export default Menu