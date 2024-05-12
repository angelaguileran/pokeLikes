import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import LikesContext from "../LikesContext/LikesContext";

function Body({ pokemon }) {
  const { likes, handleLikeClick } = useContext(LikesContext);

  return (
    <div className="d-flex justify-content-center m-2">
      {pokemon.map((poke, index) => (
        <Card style={{ width: "18rem" }} key={index} className="m-2">
          <Card.Img variant="top" src={poke.data.sprites.front_default} />
          <Card.Body>
            <Card.Title className="text-center">{poke.name}</Card.Title>
            <div className="d-flex justify-content-center">
              <Button onClick={() => handleLikeClick(index)}>
                {likes[index] ? "Unlike" : "Like"}
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Body;
