import React, {useState} from 'react'
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md'


/**
* @author
* @function HookItem
**/

export const HookItem = (props) => {

    const [answer, setAnswer] = useState(false);

    const showAnswer = () => {
      setAnswer(!answer)
  }
    
  return(
    <div className='single-question'>
        <div className='question' onClick={showAnswer}>
            <h6>{props.question}</h6>

            <button type='button'>
            {answer ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
        </div>

            <div className='answer' style={{display: answer ? 'block' : 'none'}}>
                {props.answer}

            </div>
    </div>
   )

 }

 export default HookItem;