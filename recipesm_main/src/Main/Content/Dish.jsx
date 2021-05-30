import React , {useState} from 'react'
import './allContent.css'

export default function Dish() {
    const [cusine] = useState(['Indian', 'Continental', 'Italian', 'American', 'Mexican', 'Asian', 'Chinese', 'Greek' , 'Mediterina'])

    return (
        <div>
            <div className='dishBox'>
           {
           cusine.map((dish)=>{
          return( 
          <div className='glassCard'>
             
                <div class="glassCardOverlay">
                {dish}
                <div class = "items"></div>
                <div class = "items head">
                <p>Flower Embroidery Hoop Art</p>
                <div class = "items price">
                <p class="old">$699</p>
                <p class="new">$345</p>
                </div>
                <div class="items cart">
                <span>ADD TO CART</span>
            </div>
            </div>
            </div>
            </div>)
            })
            }
    </div>
        </div>
        
    )
}
