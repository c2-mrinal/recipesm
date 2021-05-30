import React, { useState, useEffect } from 'react'
import './viewRecipe.css'
import Rating from 'react-rating';
import { useLocation, useHistory } from "react-router-dom";
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai'
import { GiOpenedFoodCan } from 'react-icons/gi';
import { BiFoodMenu } from 'react-icons/bi';
import { FaUtensils } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

function ViewRecipe() {
    const [details, setdetails] = useState({
        recipeDesciption: "I Love IT!!",
        recipeName: 'COFFEE'
    });
    const [timeDetail, settimeDetail] = useState({
        active: '20',
        total: '30',
        yield: '2'
    });
    const [Equipment, setEquipment] = useState([{ name: 'Cup', unit: '1', unitType: { value: 'NaN' } }]);
    const [Nutrition, setNutrition] = useState([{ name: 'Fat', unit: '1', unitType: { value: 'NaN' } }]);
    const [Ingredient, setIngredient] = useState([{ name: 'Coffee', unit: '1', unitType: { value: 'NaN' } }]);
    const [PreperationStep, setPreperationStep] = useState([1]);
    const [ratingNreview] = useState([1, 2, 3, 4, 5]);
    const [userRatingNreview, setuserRatingNreview] = useState({
        rating: '',
        review: ''
    })
    const [display, setdisplay] = useState({
        reviewSection: true,
    })
    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
        if(location.state){
        const { edit2view, RecipeHead, Time, TotalEquipment, TotalNutrition, TotalIngredients, Preperation } = location.state;
        if (edit2view === true) {
            setdetails({ ...RecipeHead });
            settimeDetail({ ...Time });
            setEquipment([...TotalEquipment]);
            setNutrition([...TotalNutrition]);
            setIngredient([...TotalIngredients]);
            setPreperationStep([...Preperation]);
            setdisplay({ reviewSection: false })
            // console.log(myparam);
        }
    }
    }, [])
    const editContent = () => {
        history.push({
            pathname: '/CreateRecipe',
            search: '?Edit=true',  // query string
            state: {
                edit1view: true,
                Ingredient: Ingredient,
                Equipment: Equipment,
                Nutrition: Nutrition,
                PreperationStep: PreperationStep,
                timeDetail: timeDetail,
                details: details,
            },
        });
    }
    return (
        <div>
            <div className="mainCard">
                <div className='headerTop'>
                    <h2>{details.recipeName}</h2>
                    <h5>By: Recipesm</h5>
                </div>
                <div className='headerCard'>
                    <div className='imageBox'>
                        {/* <img  src='https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=250' width=600 height= 250 />  */}
                    </div>
                    <div className='aboutBox'>
                        <h3>About: {details.recipeDesciption}</h3>
                        <h3>Rating:</h3>
                        <h3>Views:</h3>

                    </div>
                </div>
                {(timeDetail.total !== '' || timeDetail.active !== '' || timeDetail.yield !== '') &&
                    <div className='timeBar'>
                        <h3>Preperation Time:  <strong> {timeDetail.total}</strong><em> min</em></h3>
                        <h3>Active Time:  <strong> {timeDetail.active}</strong><em> min</em></h3>
                        <h3>Yield:  <strong> {timeDetail.yield}</strong><em> person</em></h3>
                    </div>
                }

                {Nutrition.length !== 0 &&
                    <fieldset className="nutritionDetail">
                        <legend><h2>Nutrition</h2></legend>
                        {
                            Nutrition.map((t, id) => {
                                return (
                                    <div className="imgs img-2" key={'N' + id}>
                                        <div className="infos info-2">
                                            <h3>{t.name}</h3>
                                            <p>{t.unit}<em>{t.unitType.value}</em></p>
                                        </div>
                                    </div>
                                )
                            })}
                    </fieldset>}
                <div className='mainDescription'>
                    <div className='descPart1'>
                        <fieldset className="">
                            <legend><h2 >Ingredients</h2></legend>
                            <div className='ingredient'>
                                {Ingredient.length !== 0 &&
                                    Ingredient.map((t, id) => {
                                        return <div className='eachIngredients' key={'I' + id}>
                                            <GiOpenedFoodCan />
                                            <span>{t.name}</span>
                                            <span>{t.unit}</span>
                                            <span>{t.unitType.value}</span>
                                            </div>
                                    })
                                }
                            </div>
                        </fieldset>
                        <fieldset className="">
                            <legend> <h2 >Equipment</h2>
                            </legend>
                            <div className='equipment'>
                                {Equipment.length !== 0 &&
                                    Equipment.map((t, id) => {
                                        return <div className='eachEquipment' key={'E' + id}>
                                            <FaUtensils />
                                            <span>{t.name}</span>
                                            <span>{t.unit}</span>
                                            <span>{t.unitType.value}</span>
                                            </div>
                                    })}
                            </div>
                        </fieldset>
                    </div>
                    <fieldset className='descPart2'>
                        <legend><h2>Preperation</h2></legend>
                        {PreperationStep.length !== 0 &&
                            PreperationStep.map((t, id) => {
                                return <div className='eachPreperationStep'>
                                    <div className='stepIdPreperation'><BiFoodMenu /><span>Step {id + 1}</span></div>
                                    <div className='contentPreperation'>
                                        {t}
                                    </div>
                                </div>
                            })}
                    </fieldset>
                </div>
            </div>
            {   display.reviewSection === true &&
                <div>
                    <fieldset>
                        <legend><h2>Add your Review</h2></legend>
                        <div className='userRatingIcon'>
                            <Rating
                                emptySymbol={<AiOutlineStar />}
                                fullSymbol={<AiTwotoneStar />}
                                initialRating={userRatingNreview.rating}
                                readonly={false}
                                onChange={(e) => { setuserRatingNreview({ rating: e }) }} />
                        </div>
                        <div className='reviewTextarea'><textarea value={userRatingNreview.review} onChange={(e) => { setuserRatingNreview({ review: e.target.value }) }} ></textarea></div>
                        <div className='reviewButton'><input type='button' value='Send Feedback' onClick={(e) => { }} /></div>
                    </fieldset>
                    <h4>User Reviews</h4>
                    {ratingNreview.map(() => {
                        return <div className='reviewUser' >
                            <div className='reviewRating'>
                                <h3>UserName </h3>
                                <Rating
                                    emptySymbol={<AiOutlineStar />}
                                    fullSymbol={<AiTwotoneStar />}
                                    initialRating={'2'}
                                    readonly={true}
                                />
                            </div>
                            <p> This is a very delicious food ...</p>
                        </div>
                    })}
                </div>
            }
            {display.reviewSection === false &&
                <div className='reviewSectionDisplay'>
                    <div className='reviewButton'><input type='button' value='Edit' onClick={editContent}   data-tip='Re-Edit your Recipe ' data-background-color='lightgreen'/></div>
                    <div className='reviewButton'><input type='button' value='Save' onClick={(e) => { }}  data-tip='Save your Recipe ' data-background-color='lightgreen'/></div>
                    <ReactTooltip/>
                </div>
            }
        </div>
    )
}

export default ViewRecipe
