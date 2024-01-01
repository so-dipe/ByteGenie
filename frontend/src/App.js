import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionAnswering from './components/QuestionAnswering';
import DocumentSummarizing from './components/DocumentSummarizing';
import TopicExtractor from './components/TopicExtractor';

const Index = () => {
  return (
    <div>
      <h1>Welcome to NLP Apps</h1>
      <nav>
        <ul>
          <li>
            <a href="/question_answering">Question Answering</a>
          </li>
          <li>
            <a href="/document_summarizing">Document Summarizing</a>
          </li>
          <li>
            <a href="/topic_extractor">Topic Extractor</a>
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
