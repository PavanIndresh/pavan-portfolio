function Card2(props) {
  return (
    <div className='Card2'>
    <img src={props.img} alt='' className='Image4'/>
    <div className="overlay3">
        <div className='Inside-Card2'>
            <div className='card2-2'>{props.header}</div>
            <div className='card2-3'>{props.desc}</div>
            <div className='card2-4'>
                <button className='button1'>VIEW DETAILS</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Card2
