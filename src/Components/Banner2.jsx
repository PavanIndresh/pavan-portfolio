import { useState } from 'react';
import Image2 from '../assets/as.jpg';
import Skill from './Skill';

function Banner2() {
const [skill, setSkill] = useState(true);
const [experience, setExperience] = useState(false);
const [education, setEducation] = useState(false);

  return (
    <div className='Banner2'>
        <div className="insideConBan2">
            <div className='Ban2-Con1'>
                <img  src={Image2} alt='' className='Image3'/>
                <div className="overlay2"/>
            </div>
            <div className='Ban2-Con2'>
                <div className='InsideCon-Con2'>
                    <h1 className='About'>About Me</h1>
                    <h3>Passionate and driven developer with a strong foundation in web technologies. I thrive on challenges and enjoy turning ideas into reality through clean, efficient code. Let's collaborate and create something amazing!</h3>
                    <div className='option'>
                        <div className='option-1'>
                            <div className={skill ? 'active' : ''} onClick={() => {setSkill(true); setExperience(false); setEducation(false)}}>Main skills</div>
                            <div className={experience ? 'active' : ''} onClick={() => {setSkill(false); setExperience(true); setEducation(false)}}>Exprience</div>
                            <div className={education ? 'active' : ''} onClick={() => {setSkill(false); setExperience(false); setEducation(true)}}>Education & Certification</div>
                        </div>
                        <div className='option-2'>
                           {skill && 
                           <Skill skill1='Web and user interface design - Development' skill2='Websites, web experiences, user access control.'
                           skill3='User experience design - UI/UX' skill4='Delight the user and make it work.'/>
                           }
                           {experience &&
                           <Skill skill1='Software Engineer - Popular Digital.ai' skill2='Oct 2023 - Current'
                           skill3='Software Engineer Intern -Rapsol Technologies' skill4='Aug 2022 - Sep 2022'/>
                           }
                           {education &&
                           <Skill skill1="PUC(PCME) - Sri Kumaran's Pre University College" skill2='Jan 2017 - Jul 2019'
                           skill3='BE in CSE - K S Institute of Technology' skill4='Aug 2019 - May 2023'/>
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner2
