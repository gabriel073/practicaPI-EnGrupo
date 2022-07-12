const URL = "https://pokeapi.co/api/v2/type/";
const axios = require('axios')
// https://pokeapi.co/api/v2/type

exports.getPokemonsTypes= async (req,res) => {   

	const{	data } = await axios.get(`${URL}`) 
        return res.status(200).send(data); 
                            
}

    //----------FALTA MANEJO ERRORES ---------------------------------------
    //-----------DEBE SER GUARDADO EN BBDD Y TRAERLO DESDE ALLI-----------