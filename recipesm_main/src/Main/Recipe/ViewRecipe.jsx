import React,{useState} from 'react'
import './viewRecipe.css'

function ViewRecipe() {
const [Equipment, setEquipment] = useState([1,2,3,4,5]);
const [Nutrition, setNutrition] = useState([1,2,3,4,5,]);
const [Ingredient, setIngredient] = useState([1,2,3,4,5]);
const [PreperationStep, setPreperationStep] = useState([1,2,3,4,5]);
const [ratingNreview, setratingNreview] = useState([1,2,3,4,5]);
    return (
        <div>
            <div className="mainCard">
                <div className='headerTop'> <h3>Recipe Name</h3> <h5>By:</h5></div>
                <div className='headerCard'>
                    <div className='imageBox'>
                        {/* <img  src='https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250' width=600 height= 250 />  */}
                    </div>
                    <div className='aboutBox'>

                        <h6>Rating:</h6>
                        <h6>Views:</h6>
                        <h6>About:</h6>
                    </div>
                </div>
                <div className='timeBar'>
                    <h5>Preperation Time:</h5>
                    <h5>Active Time:</h5>
                    <h5>Yield:</h5>
                </div>
                <fieldset className="nutritionDetail">
                    <legend><h4>Nutrition</h4></legend>
                    {Nutrition.map(()=>{
                        return          <div className='nutritionAmount'>
                        <span>20cal</span>
                        <p className='nutritionText'>
                            Protine</p></div>
                    })}
                
                </fieldset>
                <div className='mainDescription'>
                    <div className='descPart1'>
                        <fieldset className="">
                            <legend><h4 className='ingredient'>Ingredients</h4></legend>
                           
                            {Ingredient.map(()=>{
                                return <li>Ingred</li>
                                            
                            })}
                            
                            </fieldset>
                        <fieldset className="">
                            <legend> <h4 className='equipment'>Equipment</h4>
                            </legend>
                            {Ingredient.map(()=>{
                                return <li>Equp</li>
                                            
                            })}
                            </fieldset>
                    </div>
                    <fieldset className='descPart2'>
                        <legend><h3>Preperation</h3></legend>
                        {PreperationStep.map(()=>{
                            return     <p>Step 1</p>
                        })}
                    
                        {/* <p>Step 2</p>
                        <p>Step 3</p>
                        <p>Step 4</p>
                        <p>Step 5</p>
                        <p>Step 6</p> */}


                    </fieldset>
                </div>
            </div>

            <fieldset>
                <legend><h4>Add your Review</h4></legend>
                Your review
                <textarea></textarea>
                <input type='button' value='Send Feedback' />
            </fieldset>
            <h4>User Reviews</h4>
            {ratingNreview.map(()=>{
                return        <div className='reviewUser' >
                <div className='reviewRating'>
                    <h3>UserName </h3>
                    <p> Rating: * * * * </p></div>
                <p> This is a very delicious food ...</p>
            </div>

            })}
     
        </div>
    )
}

export default ViewRecipe
