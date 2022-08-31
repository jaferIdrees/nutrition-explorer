import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import Category from '../components/Category';

function MainPage() {
  const state = useSelector((state) => state.categoryReducer);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      />
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        {state.map((category) => (
          <Category
            key={uuidv4()}
            category={category}
          />
        ))}
      </ThemeProvider>
    </>
  );
}

export default MainPage;
