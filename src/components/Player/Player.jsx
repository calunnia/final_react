import React, { useState } from "react";

function Player({ player, search }) {
  const [vote, setVote] = useState("")
  const [data, setData] =useState([])

  const [loading, setLoading] = useState(false)


  const startPost =(playerId) => {

      
    setLoading(true)
    setData([])
    
    fetch(`/api/vote`,{
                        method:"POST",
                        headers: {  'Authorization' : 'dsadkfjghdfkhd',
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                                },
                        body: JSON.stringify({"id":playerId })
                         }
    )
      .then((resopnse) => (resopnse.json()))
      .then((responseAdat) => { setData(responseAdat);
                                 setVote(!vote);               
      })
      .catch(error=>{
                      console.log('error=',error );
                      setData(null)
      })
      .finally( () => {
                        console.log('fetch end');
                        setLoading(false)
      })
    
    }

   if(player.name.includes(search))

  return (

    <div>
     {
        <p>
          {player.name}
          <button onClick={() => startPost(player.id)}>
            {loading ? '...' : 
                                vote ? "voted" : "vote"}
            
          </button>
        </p>
      }
    </div>
  )

  else
      return ('')
  
}

export default Player;
