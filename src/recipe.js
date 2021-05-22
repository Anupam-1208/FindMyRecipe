import React from 'react'
import style from './recipe.module.css'

const Recipe = (props) => {
    return (
        <div className={style.recipe}>
                <img src={props.src} alt="" />
            <h1 className="title">{props.title}&nbsp;({props.cuisineType})</h1>
            <div><b>Ingredients:</b></div>
            <ol>
                {props.ingredients.map((ingredient)=>{
                    return(
                        <li>{ingredient.text}</li>
                    )
                })}
            </ol>
            <p><b>Calories:</b> {props.calories}</p>
            
            
        </div>
    )
}

export default Recipe


