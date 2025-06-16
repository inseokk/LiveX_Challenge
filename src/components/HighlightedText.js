import React from 'react';

function HighlightedText({ text, searchQuery }) {
  // If no search query, return text as is
  if (!searchQuery.trim()) {
    return <span>{text}</span>;
  }

  // Create a regular expression to find matches (case insensitive)
  const regex = new RegExp(`(${searchQuery.trim()})`, 'gi');
  
  // Split text by the search query
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) => {
        // If this part matches the search query, highlight it
        if (part.toLowerCase() === searchQuery.toLowerCase()) {
          return (
            <mark key={index} className="highlight">
              {part}
            </mark>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}

export default HighlightedText;