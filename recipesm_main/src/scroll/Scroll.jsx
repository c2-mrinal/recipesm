import {React , useState}from 'react'
import './Scroll.css'
export default function Scroll() {
    const [dummyData, setdummyData] = useState([
        {dish:'coffee', ingredient:'sugar,milk,coffee beans', time:'10min',rating:'3', type:'beavrage', instruction:'making it is easy'},
        {dish:'tea', ingredient:'sugar,milk,coffee beans', time:'10min',rating:'3', type:'beavrage', instruction:'making it is easy'},
        {dish:'coffee', ingredient:'sugar,milk,coffee beans', time:'10min',rating:'3', type:'beavrage', instruction:'making it is easy'},
        {dish:'tea', ingredient:'sugar,milk,coffee beans', time:'10min',rating:'3', type:'beavrage', instruction:'making it is easy'},
        {dish:'coffee', ingredient:'sugar,milk,coffee beans', time:'10min',rating:'3', type:'beavrage', instruction:'making it is easy'},
        {dish:'tea', ingredient:'sugar,milk,coffee beans', time:'10min',rating:'3', type:'beavrage', instruction:'making it is easy'},
        {dish:'coffee', ingredient:'sugar,milk,coffee beans', time:'10min',rating:'3', type:'beavrage', instruction:'making it is easy'},
        {dish:'tea', ingredient:'sugar,milk,coffee beans', time:'10min',rating:'3', type:'beavrage', instruction:'making it is easy'},

    ])
    return (

        <div>
        <div className='outerScroll'>
                <div  className='innerScroll'>
                    {dummyData.map(d=>{
                        return(
                            <li className="booking-card" style={{backgroundColor:'yellow'}}>
                            <div className="book-container">
                            <div className="content">
                            </div>
                            </div>
                                <p className="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p>
                        </li>
                        )
                    })
                   
                    }
                    </div>

        </div>
        </div>
    )
}
