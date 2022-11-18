import React from 'react';
import './App.css';
import Person from './components/Person'
class App extends React.Component {
  state={
    person:[{name:'yahya bnoun',age:23},{name:'naji med',age:20} ,{name:'oussama midelt',age:19},{name:'namil  abdo',age:21},{name:'hamza  achiban',age:22},]
  }
  //// pour changer la couleur
  handleColor( ){
    document.getElementById('root').style.backgroundColor=document.getElementById('colorInput').value
  }

  //// pour trier Le plus vieux
  handleTheOldest( ){

    this.setState({ 
      person: this.state.person.sort((a,b)=> b.age-a.age)
    })}
  
  //// pour trier Le plus jeune
  handleTheYoungest( ){

    this.setState({ 
      person: this.state.person.sort((a,b)=>a.age-b.age)
    })

  }
  render() {
      return (
        <div className=''> 
            <div className='p-5 d-flex  flex-wrap '> 
            {this.state.person.map((item,index)=><Person key={index} name={item.name} age={item.age}/> )}
            </div>
            <div className='p-5 '> 
              <input id='colorInput' className='mx-auto ' type="color"  />

              <button  className='btn bg-light' onClick={()=>this.handleColor()}> color  </button>
              <button className='mx-3 btn bg-light' onClick={()=>this.handleTheOldest()}> The Oldest  </button>
              <button className='mx-3 btn bg-light' onClick={()=>this.handleTheYoungest()}> The Youngest  </button>

            </div>
        </div>
      );
    }
}
export default App;
