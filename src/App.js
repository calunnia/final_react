import './App.css'
import React,{useState,useEffect} from 'react'
import Loading from './components/Loading/Loading.jsx'
import Teams from './components/Teams/Teams.jsx'

const App = () => {

    const [data, setData] =useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    
    
    
   useEffect(() => {
      setLoading(true)
      setData([])
      
      fetch(`/api/teams`)
        .then((resopnse) => (resopnse.json()))
        .then((responseAdat)=>(setData(responseAdat)))
        .catch(error=>{
                        console.log('error=',error );
                        setData(null)
        })
        .finally( () => {
                          console.log('fetch end');
                          setLoading(false)
        })
      
      return () => {
        //cleanup
      }
    }, [])
  
        console.log('data', data);
    
    
  return (
    <div className="App">
     <h1>NBA teams -all star voting</h1> 
     <input type="text" placeholder="Search"/>
     {loading && <Loading/> }

            { data === null
                            ? <p>Opps something happend</p>
                            : data.map((team, i)=>( <p>{  <Teams team={team}   search={search}  key={i.toString()}  /> }</p> ))
            }
    </div>
  )
}

export default App
