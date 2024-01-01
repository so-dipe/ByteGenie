import React, { useState } from 'react';

const QuestionAnswering = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('question', question);

      const response = await fetch('/answer', {
        method: 'POST',
        headers: {
          // Assuming the backend expects JSON data
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      const generatedAnswer = data.answer;
      setAnswer(generatedAnswer);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Question Answering</h1>
      <form id="qaForm" onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question here..."
          required
        />
        <br />
        <button type="submit">Get Answer</button>
      </form>
      {answer && (
        <div>
          <p>
            <strong>Question:</strong> {question}
          </p>
          <p>
            <strong>Answer:</strong> {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionAnswering;
