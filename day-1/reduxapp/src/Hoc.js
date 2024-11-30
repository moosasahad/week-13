import React from 'react'

function Hoc(Wraper) {

    return ()=>{

        return (
            <div style={{backgroundColor:"red"}}>
              <Wraper/>
            </div>
          )
    }
 
}

export default Hoc
