import Card1 from './Card1';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenRuler, faDesktop, faCode} from '@fortawesome/free-solid-svg-icons';
import { faReact, faJava, faJs} from '@fortawesome/free-brands-svg-icons';

function Banner3() {

  return (
    <div className='Banner3'>
        <div className="InsideCon-Ban-3">
            <div className='Ban3-1'>
                <h1 className='Awesome'>My Technical Expertise</h1>
                <h3 className='Variations'>Elevate your digital projects with my versatile skill set.</h3>
            </div>
            <div className='Ban3-2'>
                <div className="row-1">
                    <Card1 icon={faPenRuler} size='2xl'  header='UI/UX DESIGN' desc='An effective UI/UX is what captures attention and spreads a clear message. I make sure the design is innovative and neat with all of this.'color='e61b1b' alignSelf='flex-start' alignItems='flex-start' />
                    <Card1 icon={faDesktop} size='2xl' header='FRONT-END DEVELOPMENT' desc="Crafting visually stunning and user-friendly websites. Let's create a unique online presence that engages your audience and drives results." color='#e61b1b' alignSelf='flex-start'/>
                    <Card1 icon={faCode} size='2xl' header='BACK-END DEVELOPMENT' desc="Specializing in robust and scalable back-end solutions. Let's build the foundation for your application, ensuring seamless functionality." color='#e61b1b' alignSelf='flex-start'/>
                </div>
                <div className="row-2">
                    <Card1 icon={faReact} size='2xl' header='REACT JS DEVELOPMENT' desc="Expertise in building dynamic with React. Let's create engaging user interfaces and seamless experiences that elevate your online presence." color='#e61b1b' alignSelf='flex-start'/>  
                    <Card1 icon={faJava} size='2xl' header='FULL STACK JAVA' desc="Experienced in developing robust and scalable applications with Java. Let's build reliable software solutions that meet's your expectations." color='#e61b1b' alignSelf='flex-start'/>  
                    <Card1 icon={faJs} size='2xl' header='JAVASCRIPT DEVELOPMENT' desc="Proficient in developing dynamic web applications with JavaScript. Let's collaborate to create intuitive user interfaces." color='#e61b1b' alignSelf='flex-start'/>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner3
