import React, { useState } from 'react';
import './DocumentSummarizing.css'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { baseUri } from '../config'

const TopicExtractor = () => {
  const [documentText, setDocumentText] = useState('');
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('document', documentText);

      const response = await fetch(`${baseUri}/get_topics`, {
        method: 'POST',
        headers: {
          // Assuming the backend expects JSON data
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ document: documentText }),
      });

      const data = await response.json();
      const extractedTopics = data.topics;
      setTopics(extractedTopics);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="summarize-container">
      <h1>Extract Topics</h1>
      <form id="topicsForm" onSubmit={handleFormSubmit}>
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
        <button type="submit">Submit</button>
      </form>
      {loading && <p>loading result, please wait...</p>} 
      {topics.length > 0 && !loading && (
        <div className="results-box">
          <p>
            <strong>Extracted Topics:</strong>
          </p>
          <ul>
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={() => navigate('/')} className="back-button">
        <ArrowBackIcon />
      </button>
    </div>
  );
};

export default TopicExtractor;
