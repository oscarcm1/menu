import './App.css'
import { data } from './data/Data'

function App() {

  return (
    <div className='box'>
      
      {data.map((key) =>
        <div className='card'  key={key.id} >
           <img src={key.img} alt=""/>
           <p>{key.title}</p>
        </div>
      )}

    </div>
  )
}

export default App
