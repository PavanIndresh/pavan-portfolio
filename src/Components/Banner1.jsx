import { useEffect, useState } from 'react';
import Image1 from '../assets/Image1.png';
import Header from './Header';
function Banner1() {
const [skill, setSkill] = useState('');

  useEffect (() =>{
    const list = ['HTML5','CSS','React Js','Java', 'Java Script',"MySql"]
    let index = 0;
    const singleList= setInterval(() => {
      index = (index + 1) % list.length;
      setSkill(list[index]+'.');
    },2100);
    return () => clearInterval(singleList);
    },[]);
    
  return (
    <div className='Banner1'>
        <img src={Image1} alt='' className='Image1'/>
        <div className='overlay1'>
            <Header/>
            <div className='Banner1Text'>
                <div className='container1'>
                  <div className='insideConBan1'>
                  <div className='FullStack'>Full Stack Developer</div>
                  <div className='pavan'>
                  <h1 className='pavan1'>Hi, I'm Pavan B Indresh</h1>
                  <h1 className='pavan2'>{skill}</h1>
                  <h1 className='pavan3'>based in Bengaluru.</h1>
                  </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner1
