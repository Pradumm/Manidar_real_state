import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
const ContentToggle = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const qaArray = [
        {
            id: 1,
            question: "Why is it considered necessary to register Agreement for Sale?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            id: 2,
            question: "Why is it considered necessary to register Agreement for Sale?'?",
            answer: "William Shakespeare"
        },
        {
            id: 3,
            question: "Why is it considered necessary to register Agreement for Sale?'?",
            answer: "William Shakespeare"
        },
        {
            id: 4,
            question: "Why is it considered necessary to register Agreement for Sale?'?",
            answer: "William Shakespeare"
        },
        // Add more question-answer pairs here as needed
    ];

    const toggleQuestion = (id) => {
        if (selectedQuestion === id) {
            setSelectedQuestion(null);
        } else {
            setSelectedQuestion(id);
        }
    };

    return (
        <>
            {qaArray.map((item) => (
                <div key={item.id} className='bg-white shadow-lg rounded p-5 mb-3'>
                    <button className='flex justify-between items-center'  onClick={() => toggleQuestion(item.id)}>
                        <h1 className='text-xl font-[400] text-[#C5B351]'>{item.question}</h1>
                        <span>{selectedQuestion === item.id ? <MdKeyboardArrowUp  className='w-7 h-7' /> : <MdKeyboardArrowDown className='w-7 h-7' />}</span>
                    </button>
                    {selectedQuestion === item.id && (
                        <div className='px-2'>
                            <p>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </>
    );
};

export default ContentToggle;
