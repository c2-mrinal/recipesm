import React,{useState,useEffect} from 'react'
import './Profile.css'
import { Tab, Row, Nav, Tabs, Col } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import InfiniteScroll from "react-infinite-scroll-component";
// import * as d3 from "d3";
import Select from 'react-select';



export default function Profile() {
const [demo, setdemo] = useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])
const [scroll, setScroll] = useState(false);
const [Display, setDisplay] = useState({
  editProfile:false,
})
const [userDetail, setUserDetail] = useState({
  firstName:'mrinal',
  lastName:'kasyap',
  dob:'1997-10-09',
  email:'c2mrinal@gmail.com',
  gender:{values: "male", label: "Male"},
  phone:'xxxxxxxxxxx',
  address:'deoghar',
  about:'software Engineer',
})
  let fetchMoreData = ()=>{

  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 10);
    });
  }, []);
const editProfileDetails= (e)=>{
const {id,value}= e.target;
setUserDetail({id:value})
}

  return (
    <div >
    <section className={scroll?'userProfileStickyHeader':'userProfileStickyHeaderBefore'}>
        <div>
          UserName 
        </div>
        <div>
          Menu Display
        </div>
      </section  >
      <section className={scroll?'userProfileHeaderScroll':'userProfileHeader'}>
        <div className='userProfileImage'>
        </div>
        <div className={scroll?'userProfileDetail':''}>
          <p> {userDetail.firstName} {userDetail.lastName}</p>
          <p>{userDetail.about}</p>
          <input type='button' className='btn-grad' value='Edit Profile' onClick={()=>setDisplay({editProfile:!Display.editProfile})}></input>
        </div>
        <div>
      
        </div>
      </section>
     
      {/* <section class='profileContentDispalyMain'> */}
      {/* <div class='contentDisplayHeader'> */}
    
      {/* </div> */}
     {Display.editProfile === false &&
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
          <Row>
            <Col md={2}>
              <Nav variant="pills" className="flex-column contentDisplayHeader">
                <Nav.Item><Nav.Link eventKey="activityProfilr" >
               Activity
                  
                  </Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="recipeProfile">Your Recipe</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="savedRecipeProfile">Saved Recipe</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="ratingProfile">Your Ratings</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="settingProfile">Setting</Nav.Link></Nav.Item>
              </Nav>
            </Col>
            <Col md={10}>
              <Tab.Content>
                <Tab.Pane eventKey="activityProfilr">
                <InfiniteScroll
                dataLength={5}
                // next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
               <VerticalTimeline>
              { demo.map(()=>{
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            
              >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
              </VerticalTimelineElement>
              })}
              </VerticalTimeline>
              </InfiniteScroll>
                </Tab.Pane>
                <Tab.Pane eventKey="recipeProfile">222</Tab.Pane>
                <Tab.Pane eventKey="savedRecipeProfile">333        </Tab.Pane>
                <Tab.Pane eventKey="ratingProfile">444       </Tab.Pane>
                <Tab.Pane eventKey="settingProfile">555        </Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>}
      {Display.editProfile== true &&
      <div onChange={editProfileDetails}>
          <div className="inputFieldLine">
            <span>First Name</span>
                            <input type="input" className="inputArea" placeholder="First Name" id='firstName' defaultValue={userDetail.firstName}/>
                        </div>
                        <div className="inputFieldLine">
            <span>Last Name</span>
                            <input type="input" className="inputArea" placeholder="First Name"  id='lastName' defaultValue={userDetail.lastName}/>
                        </div>
                        <div className="inputFieldLine">
            <span>About</span>
                            <textarea type="input" className="inputArea" placeholder="First Name"  id='about' defaultValue={userDetail.about}/>
                        </div>
                        <div className="inputFieldLine">
            <span>Date of Birth</span>
                            <input type="date" className="inputArea" placeholder="First Name"  id='dob' defaultValue={userDetail.dob}/>
                        </div>
                        <div className="inputFieldLine">
            <span>Gender</span>
                            <Select className="inputSelect"  placeholder="Gender"   id='gender' value={userDetail.gender} 
                            onChange={(e)=>setUserDetail({userDetail:{gender:e}})}
                            options={[{values:'male',label:'Male'},
                            {values:'female',label:'Female'},
                            {values:'trans',label:'Trans'},
                            ]} />
                        </div>
                        <div className="inputFieldLine">
            <span>Phone</span>
                            <input type="telephone" className="inputArea" placeholder="First Name"  id='phone' defaultValue={userDetail.phone}/>
                        </div>
                        <div className="inputFieldLine">
            <span>Email</span>
                            <input type="mail" className="inputArea" placeholder="First Name"  id='email' defaultValue={userDetail.email}/>
                        </div>
      </div>
      }
      {/* </section> */}
    </div>
  )
}
