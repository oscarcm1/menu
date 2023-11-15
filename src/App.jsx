import './App.css'
import { data } from './data/Data'

function App() {

  return (
    <div className='box'>

      {/* {data.map((key) =>
        <div className='card'  key={key.id} >
           <img src={key.img} alt=""/>
           <p>{key.title}</p>
        </div>
      )} */}

        <div className='card'>
          <div className='child'>
          </div>
           <div className='ok'>
              <img src={data[0].img} alt=""/>   
           </div>

           <div className='description'>
             <p className='title'>{data[0].title}  {" "} N.º 0001
             </p>
             <p>Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.</p>
           </div>
        </div>
        
        <div className='card'>
          <div className='child'>
          </div>
           <div className='ok'>
              <img src={data[0].img} alt=""/>   
           </div>

           <div className='description'>
             <p className='title'>{data[0].title}  {" "} N.º 0001
             </p>
             <p>Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.</p>
           </div>
        </div>
        
        <div className='card'>
          <div className='child'>
          </div>
           <div className='ok'>
              <img src={data[0].img} alt=""/>   
           </div>

           <div className='description'>
             <p className='title'>{data[0].title}  {" "} N.º 0001
             </p>
             <p>Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.</p>
           </div>
        </div>
    </div>
  )
}

export default App
