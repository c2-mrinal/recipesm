import React, { useState } from 'react'
import './createRecipe.css'
import Select from 'react-select';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { BsUpload } from 'react-icons/bs';


function CreateRecipe() {
    let [DisplayAdditional, setDisplayAdditional] = useState(false)
    const ingredientUnit =
        [{ value: 'tsp', label: 'teaspoon' },
        { value: 'tbsp', label: 'tablespoon' },
        { value: 'pn', label: 'pinch' },
        { value: 'c', label: 'cup' },
        { value: 'gal', label: 'gallon' },
        { value: 'dr', label: 'drop' },
        { value: 'oz', label: 'ounce' },];
    const eqiupmentUnit =
        [{ value: 'l', label: 'Liter' },
        { value: 'ml', label: 'MillLiter' },];
    const nutitionUnit =
        [{ value: 'cal', label: 'Calories' },
        { value: 'gm', label: 'Gram' },
        { value: 'j', label: 'Joule' },];
      
    const [checkingID, setcheckingID] = useState(null)
    const [recipeImage, setRecipeImage] = useState(null)
    const [recipeHead, setrecipeHead] = useState({
        recipeName: '',
        recipeDesciption: ''
    });
    const [selectedDropdown, setselectedDropdown] = useState({
        unitIngred:'',
        unitEquip:'',
        unitNutition:'',
    })
    const [unitIngred, setunitIngred] = useState([])
    const [Ingredient, setIngredient] = useState({
        item: '',
        amount: ''
    });
    const [unitEquip, setunitEquip] = useState([])
    const [Equipment, setEquipment] = useState({
        utensil: '',
        size: ''
    });
    const [Preperation, setPreperation] = useState([]);
    const [unitNutition, setunitNutition] = useState([])
    const [Nutrition, setNutrition] = useState({
        nutrent: '',
        portion: ''
    })
    const [Time, setTime] = useState({
        active: '',
        total: '',
        yield: ''
    });
    const [TotalIngredients, setTotalIngredients] = useState({});
    const [TotalEquipment, setTotalEquipment] = useState({});
    const [TotalNutrition, setTotalNutrition] = useState({});


    let addNewData = (e) => {
        var { value, id, name } = e.target;
        if (name === 'Ingredient' && Ingredient.item!=='' &&Ingredient.amount!=='' && selectedDropdown.unitIngred !=='') {
            var ingred = { [Ingredient.item]: Ingredient.amount };
            setTotalIngredients({ ...TotalIngredients, ...ingred });
            setIngredient({ item: '', amount: '' });
            if(checkingID == null){
            setunitIngred([...unitIngred,selectedDropdown.unitIngred]);
            console.log('add');
            }
            else{
                var ing = unitIngred;
                ing[id] = selectedDropdown.unitIngred
                console.log('11',ing);
                setunitIngred([...ing]);

            }
            setselectedDropdown({...selectedDropdown,unitIngred:''});
        }
        if (name === 'Equipment'&& Equipment.utensil!== '' && Equipment.size!== '' && selectedDropdown.unitEquip !==''){
            var equip = { [Equipment.utensil]: Equipment.size };
            setTotalEquipment({ ...TotalEquipment, ...equip })
            setEquipment({ utensil: '', size: '' })
            setunitEquip([...unitEquip,selectedDropdown.unitEquip])
            setselectedDropdown({...selectedDropdown,unitEquip:''})

        }
        if (name === 'Nutrition' && Nutrition.nutrent!== '' && Nutrition.portion!=='' && selectedDropdown.unitNutition !=='') {
            var nutri = { [Nutrition.nutrent]: Nutrition.portion };
            setTotalNutrition({ ...TotalNutrition, ...nutri })
            setNutrition({ nutrent: '', portion: '' })
            setunitNutition([...unitNutition,selectedDropdown.unitNutition])
            setselectedDropdown({...selectedDropdown,unitNutition:''})
        }
        if (name === 'PreperationStep') {
            setPreperation([...Preperation, ''])
        }
        if (name === 'Preperation') {
            var prepValue = Preperation;
            prepValue[id] = value;
            setPreperation([...prepValue]);
        }

    }
    let editValue = (e) => {
        e.preventDefault();
        var value = e.currentTarget.id.split(',');        var id =value['3'];
        if (value[0] === 'TotalIngredients') {
            setIngredient({ item: value[1], amount: value[2] })
            setselectedDropdown({unitIngred:unitIngred[id]})
            setcheckingID(id);

        }
        if (value[0] === 'TotalEquipment') {
            setEquipment({ utensil: value[1], size: value[2] })
            setselectedDropdown({unitEquip:unitEquip[id]})
            setcheckingID(id);

        }
        if (value[0] === 'TotalNutrition') {
            setNutrition({ nutrent: value[1], portion: value[2] })
            setselectedDropdown({unitNutition:unitNutition[id]})
            setcheckingID(id);
         

        }
console.log('checkingID',checkingID);
    }
    let deleteValue = (e) => {
        let { name, value, id } = e.target;
        var tIngred = TotalIngredients;
        var tEquip = TotalEquipment;
        var tNutri = TotalNutrition;
        var prep = Preperation;
        if (name === 'TotalIngredients') {
            Object.keys(TotalIngredients).map(del => {
                if (del === value) {
                    delete tIngred[del];
                }
            })
            var  uIngred = unitIngred
            uIngred.splice(id, 1);
            setunitIngred([...uIngred]);
            setTotalIngredients({ ...tIngred });
        }
        if (name === 'TotalEquipment') {
            Object.keys(TotalEquipment).map(del => {
                if (del === value) {
                      delete tEquip[del];
                }
            })
            var uEquip = unitEquip;
            uEquip.splice(id,1);
            setunitEquip([...uEquip]);
            setEquipment({ ...tEquip });
        }
        if (name === 'TotalNutrition') {
            Object.keys(TotalNutrition).map(del => {
                if (del === value) {
                    delete tNutri[del];
                }
            })
            var uNutition = unitNutition
            uNutition.splice(id,1);
            setunitNutition([...uNutition]);
            setTotalNutrition({ ...tNutri });
        }

        if (name === 'PreperationStep') {
            prep.splice(id, 1);
            setPreperation([...prep]);
        }

    }
    
    var finalSubmit = (e) => {
        console.log('all', TotalIngredients, TotalEquipment, TotalNutrition);
        console.log('samllData', Ingredient, Equipment, Nutrition, Time, Preperation);

    }
    return (
        <div>
            <section className='descBox'>
                <div className='imageContainer'>
                    <input class="file-upload" type="file" accept="image/*" onChange={(e) => { setRecipeImage(URL.createObjectURL(e.target.files[0])) }} />
                    {recipeImage != null && <button onClick={(e) => { setRecipeImage(null) }}>Remove</button>}
                    <div className='imageDisplay'>
                        {recipeImage!=null && <img src={recipeImage} alt='Select an Image'/>}
                        </div>
                </div>
                <div>
                    <div className="inputPosition field">
                        <input type="input" className="inputArea" placeholder="Name" id='recipeName' value={recipeHead.recipeName}
                            onChange={(e) => setrecipeHead({ ...recipeHead, recipeName: e.target.value })} />
                        <label htmlFor="recipeName" className="inputLable">Recipe Name</label>
                    </div>
                    <div className="inputPosition field">
                        <textarea type="input" className="inputArea" placeholder="Name" id='recipeDesciption' value={recipeHead.recipeDesciption}
                            onChange={(e) => setrecipeHead({ ...recipeHead, recipeDesciption: e.target.value })} ></textarea>
                        <label htmlFor="recipeDesciption" className="inputLable">About</label>
                    </div>
                </div>
            </section>
            <fieldset>
                <legend><h2> Add Ingredient</h2></legend>
                <section className='ingredientBox'>
                    <div className='addIngredient'>
                        <div className="inputPosition field">
                            <input type="input" className="inputArea" placeholder="Ingredient" name="item" value={Ingredient.item}
                                onChange={(e) => setIngredient({ ...Ingredient, item: e.target.value })} />
                            <label htmlFor="name" className="inputLable">Ingredient</label>
                        </div>
                        <div className='amountANDunit'>
                            <div className="inputPosition field">
                                <input type="number" className="inputArea" placeholder="amount" name="amount" value={Ingredient.amount}
                                    onChange={(e) => setIngredient({ ...Ingredient, amount: e.target.value })} />
                                <label fohtmlForr="name" className="inputLable">Amount</label>
                            </div>
                            <div className='selectDropdown'>

                                <Select
                                    placeholder='Units'
                                    name='Ingredient'
                                    value={selectedDropdown.unitIngred}
                                    onChange={(e)=>{setselectedDropdown({...selectedDropdown,unitIngred:e})}}
                                    options={ingredientUnit}
                                />
                            </div>
                        </div>
                        <div className='addButton'>
                            <input type='button' value='Add Ingredient' name='Ingredient' className='addClickButton' onClick={addNewData} />
                        </div>
                    </div>
                    <div className='addedIngredientBox'>
                        {TotalIngredients !== {} &&
                            Object.entries(TotalIngredients).map((t, id) => {
                                return (
                                    <div className='inputCapsule' id={'TotalIngredients,' + t+','+id} onClick={editValue}>
                                        <div className='dataCapsule'>
                                            <div>{t[0]}</div>
                                            <div className='centerCapsule'>{t[1]}<span className='unitIndicator'>{unitIngred[id].value}</span></div>
                                            </div>
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
                        <div className="inputPosition field">
                            <input type="input" className="inputArea" placeholder="Name" id='utensil' value={Equipment.utensil}
                                onChange={(e) => setEquipment({ ...Equipment, utensil: e.target.value })} />
                            <label htmlFor="utensil" className="inputLable">Equipment</label>
                        </div>
                        <div className='amountANDunit'>
                            <div className="inputPosition field">
                                <input type="number" className="inputArea" placeholder="Name" id='size' value={Equipment.size}
                                    onChange={(e) => setEquipment({ ...Equipment, size: e.target.value })} />
                                <label htmlFor="size" className="inputLable">Size</label>
                            </div>
                            <div className='selectDropdown'>

                                <Select
                                    placeholder='Units'
                                    value={selectedDropdown.unitEquip}
                                    onChange={(e)=>{setselectedDropdown({...selectedDropdown,unitEquip:e})}}
                                    options={eqiupmentUnit}
                                />
                            </div>
                        </div>
                        <div className='addButton'>
                            <input type='button' value='Add Equipment' name='Equipment' className='addClickButton' onClick={addNewData} />
                        </div>
                    </div>
                    <div className='addedIngredientBox'>
                        {TotalEquipment !== {} &&
                            Object.entries(TotalEquipment).map((t, id) => {
                                return (
                                    <div className='inputCapsule' id={'TotalEquipment,' + t} onClick={editValue}>
                                        <div className='dataCapsule'>
                                            <div>{t[0]}</div>
                                            <div className='centerCapsule'>{t[1]}<span className='unitIndicator'>{unitEquip[id].value}</span></div>
                                            </div>
                                        <div className='closeCapsule' ><button id={id} name='TotalEquipment' value={t[0]} onClick={deleteValue} >X</button></div>
                                    </div>
                                )
                            })}
                    </div>
                </section>
            </fieldset>
            <section className='preperationBox'>
                <div className='prepHeader'>
                    <div> <h2 className={{ display: 'inline' }}>Preperation Steps</h2> </div>
                    <div><button type='button' name='PreperationStep' className='PreperationStepAdd' onClick={addNewData}>+</button></div>
                </div>
                {Preperation.length !== 0 &&
                    Preperation.map((v, id) => {
                        return (<div className='eachPrepStep'>
                            <div className='stepNumber'>
                                <h4>Step {id + 1} :</h4>
                            </div>
                            <div className='stepDesc'>
                                <textarea className='stepDescTextarea' placeholder='Add Your Delicious Step' key={id} name='Preperation' id={id} onChange={addNewData} value={v} />
                            </div>
                            <div>
                            <button type="button" name='PreperationStep' className='deleteStepPrep' id={id} onClick={deleteValue}>X</button>
                            </div>
                        </div>)
                    })}
            </section>
            <section className='additionalDataBox'>
                <div onClick={(e) => { setDisplayAdditional(!DisplayAdditional) }} className='additionalDataHeader'>
                    <h3> Add Additional Field For Top in Search Result   {!DisplayAdditional && <AiOutlineArrowDown fontSize="2em" />}
                        {DisplayAdditional && <AiOutlineArrowUp className='additionalDataHeaderIcon' fontSize="2em" />}</h3></div>
                {DisplayAdditional &&
                    <div>
                        <h3>Time For Preperation</h3>
                        <div className='timeDetail'>
                            <div className="inputPosition field">
                                <input type="number" className="inputArea" placeholder="Name" id='active' value={Time.active}
                                    onChange={(e) => setTime({ ...Time, active: e.target.value })} />
                                <label htmlFor="active" className="inputLable">Active Time(in min)</label>
                            </div>
                            <div className="inputPosition field">
                                <input type="number" className="inputArea" placeholder="Name" id='total' value={Time.total}
                                    onChange={(e) => setTime({ ...Time, total: e.target.value })} />
                                <label htmlFor="total" className="inputLable">Preperation Time(in min)</label>
                            </div>
                        </div>
                        <div className='nutritionDetail'>
                            <fieldset>
                                <legend>
                                    <h2> Nutrition in the Food</h2></legend>
                                <section className='ingredientBox'>
                                    <div className='addIngredient'>
                                        <div className="inputPosition field">
                                            <input type="input" className="inputArea" placeholder="Name" id='nutrent' value={Nutrition.nutrent}
                                                onChange={(e) => setNutrition({ ...Nutrition, nutrent: e.target.value })} />
                                            <label htmlFor="nutrent" className="inputLable">Nutrition Name</label>
                                        </div>
                                        <div className='amountANDunit'>
                                            <div className="inputPosition field">
                                                <input type="number" className="inputArea" placeholder="Name" id='portion' value={Nutrition.portion}
                                                    onChange={(e) => setNutrition({ ...Nutrition, portion: e.target.value })} />
                                                <label htmlFor="portion" className="inputLable">Unit</label>
                                            </div>
                                            <div className='selectDropdown'>
                                                <Select
                                                    placeholder='Units'
                                                    value={selectedDropdown.unitNutition}
                                                    name='Nutrition'
                                                    onChange={(e)=>{setselectedDropdown({...selectedDropdown,unitNutition:e})}}
                                                    options={nutitionUnit}
                                                />
                                            </div>
                                        </div>
                                        <div className='addButton'>
                                            <input type='button' value='Add Nutrition' name='Nutrition' className='addClickButton' onClick={addNewData} />
                                        </div>
                                    </div>
                                    <div className='addedIngredientBox'>
                                        {TotalNutrition !== {} &&
                                            Object.entries(TotalNutrition).map((t, id) => {
                                                return (
                                                    <div className='inputCapsule' id={'TotalNutrition,' + t} onClick={editValue}>
                                                        <div className='dataCapsule'>
                                                            <div>{t[0]}</div>
                                                            <div className='centerCapsule'>{t[1]}<span className='unitIndicator'>{unitNutition[id].value}</span></div></div>
                                                        <div className='closeCapsule' ><button id={id} name='TotalNutrition' value={t[0]} onClick={deleteValue} >X</button></div>
                                                    </div>)
                                            })}
                                    </div>
                                </section>
                            </fieldset>
                        </div>
                        <h3>Serve's to</h3>
                        <div className='yieldDetail'>
                            <div className="inputPosition field">
                                <input type="number" className="inputArea" placeholder="Name" name="name" id='name' value={Time.yield}
                                    onChange={(e) => setTime({ ...Time, yield: e.target.value })} />
                                <label htmlFor="name" className="inputLable">Yield Detail(persons)</label>
                            </div>

                        </div>
                    </div>}
            </section>
            <button type="button" className='finalSubmitButton' onClick={finalSubmit} >  <BsUpload />Save</button>
        </div>
    )

}

export default CreateRecipe
