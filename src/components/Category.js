import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Category(category) {
  return (
    <Card className="ms-auto me-auto">
      <Card.Img
        variant="top"
        className="ms-auto me-auto"
        src={{ ...category }.category.image}
        style={{ height: '40vh' }}
      />
      <Card.ImgOverlay>
        <ListGroup bg="success" variant="flush">
          <ListGroup.Item className="bg-success text-white ms-auto me-auto" style={{ '--bs-bg-opacity': '.5' }}>
            {{ ...category }.category.name}
          </ListGroup.Item>
          <ListGroup.Item className="bg-warning text-white ms-auto me-auto w-50" style={{ '--bs-bg-opacity': '.5' }}>
            Max Calories:
            {{ ...category }.category.maxCalories}
          </ListGroup.Item>
          <ListGroup.Item className="bg-warning text-white ms-auto me-auto w-50" style={{ '--bs-bg-opacity': '.5' }}>
            Min Calories:
            {{ ...category }.category.minCalories}
          </ListGroup.Item>
          <ListGroup.Item className="bg-danger text-white ms-auto me-auto w-50" style={{ '--bs-bg-opacity': '.5' }}>
            Max Total Fat:
            {{ ...category }.category.maxTotalFat }
          </ListGroup.Item>
          <ListGroup.Item className="bg-danger text-white ms-auto me-auto w-50" style={{ '--bs-bg-opacity': '.5' }}>
            Min Total Fat:
            {{ ...category }.category.minTotalFat}
          </ListGroup.Item>
        </ListGroup>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Category;
