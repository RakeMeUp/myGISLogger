import { useDataContext } from "../contexts/dataContext"

function Home() {
  const {entries, getSumOfMinutes} = useDataContext()

  return (
    <>
      <h1>HOME</h1>
      <div>
        <h2>work</h2>
        <h3>Current</h3>
        <div>mins: {getSumOfMinutes(entries)}</div>
        <div>{JSON.stringify(entries)}</div>
      </div>
    </>
  )
}

export default Home