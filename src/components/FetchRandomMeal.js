import React from 'react';
import { useEffect, useState } from 'react';

function FetchRandomMeal() {
  const [meal, setMeal] = useState();

  const asyncFetchRandom = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    const meals = await response.json();
    setMeal(meals.meals[0].strMealThumb);
    console.log(meal);
  };

  useEffect(() => {
    asyncFetchRandom();
  }, []);
  return (
    <>
      <img
        src={meal}
        width="249"
        height="254"
        display="flex"
        justify-content="center"
        top="50%"
      />

      <button onClick={asyncFetchRandom}>Click</button>
    </>
  );
}
export default FetchRandomMeal;
