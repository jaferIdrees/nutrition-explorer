import React from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { Card } from 'react-bootstrap';
import BackButton from '../components/BackButton';

function RecipePage() {
  const location = useLocation();
  const { recipe } = location.state.recipe;
  return (
    <div className="ms-auto me-auto" style={{ maxWidth: '40rem' }}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@600&display=swap" rel="stylesheet" />
      <h1 className="text-center cairoFont">{recipe.label}</h1>
      <BackButton />
      <Card.Img src={recipe.image} alt="Recipe" />
      <h6 className="text-center my-0 text-muted bg-warning" style={{ '--bs-bg-opacity': '.8' }}>
        Calories
        {'   '}
        <Badge bg="secondary">{Math.floor(recipe.calories)}</Badge>
      </h6>
      {(recipe.totalTime !== 0) && (
        <h6 className="text-center text-muted my-0 bg-danger" style={{ '--bs-bg-opacity': '.8' }}>
          Total Time
          {'   '}
          <Badge bg="secondary">
            {recipe.totalTime}
            {' '}
            min
          </Badge>
        </h6>
      )}
      <ListGroup className="bg-warning mt-1 mb-0" style={{ '--bs-bg-opacity': '.8' }}>
        <ListGroup.Item key={uuidv4()} className="h3 bg-warning text-center">Ingredient</ListGroup.Item>
        {recipe.ingredientLines.map((line) => (
          <ListGroup.Item className="bg-warning" key={uuidv4()} style={{ '--bs-bg-opacity': '.8' }}>
            {line}
          </ListGroup.Item>
        ))}
      </ListGroup>
      {(recipe.healthLabels.length !== 0) && (
      <ListGroup.Item key={uuidv4()} className="my-2 rounded bg-danger" style={{ '--bs-bg-opacity': '.8' }}>
        <h4 className="mb-0 text-center">Health Labels</h4>
        <br />
        <div className="d-flex flex-wrap gap-1 justify-content-center">
          {recipe.healthLabels.map((label) => (
            <>
              <Badge key={label} bg="warning" text="muted" style={{ '--bs-bg-opacity': '.8' }}>{label}</Badge>
              {'  '}
            </>
          ))}
        </div>
      </ListGroup.Item>
      )}
    </div>
  );
}

export default RecipePage;
