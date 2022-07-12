import { GET_POKEMONS } from '../actions';



const initialState = {
  
    pokeons: []

}


function rootReducer(state=initialState, action){     
    if(action.type === GET_POKEMONS){
        return{
            ...state,
            pokemons: action.payload
        }
    }
}


export default rootReducer;
 // exportamos la función que vamos a recibir en el store