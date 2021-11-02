// Imports importants
// import axios from "axios";
// import { useState, useEffect } from "react";

// Faire un appel à Axios, Si Axios installé via "npm install axios"
useEffect(() => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then(function (response) {
      // console.log(response.data);
      setCharacters(response.data.results);
    });
}, []);

// Boucle, demande un array en tant qu'entrée
{
  arrayVariable.map((elementArray) => (
    // Elements de la boucle ici :
    <div></div>
  ));
}

// Condition
{
  condition === test && (
    // Resulta si test valide
    <div></div>
  );
}
