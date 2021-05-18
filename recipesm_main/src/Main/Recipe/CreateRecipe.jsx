import React,{useState} from 'react'
import './createRecipe.css'


function CreateRecipe() {
const [recipeHead, setrecipeHead] = useState({recipeName:'',
                                                                            recipeDesciption:''});
const [Ingredient, setIngredient] = useState({item:'',
                                                                        amount:''});
const [Equipment, setEquipment] = useState({utensil:'',
                                                                            size:''});
const [Preperation, setPreperation] = useState([]);
const [Nutrition, setNutrition] = useState({nutrent:'',
                                                                    portion:''})
const [Time, setTime] = useState({active:'',
                                                        total:'',
                                                        yield:''})
                            console.log('yyy',recipeHead);
    let  addNewData = (e)=>{
        
    }
    return (
        <div>
            <section className='descBox'>
            <div className='imageContainer'>
            <input class="file-upload" type="file" accept="image/*"/>
            Add Image
            </div>
            <div>
                        <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={recipeHead.recipeName} 
                                onChange={(e)=>setrecipeHead({recipeName:e.target.value})}/>
                                <label for="name" className="form__label">Recipe Name</label>
                        </div>
                        <div className="form__group field">
                            <textarea type="input" className="form__field" placeholder="Name" name="name" id='name'   value={recipeHead.recipeDesciption} 
                            onChange={(e)=>setrecipeHead({recipeDesciption:e.target.value})} ></textarea>
                            <label for="name" className="form__label">About</label>
                        </div>    
            </div>
            </section>

            <fieldset>
                    <legend><h2> Add Ingredient</h2></legend>
                    <section className='ingredientBox'>
                        <div className='addIngredient'>
                            <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={Ingredient.amount}
                                onChange={(e)=>setIngredient({amount:e.target.value})}/>
                                <label for="name" className="form__label">Ingredient</label>
                            </div>
                            <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={Ingredient.item}
                                onChange={(e)=>setIngredient({item:e.target.value})}/>
                                <label for="name" className="form__label">Amount</label>
                            </div>    
                            <div className='addButton'>
                                    <input type='button' value='ADD' className='addClickButton'/> 
                            </div>
                        </div>
                        <div className='addedIngredientBox'> </div>
                    </section>
            </fieldset>

            <fieldset>
                <legend><h2> Add Equipment</h2></legend>
                <section className='ingredientBox'>
                    <div className='addIngredient'>
                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={Equipment.utensil} 
                            onChange={(e)=>setEquipment({utensil:e.target.value})}/>
                            <label for="name" className="form__label">Equipment</label>
                        </div>
                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={Equipment.size} 
                            onChange={(e)=>setEquipment({size:e.target.value})}/>
                            <label for="name" className="form__label">Size</label>
                        </div>    
                        <div className='addButton'>
                            <input type='button' value='ADD' className='addClickButton'/> 
                        </div>
                    </div>
                    <div className='addedIngredientBox'> </div>
                </section>
            </fieldset>


            
            <section className='preperationBox'>
                <div className='prepHeader'>
                    <div> <h2>Preperation step</h2></div>
                    <div><input type='button' value='Add Step' className=''/> </div>
                </div>

                <div className='eachPrepStep'>
                {/* {  return(  <div className='stepNumber'>
                         <h4>Step 1 :</h4>
                    </div>
                    <div className='stepDesc'>
                        <textarea className='stepDescTextarea'></textarea>
                    </div>)} */}
                </div>
                    
            </section>
            <section className='additionalDataBox'>
                <div> <h3> Add Additional Field For Top in Search Result </h3></div>
                <h3>Time For Preperation</h3>
                <div className='timeDetail'>
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={Time.active}
                        onChange={(e)=>setTime({active:e.target.value})} />
                        <label for="name" className="form__label">Active Time</label>
                    </div>
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={Time.total} 
                        onChange={(e)=>setTime({active:e.target.value})}/>
                        <label for="name" className="form__label">Preperation Time</label>
                    </div> 
                </div>
                <div className='nutritionDetail'>
                    <fieldset>
                <legend>
                <h2> Nutrition in the Food</h2></legend>
                <section className='ingredientBox'>
                <div className='addIngredient'>
                    <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={Nutrition.nutrent} 
                onChange={(e)=>setNutrition({nutrent:e.target.value})}/>
                <label for="name" className="form__label">Nutrition Name</label>
                </div>
                    <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={Nutrition.portion} 
                onChange={(e)=>setNutrition({portion:e.target.value})} />
                <label for="name" className="form__label">Unit</label>
                </div>    
                <div className='addButton'>
                <input type='button' value='ADD' className='addClickButton'/> 
                </div>
                </div>
                <div className='addedIngredientBox'> </div>
                </section>
                </fieldset>

                </div>
                    <h3>Serve to</h3>

                <div className='yieldDetail'>
                    <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" name="name" id='name' value={Time.yield}
                onChange={(e)=>setTime({active:e.target.value})} />
                <label for="name" className="form__label">Yield Detail</label>
                </div>

                </div>
            </section>
        </div>
    )
}

export default CreateRecipe
