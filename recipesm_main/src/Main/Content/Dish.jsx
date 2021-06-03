import React, { useState } from 'react'
import './dish.css'
import * as Custom from '../../CustomFunction'
export default function Dish() {
    const [IngredientSelected, setIngredientSelected] = useState([])
    const [IngredientList, setIngredientList] = useState([
        { display: false, type: 'Taste', value: ['Sweet', 'Sour', 'Salty', 'Bitter', 'Savory'] },
        {
            display: false, type: 'Spices', value: ['Cardamom', 'Clove', 'Cassia_Bark', 'Black_Pepper', 'Celery_Seed', 'Coriander_Seed', 'Crushed_Red_Pepper', 'Cumin', 'Curry_Powder',
                'Nutmeg', 'Mace', 'Mustard_Seeds', 'Garlic', 'Ginger', 'Turmeric', 'Fenugreek', 'Saffron', 'Allspice', 'Anise', 'Caraway_Seed', 'Carom(Ajwain)',
                'Cayenne', 'Chili_Pepper', 'Fennel', 'Paprika', 'Sumac', 'Cinnamon', 'Onion_Powder', 'Galangal_Root_Powder', 'Star_Anise', 'Black_Cumin', 'Poppy_Seeds']
        },
        { display: false, type: 'Cateogery', value: ['Veg','Non-Veg'] },
        { display: false, type: 'Cateogery', value: ['Veg','Non-Veg'] }

    ])
    const DisplayDish = (e) => {
        const { id } = e.target;
        let Dish = IngredientList;
        IngredientList.map((d, i) => {
            Dish[i].display = false;
            if (d.type === id) {
                Dish[i].display = !IngredientList[i].display
            }
        })
        setIngredientList([...Dish])
    }
    const dragging = (e) => {
        e.dataTransfer.setData("text", e.currentTarget.id);
    }
    const drop = (e) => {
        e.preventDefault();
        var idValue = e.dataTransfer.getData("text");
        var Ingred =[...IngredientSelected]
        Ingred.push(idValue);
        let uniq = [...new Set(Ingred)];
        setIngredientSelected([...uniq])
    }
    const deleteSelectedIngred= (e)=>{
        let ing = IngredientSelected;
        var idIs=IngredientSelected.indexOf(e.target.id);
        ing.splice(idIs,1);
        setIngredientSelected([...ing])
    }
    return (
        <div>
            <section className='dishTasteBox'>
                {
                    IngredientList.map((dish, id) => {
                        return <div>
                            <div className='dishKeyName' id={dish.type} onClick={DisplayDish}>{Custom.titleCase(dish.type)}</div>
                        </div>
                    })
                }
            </section>
            <section className='dishKeyContentBox'>
                {IngredientList.map((dish, id) => {
                    return <div>
                        <div className='dishKeyContent'>
                            {dish.value.map((val, i) => {
                                return <span draggable={true} onDragStart={dragging} id={val}>
                                    {dish.display === true && <span className='dishValueName'>{Custom.titleCase(val)}</span>}
                                </span>
                            })}
                        </div>
                    </div>
                })}
            </section>
            <section className='bowlConatiner' onDrop={drop}
                        onDragOver={(e) => { e.preventDefault() }}
                        onDragLeave={(e) => { e.preventDefault() }}>
                <div className='bowlBody'>
                </div>
            </section>
            <div className='displaySelctedIngredBody'>
                {IngredientSelected.map((ingred)=>{
                        return <>
                            <span className='displaySelctedIngred'>{Custom.titleCase(ingred)}</span>
                            <span className='deleteSelectedIngredButton'>
                            <input type="submit" value='X' id={ingred} onClick={deleteSelectedIngred} />
                            </span>
                        </>
                })}
            </div>
<div className='makeRecipeButton'>
    <input type="submit" value='Make Me Recipes' />
</div>
        </div>

    )
}
