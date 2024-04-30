import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card1(props) {
  const {color, alignSelf, alignItems} = props
  return (
    <div className='Card1'>
        <div className="Inside-Card">
          <FontAwesomeIcon icon={props.icon} size={props.size} style={{color, alignSelf, alignItems}}/>
        <div className='card1-2'>
          {props.header}
        </div>
        <div className='card1-3'>
          {props.desc}
        </div>
        </div>
    </div>
  )
}

export default Card1
