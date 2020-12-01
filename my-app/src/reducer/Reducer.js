
import {Increment,Decrement} from '../const/const'


const MyState={

    count:0,
}

  const Reducer=(state=MyState,action)=>{
 console.log(state)
    switch(action.type){
        case Increment :
            return {
             count:state.count+action.payload
             }
    
    case Decrement :
        return {
         count:state.count-action.payload
         }
         default :
         return state

            

 }

  }

export default Reducer