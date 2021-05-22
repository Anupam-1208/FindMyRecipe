import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './recipe';

const App = () => {

  const APP_ID = `0e6cea02`;
  const APP_KEY =` 
b63a6f4425455bc08fd86ef6a3f4be13`;
//  const example=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
// const [count, setCount] = useState(0);
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState('cake')


useEffect(()=>{
  getRecipes();
},[query]) // run once to call api


const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data);
}
const updateSearch = (e) => {
  setSearch(e.target.value);
  console.log(search);
}

const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
}

  return (
    <div className="App">
      <form action="" className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => {
          return(<Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} src={recipe.recipe.image} ingredients={recipe.recipe.ingredients}
            cuisineType={recipe.recipe.cuisineType}
          />);
        })}
      </div>
    </div>

  )
}

export default App;

