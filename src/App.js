import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which planet is known as the Red Planet?',
			answerOptions: [
				{ answerText: 'Venus', isCorrect: false },
				{ answerText: 'Jupiter', isCorrect: false },
				{ answerText: 'Mars', isCorrect: true },
				{ answerText: 'Saturn', isCorrect: false },
			],
		},
		{
			questionText: 'What is the largest ocean on Earth?',
			answerOptions: [
				{ answerText: 'Atlantic Ocean', isCorrect: false },
				{ answerText: 'Pacific Ocean', isCorrect: true },
				{ answerText: 'Arctic Ocean', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following elements is a noble gas?',
			answerOptions: [
				{ answerText: 'Nitrogen', isCorrect: false },
				{ answerText: 'Oxygen', isCorrect: false },
				{ answerText: 'Argon', isCorrect: true },
				{ answerText: 'Chlorine', isCorrect: false },
			],
		},
		{
			questionText: 'What is the electron configuration of the sodium ion (Na+)?',
			answerOptions: [
				{ answerText: '1s² 2s² 2p⁶ 3s¹', isCorrect: false },
				{ answerText: '1s² 2s² 2p⁶ 3s²', isCorrect: false },
				{ answerText: '1s² 2s² 2p⁵', isCorrect: false },
				{ answerText: '1s² 2s² 2p⁶', isCorrect: true },
			],
		},
	];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const[score,setScore]=useState(false)
  const[point,setPoint]=useState(0);
  const handleChange=(isCorrect)=>{ 
    if(isCorrect===true)
    {
      setPoint(point+1)
    }
    const nextQuestion=currentQuestion+1
    
    if(nextQuestion < questions.length)
    {
      setCurrentQuestion(nextQuestion)
    }
    else
    {
      setScore(true)
    }
  }
	return (
		<div className='app'>
		
			{score ? (
				<div className='score-section'>You scored {point} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion+1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOptions)=>
            <button onClick={()=>handleChange(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)}
					</div>
				</>
			)}
		</div>
	);
}