import React, { useState } from 'react';

const TopicExtractor = () => {
  const [documentText, setDocumentText] = useState('');
  const [topics, setTopics] = useState([]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('document', documentText);

      const response = await fetch('/get_topics', {
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
    }
  };

  return (
    <div>
      <h1>Topic Extractor</h1>
      <form id="topicsForm" onSubmit={handleFormSubmit}>
        <textarea
          name="document"
          value={documentText}
          onChange={(e) => setDocumentText(e.target.value)}
          rows={10}
          cols={50}
          placeholder="Enter your document here..."
          required
        />
        <br />
        <button type="submit">Extract Topics</button>
      </form>
      {topics.length > 0 && (
        <div>
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
    </div>
  );
};

export default TopicExtractor;
