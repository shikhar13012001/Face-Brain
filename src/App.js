import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import React from 'react';
const particleOptions={
  particles: {
      line_linked:{
        shadow:{
          enable: true,
          color:'#3CA9D1',
          blur: 5

        },
        distance:150
      },
      number: {
        value:80,
        density:{
          enable: true,
          value_area:800
        }
      }
  }
  }
class App extends React.Component {
  constructor(){
    super();
    this.state={
  input:''
    }
  }

  onInputChange=(e)=>{
  console.log(e.target.value)
  }
  handleSubmit=()=>{
    console.log('click');
  }
  render(){
    return (
    <div className="App">
    
    <Particles  className='particles'
                params={particleOptions} />
  <Navigation/>
  <Logo />
  <ImageLinkForm onInputChange={this.onInputChange} handleSubmit={this.handleSubmit}/>
  <Rank/>
  {/*
  
  <faceRecoginition/> */}
    </div>
  );}
}

export default App;
