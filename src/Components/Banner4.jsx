import Card2 from './Card2';
import Image1 from '../assets/project1.jpeg';
import Image2 from '../assets/Uber_Map.jpg';
import Image3 from '../assets/q.jpg';

function Banner4() {

  return (
    <div className='Banner4'>
        <div className="InsideCon-Ban-3">
            <div className='Ban3-1'>
                <h1 className='Awesome'>My Latest Projects</h1>
                <h3 className='Variations'>Elevate your digital projects with my versatile skill set.</h3>
            </div>
            <div className='Ban3-2'>
                <div className="row-1">
                    <Card2 img={Image1} header='Instigation of Detected Potholes' desc='The project aims to detect potholes using Image Processing and Machine Learning.' />
                    <Card2 img={Image2} header='Uber Dashboard' desc='Built a  MERN stack web app for an Uber-like dashboard, managing user-access control, driver information and interactions.'/>
                    <Card2 img={Image3} header='Foodie Finds' desc='Foodie-Finds connects food bloggers with local dining, showcasing regional cuisine on social media for culinary exploration.'/>
                </div>
                <div className="row-2">
                    <Card2 img={Image3} header='Foodie Finds' desc='Foodie-Finds connects food bloggers with local dining, showcasing regional cuisine on social media for culinary exploration.'/>
                    <Card2 img={Image1} header='Instigation of Detected Potholes' desc='The project aims to detect potholes using Image Processing and Machine Learning.'/>
                    <Card2 img={Image2} header='Uber Dashboard' desc='Foodie-Finds connects food bloggers with local dining, showcasing regional cuisine on social media for culinary exploration.'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner4
