import React, { useState } from 'react'
import { quizData } from '../../quiz data/QuizData'

export const Quiz = (props) => {

    const [index,setIndex] = useState(0);
    const [selectedoption, setSelectedOption] = useState(null);
    const [handledOption, sethandledOption] = useState(0);
    const [finished, setFinished] = useState(0);


    function next() {
        let i = index;
        if(i < quizData.length - 1) {
            setIndex(++i);
            setSelectedOption(null);
            sethandledOption(0);
        }
        if(index == quizData.length - 2){
            setFinished(1);
            console.log(finished);
        }
    }

    const handleClick = (event) => {
        const optionId = event.target.id;
        setSelectedOption(optionId);
        if(quizData[index].correct === optionId){
            props.setScore(props.score + 1);
        }
        sethandledOption(1);
    }
    
    


  return (
    <div className='flex flex-row min-h-screen justify-center items-center'>
        <div className='flex flex-col justify-center space-y-5 w-[80%] md:w-[40%]'>
            <div className='space-y-5'>
                <h1 className='flex text-sm md:text-2xl font-bold mb-4 h-20 items-center justify-start'>{index+1}. {quizData[index].question}</h1>
                <div className='space-y-4'>
                    <p onClick={selectedoption ? null : handleClick} id={`${quizData[index].option1}`} className={`bg-gray-100 border border-gray-300 p-4 rounded-md shadow-md ${selectedoption ? ' ' : 'cursor-pointer'} ${selectedoption == quizData[index].option1 && quizData[index].option1 == quizData[index].correct || quizData[index].option1 == quizData[index].correct && handledOption ? 'bg-green-200' : ''} ${selectedoption == quizData[index].option1 && quizData[index].option1 != quizData[index].correct && handledOption  ? 'bg-red-200' : ''}`}>{quizData[index].option1}</p>
                    <p onClick={selectedoption ? null : handleClick} id={`${quizData[index].option2}`} className={`bg-gray-100 border border-gray-300 p-4 rounded-md shadow-md ${selectedoption ? ' ' : 'cursor-pointer'} ${selectedoption == quizData[index].option2 && quizData[index].option2 == quizData[index].correct || quizData[index].option2 == quizData[index].correct && handledOption ? 'bg-green-200' : ''} ${selectedoption == quizData[index].option2 && quizData[index].option2 != quizData[index].correct && handledOption ? 'bg-red-200' : ''}`}>{quizData[index].option2}</p>
                    <p onClick={selectedoption ? null : handleClick} id={`${quizData[index].option3}`} className={`bg-gray-100 border border-gray-300 p-4 rounded-md shadow-md ${selectedoption ? ' ' : 'cursor-pointer'} ${selectedoption == quizData[index].option3 && quizData[index].option3 == quizData[index].correct || quizData[index].option3 == quizData[index].correct && handledOption ? 'bg-green-200' : ''} ${selectedoption == quizData[index].option3 && quizData[index].option3 != quizData[index].correct && handledOption ? 'bg-red-200' : ''}`}>{quizData[index].option3}</p>
                    <p onClick={selectedoption ? null : handleClick} id={`${quizData[index].option4}`} className={`bg-gray-100 border border-gray-300 p-4 rounded-md shadow-md ${selectedoption ? ' ' : 'cursor-pointer'} ${selectedoption == quizData[index].option4 && quizData[index].option4 == quizData[index].correct || quizData[index].option4 == quizData[index].correct && handledOption ? 'bg-green-200' : ''} ${selectedoption == quizData[index].option4 && quizData[index].option4 != quizData[index].correct && handledOption ? 'bg-red-200' : ''}`}>{quizData[index].option4}</p>
                </div>
            </div>
            {
                finished ? <button onClick={() => {props.setQuizFinished(1)}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Finish</button>
                         : <button onClick={next} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Next</button>
            }
        </div>
        
    </div>
  )
}
