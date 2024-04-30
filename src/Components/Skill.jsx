

function Skill(props) {
    
  return (
    <div className='skill'>
      <div className='skill-1'>
        <p className='skill1-1'>{props.skill1}</p>
        <p className='skill1-2'>{props.skill2}</p>
      </div>
      <div className='skill-1'>
        <p className='skill1-1'>{props.skill3}</p>
        <p className='skill1-2'>{props.skill4}</p>
      </div>                      
    </div>
  )
}

export default Skill
