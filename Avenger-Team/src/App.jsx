import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home/Home'

function App() {

  const [carts, setCarts] = useState([])
  const [seletedActor, setSeletedActor] = useState([])

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/gias-uddin-swe/B8-final-Bpl-team-maker/main/public/data.json')
      .then(res => res.json())
      .then(data => setCarts(data))
  }, [])


  const handleSelectedActor = (actor) => {
    // console.log(actor);
    const newSeletedActor = [...seletedActor, actor]
    setSeletedActor(newSeletedActor)
    console.log(newSeletedActor);
  }

  return (
    <>
      <div>
        <Home
          handleSelectedActor={handleSelectedActor}
          carts={carts}>
        </Home>
      </div>
    </>
  )
}

export default App
