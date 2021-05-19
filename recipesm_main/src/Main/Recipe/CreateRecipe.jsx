import React,{useState} from 'react'
import './createRecipe.css'
import {AiOutlineClose} from 'react-icons/ai';


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
                                                        yield:''});
const [TotalIngredients, setTotalIngredients] = useState({});

                            // console.log('yyy',recipeHead);

    let  addNewData = (e)=>{
            var value= e.target.value;
            if (value == 'Ingredient'){
                var ingred ={[Ingredient.item]:Ingredient.amount};
                setTotalIngredients({...TotalIngredients,...ingred})
                setIngredient({item:'',amount:''})

            }
            // console.log('wwww',e.target.value);
    }
    let editValue=(e)=>{
        const {value,name} =e.target;
        
        console.log('work', e.target);
        if(name === 'TotalIngredients'){
            console.log(value);
        }

    }
    let deleteValue = (e)=>{
        let {name,value} = e.target;
        var xxx = TotalIngredients;
        if(name === 'TotalIngredients'){
           Object.keys( TotalIngredients).map(del=>{
                if(del == value){
                   delete xxx[del];
                }
            })
            setTotalIngredients({...xxx});
        }
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
                                onChange={(e)=>setrecipeHead({...recipeHead,recipeName:e.target.value})}/>
                                <label for="name" className="form__label">Recipe Name</label>
                        </div>
                        <div className="form__group field">
                            <textarea type="input" className="form__field" placeholder="Name" name="name" id='name'   value={recipeHead.recipeDesciption} 
                            onChange={(e)=>setrecipeHead({...recipeHead,recipeDesciption:e.target.value})} ></textarea>
                            <label for="name" className="form__label">About</label>
                        </div>    
            </div>
            </section>

            <fieldset>
                    <legend><h2> Add Ingredient</h2></legend>
                    <section className='ingredientBox'>
                        <div className='addIngredient'>
                            <div className="form__group field">
                                <input type="input" className="form__field" placeholder="Ingredient" name="item"  value={Ingredient.item}
                                onChange={(e)=>setIngredient({...Ingredient,item:e.target.value})}/>
                                <label for="name" className="form__label">Ingredient</label>
                            </div>
                            <div className="form__group field">
                                <input type="input" className="form__field" placeholder="amount" name="amount"   value={Ingredient.amount}
                                onChange={(e)=>setIngredient({...Ingredient,amount:e.target.value})}/>
                                <label for="name" className="form__label">Amount</label>
                            </div>    
                            <div className='addButton'>
                                    <input type='button' value='Ingredient' className='addClickButton' onClick={addNewData}/> 
                            </div>
                        </div>
                        <div className='addedIngredientBox'>
                            {TotalIngredients != {} &&
                            Object.entries(TotalIngredients).map((t,id)=>{
                                return(
                                    <div className='inputCapsule' name='TotalIngredients' value={t} id='eeo' onClick={editValue}>
                                    <div className='dataCapsule'>
                                    <div>{t[0]}</div>
                                     <div className='centerCapsule'>{t[1]}</div></div>
                                    <div className='closeCapsule' ><button id={id} name='TotalIngredients' value={t[0]} onClick={deleteValue} >X</button></div>
                                    </div>
                                )
                         })}
                        </div>
                    </section>
            </fieldset>

            <fieldset>
                <legend><h2> Add Equipment</h2></legend>
                <section className='ingredientBox'>
                    <div className='addIngredient'>
                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={Equipment.utensil} 
                            onChange={(e)=>setEquipment({...Equipment,utensil:e.target.value})}/>
                            <label for="name" className="form__label">Equipment</label>
                        </div>
                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={Equipment.size} 
                            onChange={(e)=>setEquipment({...Equipment,size:e.target.value})}/>
                            <label for="name" className="form__label">Size</label>
                        </div>    
                        <div className='addButton'>
                            <input type='button' value='Equipment' className='addClickButton' onClick={addNewData} /> 
                        </div>
                    </div>
                    <div className='addedIngredientBox'> </div>
                </section>
            </fieldset>


            
            <section className='preperationBox'>
                <div className='prepHeader'>
                    <div> <h2>Preperation step</h2></div>
                    <div><input type='button' value='Add Step' className='' onClick={addNewData} /> </div>
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
                        onChange={(e)=>setTime({...Time,active:e.target.value})} />
                        <label for="name" className="form__label">Active Time</label>
                    </div>
                    <div className="form__group field">
                        <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={Time.total} 
                        onChange={(e)=>setTime({...Time,active:e.target.value})}/>
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
                onChange={(e)=>setNutrition({...Nutrition,nutrent:e.target.value})}/>
                <label for="name" className="form__label">Nutrition Name</label>
                </div>
                    <div className="form__group field">
                <input type="input" className="form__field" placeholder="Name" name="name" id='name'  value={Nutrition.portion} 
                onChange={(e)=>setNutrition({...Nutrition,portion:e.target.value})} />
                <label for="name" className="form__label">Unit</label>
                </div>    
                <div className='addButton'>
                <input type='button' value='ADD' className='addClickButton' onClick={addNewData} /> 
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
                onChange={(e)=>setTime({...Time,active:e.target.value})} />
                <label for="name" className="form__label">Yield Detail</label>
                </div>

                </div>
            </section>
        </div>
    )
}

export default CreateRecipe
