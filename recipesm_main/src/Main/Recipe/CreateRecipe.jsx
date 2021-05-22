import React, { useState, useEffect } from 'react'
import './createRecipe.css'
import Select from 'react-select';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { MdRateReview } from 'react-icons/md';
import { useLocation, useHistory } from "react-router-dom";


function CreateRecipe() {

    const location = useLocation();
    const history = useHistory();
  
        
   
    useEffect(() => {
        if (location.state) {
        const { edit1view, details, timeDetail, Equipment, Nutrition, Ingredient, PreperationStep } = location.state;
        // console.log('location.state', location.state);
        if (edit1view === true) {
            setrecipeHead(details);
            setTime(timeDetail);
            if (Equipment && Equipment.length !== 0) setTotalEquipment(Equipment);
            if (Nutrition && Nutrition.length !== 0) setTotalNutrition(Nutrition);
            if (Ingredient && Ingredient.length !== 0) setTotalIngredients(Ingredient);
            if (PreperationStep && PreperationStep.length !== 0) setPreperation(PreperationStep);
        }
    }
    }, []) 
    let [DisplayAdditional, setDisplayAdditional] = useState(false)
    const ingredientUnit =
        [{ value: 'tsp', label: 'teaspoon' },
        { value: 'tbsp', label: 'tablespoon' },
        { value: 'pn', label: 'pinch' },
        { value: 'c', label: 'cup' },
        { value: 'gal', label: 'gallon' },
        { value: 'dr', label: 'drop' },
        { value: 'oz', label: 'ounce' },
        { value: 'gm', label: 'Gram' },
        { value: 'l', label: 'Liter' },
        { value: 'ml', label: 'MillLiter' },];
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
        unitIngred: '',
        unitEquip: '',
        unitNutition: '',
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
    const [typeSelected, settypeSelected] = useState(null)
    const [TotalIngredients, setTotalIngredients] = useState([]);
    const [TotalEquipment, setTotalEquipment] = useState([]);
    const [TotalNutrition, setTotalNutrition] = useState([]);

    let addNewData = (e) => {
        var { value, id, name } = e.target;
        if (name === 'Ingredient' && Ingredient.item !== '' && Ingredient.amount !== '' && selectedDropdown.unitIngred !== '') {
            var ingred = { name: Ingredient.item, unit: Ingredient.amount, unitType: selectedDropdown.unitIngred };
            if (checkingID !== null) {
                var ing = TotalIngredients;
                ing[checkingID] = ingred;
                setTotalIngredients([...ing]);
                setcheckingID(null);
            }
            else {
                setTotalIngredients([...TotalIngredients, ingred]);
                setunitIngred([...unitIngred, selectedDropdown.unitIngred]);

            }
            setIngredient({ item: '', amount: '' });
            setselectedDropdown({ ...selectedDropdown, unitIngred: '' });
        }
        if (name === 'Equipment' && Equipment.utensil !== '' && Equipment.size !== '' && selectedDropdown.unitEquip !== '') {
            var equip = { name: Equipment.utensil, unit: Equipment.size, unitType: selectedDropdown.unitEquip };
            if (checkingID !== null) {
                var equ = TotalEquipment;
                equ[checkingID] = equip;
                setTotalEquipment([...equ]);
                setcheckingID(null);
            }
            else {
                setTotalEquipment([...TotalEquipment, equip])
                setunitEquip([...unitEquip, selectedDropdown.unitEquip])

            }
            setEquipment({ utensil: '', size: '' })
            setselectedDropdown({ ...selectedDropdown, unitEquip: '' })
        }
        if (name === 'Nutrition' && Nutrition.nutrent !== '' && Nutrition.portion !== '' && selectedDropdown.unitNutition !== '') {
            var nutri = { name: Nutrition.nutrent, unit: Nutrition.portion, unitType: selectedDropdown.unitNutition };
            if (checkingID == null) {
                setTotalNutrition([...TotalNutrition, nutri])
            }
            else {
                var nut = TotalNutrition;
                nut[checkingID] = nutri;
                setTotalNutrition([...nut]);
                setcheckingID(null);
            }
            setNutrition({ nutrent: '', portion: '' })
            setunitNutition([...unitNutition, selectedDropdown.unitNutition])
            setselectedDropdown({ ...selectedDropdown, unitNutition: '' })
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
        var value = e.currentTarget.id.split(',');
        var id = value['1'];
        settypeSelected(value[0]);
        setIngredient({ item: '', amount: '' });
        setEquipment({ utensil: '', size: '' });
        setNutrition({ nutrent: '', portion: '' })
        setselectedDropdown({ unitIngred: '', unitEquip: '', unitNutition: '' })
        if (value[0] === 'TotalIngredients' && TotalIngredients.length !== 0) {
            setIngredient({ item: TotalIngredients[id]['name'], amount: TotalIngredients[id]['unit'] })
            setselectedDropdown({ unitIngred: TotalIngredients[id]['unitType'] })
            setcheckingID(id);
        }
        if (value[0] === 'TotalEquipment' && TotalEquipment.length !== 0) {

            setEquipment({ utensil: TotalEquipment[id]['name'], size: TotalEquipment[id]['unit'] })
            setselectedDropdown({ unitEquip: TotalEquipment[id]['unitType'] })
            setcheckingID(id);
        }
        if (value[0] === 'TotalNutrition' && TotalNutrition.length !== 0) {
            setNutrition({ nutrent: TotalNutrition[id]['name'], portion: TotalNutrition[id]['unit'] })
            setselectedDropdown({ unitNutition: TotalNutrition[id]['unitType'] })
            setcheckingID(id);
        }
    }
    let deleteValue = (e) => {
        let { name, value, id } = e.target;
        var tIngred = TotalIngredients;
        var tEquip = TotalEquipment;
        var tNutri = TotalNutrition;
        var prep = Preperation;
        if (name === 'TotalIngredients') {
            tIngred.splice(id, 1);
            setTotalIngredients([...tIngred]);
        }
        if (name === 'TotalEquipment') {
            tEquip.splice(id, 1);
            setTotalEquipment([...tEquip]);
        }
        if (name === 'TotalNutrition') {
            tNutri.splice(id, 1);
            setTotalNutrition([...tNutri]);
        }

        if (name === 'PreperationStep') {
            prep.splice(id, 1);
            setPreperation([...prep]);
        }

    }
    var makeReview = (e) => {
        return history.push({
            pathname: '/ViewRecipe',
            search: '?update=true',  // query string
            state: {
                edit2view: true,
                TotalIngredients: TotalIngredients,
                TotalEquipment: TotalEquipment,
                TotalNutrition: TotalNutrition,
                Preperation: Preperation,
                Time: Time,
                RecipeHead: recipeHead,
            },
        });
    }


    return (
        <div>
            <section className='descBox'>
                <div className='imageContainer'>
                    <input class="file-upload" type="file" accept="image/*" onChange={(e) => { setRecipeImage(URL.createObjectURL(e.target.files[0])) }} />
                    {recipeImage != null && <button onClick={(e) => { setRecipeImage(null) }}>Remove</button>}
                    <div className='imageDisplay'>
                        {recipeImage != null && <img src={recipeImage} alt='Select an Image' />}
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
                                    onChange={(e) => { setselectedDropdown({ ...selectedDropdown, unitIngred: e }) }}
                                    options={ingredientUnit}
                                />
                            </div>
                        </div>
                        <div className='addButton'>
                            <input type='button' value='Add Ingredient' name='Ingredient' className='addClickButton' onClick={addNewData} />
                        </div>
                    </div>
                    <div className='addedIngredientBox'>
                        {TotalIngredients && TotalIngredients.length != 0 &&
                            TotalIngredients.map((t, id) => {
                                return (
                                    <div className={checkingID == id && typeSelected == 'TotalIngredients' ? 'inputCapsuleClicked' : 'inputCapsule'} id={'TotalIngredients,' + id} onClick={editValue}>
                                        <div className='dataCapsule'>
                                            <div>{t['name']}</div>
                                            <div className='centerCapsule'>{t['unit']}<span className='unitIndicator'>{t['unitType'].value}</span></div>
                                        </div>
                                        <div className='closeCapsule' ><button id={id} name='TotalIngredients' value={t['name']} onClick={deleteValue} >X</button></div>
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
                                    onChange={(e) => { setselectedDropdown({ ...selectedDropdown, unitEquip: e }) }}
                                    options={eqiupmentUnit}
                                />
                            </div>
                        </div>
                        <div className='addButton'>
                            <input type='button' value='Add Equipment' name='Equipment' className='addClickButton' onClick={addNewData} />
                        </div>
                    </div>
                    <div className='addedIngredientBox'>
                        {TotalEquipment && TotalEquipment.length !== 0 &&
                            TotalEquipment.map((t, id) => {
                                return (
                                    <div className={checkingID == id && typeSelected == 'TotalEquipment' ? 'inputCapsuleClicked' : 'inputCapsule'} id={'TotalEquipment,' + id} onClick={editValue}>
                                        <div className='dataCapsule'>
                                            <div>{t['name']}</div>
                                            <div className='centerCapsule'>{t['unit']}<span className='unitIndicator'>{t['unitType'].value}</span></div>
                                        </div>
                                        <div className='closeCapsule' ><button id={id} name='TotalEquipment' value={t['name']} onClick={deleteValue} >X</button></div>
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
                {Preperation && Preperation.length !== 0 &&
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
                                                    onChange={(e) => { setselectedDropdown({ ...selectedDropdown, unitNutition: e }) }}
                                                    options={nutitionUnit}
                                                />
                                            </div>
                                        </div>
                                        <div className='addButton'>
                                            <input type='button' value='Add Nutrition' name='Nutrition' className='addClickButton' onClick={addNewData} />
                                        </div>
                                    </div>
                                    <div className='addedIngredientBox'>
                                        {TotalNutrition && TotalNutrition.length !== 0 &&
                                            TotalNutrition.map((t, id) => {
                                                return (
                                                    <div className={checkingID == id && typeSelected == 'TotalNutrition' ? 'inputCapsuleClicked' : 'inputCapsule'} id={'TotalNutrition,' + id} onClick={editValue}>
                                                        <div className='dataCapsule'>
                                                            <div>{t['name']}</div>
                                                            <div className='centerCapsule'>{t['unit']}<span className='unitIndicator'>{t['unitType'].value}</span></div></div>
                                                        <div className='closeCapsule' ><button id={id} name='TotalNutrition' value={t['name']} onClick={deleteValue} >X</button></div>
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
            <button type="button" className='finalSubmitButton' onClick={makeReview} >  Review <span><MdRateReview /></span></button>
        </div>
    )

}

export default CreateRecipe
