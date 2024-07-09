import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const suggestionsMap = {
  aboutMeta: [
    { name: 'Meta Founder', question: 'Who founded Meta?' },
    { name: 'Meta\'s mission', question: 'What is Meta\'s mission?' },
    { name: 'Meta Headquarter', question: 'Where is Meta headquartered?' }
  ],
  process: [
    { name: 'Meta\'s process', question: 'What is Meta\'s product development process?' },
    { name: 'Meta privacy', question: 'How does Meta ensure user privacy?' },
    { name: 'Meta\'s hiring', question: 'What are the steps in Meta\'s hiring process?' }
  ],
  productsAndFeatures: [
    { name: 'Meta\'s products?', question: 'What are Meta\'s main products?' },
    { name: 'Meta features', question: 'What features does Meta offer for businesses?' },
    { name: 'Meta integrations', question: 'How does Meta integrate with other platforms?' }
  ]
};

const MainContent = ({ activeSection }) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  useEffect(() => {
    // Reset selected suggestion when activeSection changes
    setSelectedSuggestion(null);
  }, [activeSection]);

  const handleSuggestionClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
  };

  return (
    <div className="main-content">
      {activeSection && !selectedSuggestion && (
        <div className="center-content">
          <div className="button-group">
            {suggestionsMap[activeSection].map((suggestion, index) => (
              <Button
                key={index}
                className="suggestion-button"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.name}
              </Button>
            ))}
          </div>
        </div>
      )}
      {selectedSuggestion && (
        <div className="question-container">
          <p>{selectedSuggestion.question}</p>
        </div>
      )}
      <div className="search-bar-container">
        <div className="search-bar-wrapper">
          <Form.Control type="text" placeholder="Search" className="search-bar" />
          <i className="fas fa-arrow-up search-icon"></i>
        </div>
        <Button variant="success" onClick={() => alert('Take Assessment button clicked!')}>
          Take Assessment
        </Button>
      </div>
    </div>
  );
};

export default MainContent;
