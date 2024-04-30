import Image2 from '../assets/Image2.jpg';

function Banner5() {

  return (
    <div className='Banner5'>
        <div className="insideConBan2">
            <div className='Ban5-Con2'>
                <div className='ban5-1'>Hire Me.</div>
                <div className='ban5-2'>
                  <div>I am available for freelance work.</div>
                  <div>Connect with me via phone:<a className='href'>+91 8884899481</a></div>
                  <div>or email: 
                  <a href='mailto:pavanindresh15@gmail.com' className='href'>pavanindresh15@gmail.com</a></div>  
                </div>
                <div className='ban5-3'>
                  <input className='ban53-1' placeholder='Your Name'></input>
                  <input className='ban53-2' placeholder='Your Email'></input>
                  <input className='ban53-3' placeholder='Write a Subject'></input>
                  <textarea className='ban53-4' placeholder='Your Message'></textarea>
                </div>
                <div className='ban5-4'>
                  <button className='ban54-1'>SUBMIT</button>
                </div>
            </div>
            <div className='Ban5-Con1'>
                <img  src={Image2} alt='' className='Image5'/>
                <div className="overlay2"/>
            </div>
        </div>
    </div>
  )
}

export default Banner5
