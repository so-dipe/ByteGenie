// import { baseUrl } from '../config'; 
import React, { useState } from 'react';
import './QuestionAnswering.css'; 
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { baseUri } from '../config'

const QuestionAnswering = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('question', question);

      const response = await fetch(`${baseUri}/answer`, {
        method: 'POST',
        headers: {
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
    <div className="qa-container">
      <h1>Ask a Question</h1>
      <form id="qaForm" onSubmit={handleFormSubmit}>
        <textarea
          rows="4"
          cols="50"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question here..."
          required
        />
        <button type="submit" className="send-button">
          <SendIcon />
        </button>
      </form>
      {answer && (
        <div className="results-box">
          <p>
            {answer}
          </p>
        </div>
      )}
      <button onClick={() => navigate('/')} className="back-button">
        <ArrowBackIcon />
      </button>
    </div>
  );
};

export default QuestionAnswering;
