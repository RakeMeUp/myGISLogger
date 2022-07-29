import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div>
        <h3>navbar</h3>
        <NavLink to='/'>
            HOME
        </NavLink>
        <NavLink to='/datapage'>
            DataPage
        </NavLink>
    </div>
  )
}

export default Navbar