import React from 'react'
import './SkillCard.css'


const SkillCard = ({txt1, txt2, emoji}) => {
    

  return (
    <div className="SkillCards">
        <div className='SkillCard'>
            <img src={emoji} alt="" />
            <div className="skillTag">
                <span>{txt1}</span>
                <span>{txt2}</span>
                <button className='s-button'>LEARN MORE</button>
            </div>
            
        </div>
    </div>
    )
}

export default SkillCard