const URL = "https://pokeapi.co/api/v2/type/";
const axios = require('axios')
// https://pokeapi.co/api/v2/type

exports.postPokemons = async (req, res)=> {   

    const {query, otro }= req.body;
    console.log(query);

    if(query){
        const { data } = await axios.get(URL)
        const respuesta = query + " " + otro;
       return res.status(200).send(respuesta); 
    }
  


	// const{	data } = await axios.(`${URL}`) 
    //     return res.status(200).send(data); 
                            
}