import React from 'react'

function Newhoc(Wrapperhoc) {
    return()=>{
        return (
            <div style={{backgroundColor:"navy"}}>
              <Wrapperhoc/>
            </div>
          )
    }
 
}

export default Newhoc
