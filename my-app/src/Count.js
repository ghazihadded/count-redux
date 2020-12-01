import React from 'react'
import {connect} from 'react-redux';
import {increment,decrement} from './actions/action'



const Count =({count,increment,decrement})=>{

    return (
        <div>
            <button onClick={()=>increment(3)}>+</button>
        <p>{count}</p>
        <button onClick={()=>decrement(3)}>-</button>
        </div>
    )
}


const mapStateToProps=state=>{
    return (
        {
       count:state.count,
    }
    )
}
const mapDispatchToProps=(dispatch)=>{
    return(
        {
            increment :(payload)=>dispatch(increment(payload)),
            decrement :(payload)=>dispatch(decrement(payload))
            
        }
    )
} 

 
export default connect(mapStateToProps,mapDispatchToProps)(Count)