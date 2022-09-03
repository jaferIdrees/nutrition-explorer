import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import { v4 as uuidv4 } from 'uuid';
import Beef from '../assets/images/Beef.jpg';
import Bison from '../assets/images/Bison.jpg';
import Chicken from '../assets/images/Chicken.jpg';
import Duck from '../assets/images/Duck.jpg';
import Goose from '../assets/images/Goose.jpg';
import Lamb from '../assets/images/Lamb.jpg';
import Pheasant from '../assets/images/Pheasant.jpg';
import Rabbit from '../assets/images/Rabbit.jpg';
import Turkey from '../assets/images/Turkey.jpg';
import Venison from '../assets/images/Venison.jpg';
import GridRow from './GridRow';
import { addMeatData } from '../redux/foodType/meatType';

function Category(category) {
  const initialState = {
    open: false,
    cuisineList: [],
  };
  const [state, setOpen] = useState(initialState);
  const { open, cuisineList } = state;
  const images = {
    Beef,
    Bison,
    Chicken,
    Duck,
    Goose,
    Lamb,
    Pheasant,
    Rabbit,
    Turkey,
    Venison,
  };
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const meatType = { ...category }.category.name;
  const handleButtonClick = (e) => {
    const meatTypeRecipe = recipes.filter((recipe) => recipe.meatType === e.target.id);
    let waitTime = 0;
    if (meatTypeRecipe.length === 0) {
      waitTime = 3000;
      dispatch(addMeatData(e.target.id));
    }
    const clickButton = (e) => e.target.click();
    setTimeout(() => setOpen(() => {
      const meatTypeRecipes = recipes.filter((recipe) => recipe.meatType === e.target.id);
      if (meatTypeRecipes.length === 0) {
        clickButton(e);
        return {
          open: false,
          cuisineList: ['getting data!'],
        };
      }
      const newCuisineList = meatTypeRecipes[0].hits.hits.map(
        (recipe) => (recipe.recipe.cuisineType[0]),
      );
      return {
        open: !open,
        cuisineList: ([...new Set(newCuisineList)]),
      };
    }), waitTime);
  };

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
        onClick={handleButtonClick}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="btn w-100 border"
        style={{ maxWidth: '40rem' }}
        id={{ ...category }.category.name}
        variant="outline-warning"
      >
        Cuisine Types
      </Button>
      <Collapse in={open}>
        <Container id={`${meatType}_Container`} className="w-100 pe-0 ps-0">
          {cuisineList.map((cuisine) => (
            <GridRow
              key={uuidv4()}
              props={cuisine}
              meatType={{ ...category }.category.name}
            />
          ))}
        </Container>
      </Collapse>
    </>
  );
}

export default Category;
