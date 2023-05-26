import { useState } from "react";
import AnimalList from "./AnimalList";


function App() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
  const [animal, setAnimal] = useState([])

  const a = animals[Math.trunc(Math.random() * animals.length)]
  const handleClick = () => {
    setAnimal([...animal, a])
  }

  const renderedAnimal = animal.map((anim, index) => {
    return <AnimalList animal={anim} key={index} />
  })


  return (
    <div className="main-div">
      <button onClick={handleClick}>Add Button</button>
      <div className="lower-div">{renderedAnimal}</div>
    </div>
  )
}

export default App;
