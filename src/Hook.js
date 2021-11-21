import React, {useState} from 'react'
import HookItem from './HookItem'
import {AiOutlineUser} from 'react-icons/ai'
import './Hook.scss'
import {MdKeyboardArrowDown,MdKeyboardArrowUp} from 'react-icons/md'
/**
* @author
* @function Hook
**/ 

const AccordionData = [
        {
            question: 'How does Parkname seperate itself from other domain name parking companies?',
            answer: 'Your domains are a valuable online property.As in any investment,you want the most efficient,easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains?As a proffesional domainer,you will find everything you need through Parkname to generate maximum profits from your domain portfolio'
        },
        {
            question: 'Is Parkname Parking actually free?',
            answer: 'Your domains are a valuable online property.As in any investment,you want the most efficient,easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains?As a proffesional domainer,you will find everything you need through Parkname to generate maximum profits from your domain portfolio'
        },
        {
            question: 'What do you do?',
            answer: 'Your domains are a valuable online property.As in any investment,you want the most efficient,easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains?As a proffesional domainer,you will find everything you need through Parkname to generate maximum profits from your domain portfolio'

        },
        {
            question: 'When was Parkname first founded?',
            answer: 'Your domains are a valuable online property.As in any investment,you want the most efficient,easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains?As a proffesional domainer,you will find everything you need through Parkname to generate maximum profits from your domain portfolio'
        }
]


export const Hook = (props) => {

    const [answers, setAnswers] = useState(false)
    const showAnswers = () => {
        setAnswers(!answers)
    }

  return(
    <div className="rows">
                <div className="title" onClick={showAnswers}>
                    <div className='inline'>
                        <div className='icon'>
                            <AiOutlineUser />
                        </div>
                        <div className="block">
                            <h5>About Us</h5>
                            <small>4 articles in this Topic</small>
                        </div>
                        <button className='button'>
                        {answers ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </button>
                    </div>
                </div>
                
                {answers ? <div className="faq">
                        {AccordionData.map((props) => {
                            return(
                                <HookItem 
                                question={props.question} 
                                answer={props.answer} /> 
                            )
                        })}
                    </div> : null
                }
    </div>
   )

 }

 export default Hook;