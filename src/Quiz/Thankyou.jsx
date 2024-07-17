import React from 'react'

export default function Thankyou(props) {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-600">Thank You!</h1>
        <p className="text-lg mb-4">You have completed the quiz.</p>
        <p className="text-xl font-semibold">Your Score: {props.score} / 35</p>
      </div>
    </div>
  )
}
