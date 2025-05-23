import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Faq(props) {
    const[toggle,setToggle]= useState({question1:false,question2:false,question3:false,question4:false,question5:false})

    function toggleHandler(key){
        setToggle(()=>({question1:false,question2:false,question3:false,question4:false,question5:false,[key]:!toggle[key]}))
    }
  return (
    <div className='px-5'>
           {
            props.faqData.map((data,i)=>(
                <div className={`border-1 border-[#65646462] rounded-sm shadow-lg mb-5 px-5 py-3 transition-all duration-300 ${toggle["question"+i]?"md:h-24 h-43":"md:h-15 h-20"}`} onClick={()=>toggleHandler("question"+i)} key={i}>
                <div className='flex justify-between mb-4 text-lg font-bold'>
                    <p>{data.question}</p>
                    <FontAwesomeIcon className={`transition-all duration-300 text-xl ${toggle["question"+i]?"rotate-45":"rotate-0"}`} icon={faAdd}/>
                </div>
                <p className={`transition-all duration-300 ${toggle["question"+i]?"opacity-100 -translate-y-0":"opacity-0 -translate-y-5"}`}>{data.result}</p>
            </div>
            ))
           }
    </div>
  )
}

export default Faq