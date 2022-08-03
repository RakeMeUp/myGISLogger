import { useState } from "react"
import DaysTable from "../components/Statistics/daysTable"
import TopDash from "../components/Statistics/TopDash"

function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <h1>HOME</h1>
      <div>
        <TopDash />
        <button onClick={()=>setIsMenuOpen(prev => !prev)}>Toggle Days</button>
        {isMenuOpen && <DaysTable />}
      </div>
    </>
  )
}

export default Home