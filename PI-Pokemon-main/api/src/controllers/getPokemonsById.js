const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require('axios')


exports.getPokemonsById = async (req,res) => {
	const { id } = req.params;
    
	if (id) {
	const{	data } = await axios.get(`${URL}${id}/`) 
        return res.status(200).send(data); 
    }                              
const {data } = await axios.get(URL)
		return res.status(200).send(data.results);
	}

	//----------FALTA MANEJO ERRORES ---------------------------------------
    // return res.status(404).json({ message: "No hay data" });