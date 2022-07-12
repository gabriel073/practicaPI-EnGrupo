export const GET_POKEMONS = "GET_POKEMONS";




//==================================OBTENER TODOS LOS PERSONAJES (CHARACTERS)======================================//
// el resto de funciones creadoras de acciones serán similares..

export function getPokemons(query, pagina){
    return function (dispatch){                           // &pagina=${pagina}
        // return fetch(`http://localhost:3001/pokemons?name=${query}`) 
        return fetch(`https://pokeapi.co/api/v2`)
                   // https://pokeapi.co/api/v2/pokemon?name+query
        .then(res => res.json())
        .then(json => {
            dispatch({
                type: GET_POKEMONS, payload: json
            })
             //recordar que el dispatch lo que hace es enviar un objeto con la propiedad type y payload al reducer.
        })
    }
}