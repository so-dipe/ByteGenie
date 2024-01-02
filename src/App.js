import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import QuestionAnswering from './components/QuestionAnswering';
import DocumentSummarizing from './components/DocumentSummarizing';
import TopicExtractor from './components/TopicExtractor';
import './App.css';

const Index = () => {
  return (
    <div className="center-content">
      <h1>ByteGenie NLP App</h1>
      <p>what do you want to do?</p>
      <nav>
        <ul className="button-list"> {/* Use a class for styling buttons */}
          <li>
            <Link to="/question_answering" className="button">Question Answering</Link>
          </li>
          <li>
            <Link to="/document_summarizing" className="button">Document Summarizing</Link>
          </li>
          <li>
            <Link to="/topic_extractor" className="button">Topic Extractor</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/question_answering" element={<QuestionAnswering />} />
        <Route path="/document_summarizing" element={<DocumentSummarizing />} />
        <Route path="/topic_extractor" element={<TopicExtractor />} />
      </Routes>
    </Router>
  );
};

export default App;
