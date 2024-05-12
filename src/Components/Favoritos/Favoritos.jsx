import React, { useContext } from "react";
import LikesContext from "../LikesContext/LikesContext";
import { Card, Button } from "react-bootstrap";

function Favoritos({ pokemon }) {
  const { likes } = useContext(LikesContext);
  const favoritos = pokemon.filter((_, index) => likes[index]);

  return (
    <div className="d-flex justify-content-center m-2">
      {favoritos.map((poke, index) => (
        <Card style={{ width: "18rem" }} key={index} className="m-2">
          <Card.Img variant="top" src={poke.data.sprites.front_default} />
          <Card.Body>
            <Card.Title>{poke.name}</Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Favoritos;
