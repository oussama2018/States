import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    let count = 0;
    setInterval(() => {
      count++;
      console.log(count);
    }, 1000);
  }
  
  state={
    person :{
    fullName:"Oussama",
    bio:"dsqdsqsdqs",
    imgSrc:"https://media.licdn.com/dms/image/C5603AQHhc5VQ1vReHw/profile-displayphoto-shrink_800_800/0/1635351071137?e=1691020800&v=beta&t=f5wRyHx1BYZlyazlTwF-FaS48vDIIPdwLIL8wosGKBk",
    profession:"developer"
   },
   shows:true ,
   number:0
  }
  
  render() {

    
     return (
      <>
      <button onClick={()=>this.setState({shows:!this.state.shows})}>show</button>
      {this.state.shows && <div>{this.state.person.fullName} <br />
      {this.state.person.bio}
      <img src={this.state.person.imgSrc} alt="" />
      {this.state.person.profession}
      </div>}
      </>
    )
  }
}

