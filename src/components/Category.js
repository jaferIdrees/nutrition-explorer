import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import { v4 as uuidv4 } from 'uuid';
// import GridRow from './GridRow';
import SelectionGroup from './SelectionGroup';
import Beef from '../assets/images/Beef.jpg';
import Bison from '../assets/images/Bison.jpg';
import Chicken from '../assets/images/Chicken.jpg';
import Duck from '../assets/images/Duck.jpg';
import Goose from '../assets/images/Goose.jpg';
import Lamp from '../assets/images/Lamp.jpg';
import Pheasant from '../assets/images/Pheasant.jpg';
import Rabbit from '../assets/images/Rabbit.jpg';
import Turkey from '../assets/images/Turkey.jpg';
import Venison from '../assets/images/Venison.jpg';
import { apiReply } from '../API/recipeData';

function Category(category) {
  const [open, setOpen] = useState(false);
  const hits = [];
  const images = {
    Beef,
    Bison,
    Chicken,
    Duck,
    Goose,
    Lamp,
    Pheasant,
    Rabbit,
    Turkey,
    Venison,
  };
  const dietChoices = [
    'balanced',
    'high-fiber',
    'high-protein',
    'low-carb',
    'low-fat',
    'low-sodium',
  ];
  const healthChoices = [
    'alcohol-cocktail',
    'celery-free',
    'crustacean-free',
    'dairy-free',
    'DASH',
    'egg-free',
    'fish-free',
    'gluten-free',
    'keto-friendly',
    'kosher',
    'no-oil-added',
    'pork-free',
  ];
  const cuisineChoices = [
    'American',
    'Asian',
    'Central Europe',
    'Eastern Europe',
    'Middle Eastern',
  ];
  const getHits = () => {
    for (let i = 0; i < { ...category }.category.hits.length; i += 2) {
      const row = {
        col1: { ...category }.category.hits[i],
        col2: { ...category }.category.hits[i + 1] || null,
      };
      hits.push(row);
    }
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const forms = e.target.parentElement.querySelectorAll('form');
    /* const formData = new FormData(e.target);
    console.log(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj); */
    const dietSelection = [...forms[0]].map((choice) => (choice.checked ? choice.value : ''));
    const healthSelection = [...forms[1]].map((choice) => (choice.checked ? choice.value : ''));
    const cuisineSelection = [...forms[2]].map((choice) => (choice.checked ? choice.value : ''));
    console.log(dietSelection, healthSelection, cuisineSelection);
    const data = apiReply;
    console.log(data.hits[17].recipe.totalNutrients['SUGAR.added']);
  };
  getHits();
  return (
    <>
      <Card className="ms-auto me-auto" style={{ maxWidth: '40rem' }}>
        <Card.Img
          variant="top"
          className="bg-danger ms-auto me-auto"
          src={images[`${{ ...category }.category.name}`] || Goose}
          style={{ height: '40vh' }}
        />
        <Card.ImgOverlay>
          <ListGroup bg="success" variant="flush">
            <ListGroup.Item className="bg-success text-white mb-auto ms-auto me-auto" style={{ '--bs-bg-opacity': '.8' }}>
              <h2>
                {' '}
                {{ ...category }.category.name}
                {' '}
              </h2>
            </ListGroup.Item>
            <ListGroup.Item className="bg-warning text-white ms-auto me-auto w-50" style={{ '--bs-bg-opacity': '.8' }}>
              Max Calories:
              {{ ...category }.category.maxCalories}
            </ListGroup.Item>
            <ListGroup.Item className="bg-warning text-white ms-auto me-auto w-50" style={{ '--bs-bg-opacity': '.8' }}>
              Min Calories:
              {{ ...category }.category.minCalories}
            </ListGroup.Item>
            <ListGroup.Item className="bg-danger text-white ms-auto me-auto w-50" style={{ '--bs-bg-opacity': '.8' }}>
              Max Total Fat:
              {{ ...category }.category.maxTotalFat }
            </ListGroup.Item>
            <ListGroup.Item className="bg-danger text-white ms-auto me-auto w-50" style={{ '--bs-bg-opacity': '.8' }}>
              Min Total Fat:
              {{ ...category }.category.minTotalFat}
            </ListGroup.Item>
          </ListGroup>
        </Card.ImgOverlay>
      </Card>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="w-100"
        style={{ maxWidth: '40rem' }}
      >
        click
      </Button>
      <Collapse in={open}>
        <Container className="w-100 pe-0 ps-0">
          <div>
            <Form.Check
              name="test"
              type="checkbox"
              id="test"
              label="test"
            />
          </div>
          <SelectionGroup type="checkbox" title="Diet" choices={dietChoices} />
          <SelectionGroup type="checkbox" title="Health" choices={healthChoices} />
          <SelectionGroup type="radio" title="Cuisine Type" choices={cuisineChoices} />
          {/* {hits.map((row) => (<GridRow items={row} key={uuidv4()} />))} */}
          <input
            type="button"
            value="form data"
            onClick={onFormSubmit}
          />
        </Container>
      </Collapse>
    </>
  );
}

export default Category;
