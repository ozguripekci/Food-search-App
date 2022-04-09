
import axios from 'axios';
import React, {useState} from 'react'
import Header from "../../components/header/Header";
import HomeStyles from "./HomeStyles.jsx"
import {MainContainer, ImgDiv, HomeImg} from "./HomeStyles"
import RecipeCardComp from "./RecipeCardComp"
import homeSvg from '../../assets/home.svg'


const APP_ID = "8b679c30";
const APP_KEY = "843837ad5aa8c409764cc2cd30587fc6";
/*kendi id ve key imizi yaziyoruz*/


const Home = () => {
  const [query, setQuery]=useState("");
  const[food, setFood]=useState();
  const mealTypes=["Breakfast", "Lunch","Dinner","Snack","Teatime"]
  const [meal,setMeal]=useState(mealTypes[0].toLowerCase());
    
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
    
    const getData = async () => {
      if(query){ 
        const result = await axios.get(url);
      setFood(result.data.hits)

      console.log(result.data.hits);
    
    }else {
      console.log("please fill the form");
    }
        
  
  
    }
    
    return (
      <div>
  <Header  setQuery={setQuery}
  getData={getData}
  mealTypes={mealTypes}
  setMeal={setMeal}
  
  />
  
  {food? (<MainContainer>
  {food.map((liste,index)=>(
    <RecipeCardComp key={index} recipe1={liste.recipe}/>
  ))}
  
  </MainContainer>
  
  ):<ImgDiv>
  <HomeImg src={homeSvg}/>
  </ImgDiv>}
  
  
  
  
      </div>
    )
  }
  
  export default Home