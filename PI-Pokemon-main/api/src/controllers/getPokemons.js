const URL = "https://pokeapi.co/api/v2/pokemon/";
const axios = require('axios');


exports.getPokemons= async (req,res) => {
    const { name } = req.query;
  
if (name) {
        const { data } = await axios.get(`${URL}${name}`).catch((error) => res.status(400).json(error));
        return res.status(200).send(data);
    }
    const { data } = await axios.get(URL)
    return res.status(200).send(data.results);
}

    //----------FALTA MANEJO ERRORES ---------------------------------------

//------------------- EJEMPLO CON AXIOS
    // getDogs: async (req,res) => {
    //     const { data } = await axios.get(
    //         `https://api.thedogapi.com/v1/breeds`,{
    //         headers: {'x-api-key': process.env.API_KEY}
    //     })
    //     .catch(error => res.status(400).json(error))
    //     const breeds = data.map(b => {
    //         return {
    //             dog_id: b.id,
    //             name: b.name,
    //             height: b.height.metric,
    //             weight: b.weight.metric,
    //             img: b.image.url,
    //             temperament: b.temperament,
    //             life_span: b.life_span
    //         }
    //     })
    //     return res.json(breeds)
    // }