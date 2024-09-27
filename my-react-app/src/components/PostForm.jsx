//PostForm.js
import React, { useState } from 'react';

const PostForm = ({ onAddPost }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question) {
      onAddPost(question);
      setQuestion('');
    }
  };

  return (
    <div>
      <h3>Post a Question</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask something..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
