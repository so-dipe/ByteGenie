import React, { useState } from 'react';
import './DocumentSummarizing.css'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { baseUri } from '../config'

const DocumentSummarizing = () => {
  const [documentText, setDocumentText] = useState('');
  const [summary, setSummary] = useState('');

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('document', documentText);

      const response = await fetch(`${baseUri}/summarize`, {
        method: 'POST',
        headers: {
          // Assuming the backend expects JSON data
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ document: documentText }),
      });

      const data = await response.json();
      const generatedSummary = data.summary;
      setSummary(generatedSummary);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="summarize-container">
      <h1>Summarize a Document</h1>
      <form id="summarizeForm" onSubmit={handleFormSubmit}>
        <textarea
          name="document"
          value={documentText}
          onChange={(e) => setDocumentText(e.target.value)}
          rows={10}
          cols={50}
          placeholder="Paste document here..."
          required
        />
        <br />
        <button type="submit">Summarize</button>
      </form>
      {summary && (
        <div className="results-box">
          <p>
            <strong>Generated Summary:</strong>
          </p>
          <p>{summary}</p>
        </div>
      )}
      <button onClick={() => navigate('/')} className="back-button">
        <ArrowBackIcon />
      </button>
    </div>
  );
};

export default DocumentSummarizing;
