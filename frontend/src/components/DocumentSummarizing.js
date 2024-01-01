import React, { useState } from 'react';

const DocumentSummarizing = () => {
  const [documentText, setDocumentText] = useState('');
  const [summary, setSummary] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('document', documentText);

      const response = await fetch('/summarize', {
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
    <div>
      <h1>Document Summarizing</h1>
      <form id="summarizeForm" onSubmit={handleFormSubmit}>
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
        <button type="submit">Generate Summary</button>
      </form>
      {summary && (
        <div>
          <p>
            <strong>Generated Summary:</strong>
          </p>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default DocumentSummarizing;
