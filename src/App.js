import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    let [height,setHeight] = useState(0);
    let [weight,setWeight] = useState(0);
    let [bmi,setBMI] = useState('');
    let [msg,setMsg] = useState('');

    const calculateBMI = (e)=>{
      e.preventDefault();
        if(weight===0 || height===0)
          alert('Height and Weight can not be zero')
        else{
          bmi = weight/(height*height);
          setBMI(bmi.toFixed(1))
        }

        if(bmi<25)
          setMsg('You are UnderWeight')
        else if(bmi>=25 && bmi<=30)
          setMsg('You are healthy')
        else
          setMsg('You are OverWeight')
    }

  return (
    <div className="App">
      <div className='container'>
          <h1>BMI Calculator</h1>
          <form>
              <label>Height:</label>
              <input type='text' placeholder='height' 
                value={height}
                onChange={(e)=>{setHeight(e.target.value)}}
              />

              <label>Weight:</label>
              <input type='text' placeholder='Weight'
                value={weight}
                onChange={(e)=>setWeight(e.target.value)}
              />

              <button type='submit'
               onClick={calculateBMI}
              >Calculate</button>

          </form>

          <h3>
              BMI:  <span> {bmi}</span>
          </h3>

          <h2>{msg}</h2>
      </div>
    </div>
  );
}

export default App;
