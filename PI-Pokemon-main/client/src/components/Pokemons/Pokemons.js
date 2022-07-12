import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import Spinner from "../Spinner";
// import "./Characters.css";

import { getPokemons } from '../../redux/actions';


function Pokemons(props) {
  const [query, setQuery] = useState("")
  const [pagina, setPagina] = useState(0)
  //aca declaramos un state(estado local) para poder actualizarlo junto con el form que va a ser nuestra suerte de input buscador
  //query es el estado y setQuery el modificador del estado.

  //*******QUÉ ES Y PARA QUÉ SIRVE useSTATE / un Hook ********
  //useState es un hook que te permite añadir el estado de react a un componente de funcion 
  // ***(¿Cuándo debería usar un Hook? Si creas un componente de función y descubres que necesitas añadirle estado, 
  //  antes había que crear una clase. Ahora puedes usar un Hook dentro de un componente de función existente.)***


  useEffect(() => {
    props.getPokemons(query, pagina)
  }, [query, pagina])



  const handleChange = (q) => { //controlador de eventos || manejador de eventos || disparador de funciones
    setQuery(q);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
  }

  // notarán en el return que los handlers, los enviamos en el form y en el input como una suerte de "gatillos", que disparán TODO.
  return (
    <div className="">
      <h1>List of Pokemons</h1>
      <section>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input className="search"
            type="text"
            placeholder=""
            onChange={(e) => handleChange(e.target.value)}
          />
        </form>
      </section>


      {
        props.pokemons ?
          props.pokemons.map((p) =>
            <div key={p.char_id}>
              <div to={`/pokemons/${p.char_id}`}>
                <Link to={`/pokemons/${p.char_id}`}>
                  {p.name}
                  <img src={p.img} />
                  <div className="">
                    {p.type}</div>
                </Link>
              </div>
            </div>
          )
          : "Cargando...."
        // <Spinner />
      }



      <div className="">
        {
          pagina >= 1
            ? <button onClick={() => setPagina(pagina - 1)}>👈</button>
            : ''
        }

        <>
          <a href=""> 1 </a>
          <a href=""> 2 </a>
          <a href=""> 3 </a>
          <a href=""> 4 </a>
          <a href=""> 5 </a>
          <a href=""> 6 </a>
          <a href=""> 7 </a>
          <a href=""> 8 </a>
          <a href=""> 9 </a>
          <a href=""> 10 </a>
          <a href=""> 11 </a>
        </>

        <button onClick={() => setPagina(pagina + 1)}>👉</button>
      </div>
    </div >
  );
}
// Recuerden que el Spinner es un componente que vino de regalito, asi que lo aprovechamos para usarlo y que en caso de demorar la carga, se vea un "loading"

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPokemons: (query, pagina) => dispatch(getPokemons(query, pagina)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
