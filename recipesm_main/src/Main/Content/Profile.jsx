import React from 'react'

export default function Profile() {
    return (
        <div style={{backgroundColor:' ', width:'100%', height:'100%'}}>
           <section class="profile">
  <header class="header">
    <div class="details">
      <img src="https://images.pexels.com/photos/208147/pexels-photo-208147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=450" alt="John Doe" class="profile-pic" />
      <h1 class="heading">Recipesm</h1>
      <div class="location">
       
        <p>Surat, India</p>
      </div>
      <div class="stats">
        <div class="col-4">
          <h4>20</h4>
          <p>Reviews</p>
        </div>
        <div class="col-4">
          <h4>10</h4>
          <p>Communities</p>
        </div>
        <div class="col-4">
          <h4>100</h4>
          <p>Post</p>
        </div>
      </div>
    </div>
  </header>
</section>
        </div>
    )
}
