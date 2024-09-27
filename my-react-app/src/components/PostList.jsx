// PostList.js
import React, { useState } from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      <h3>Posts</h3>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
};

const PostItem = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div style={{ border: '1px solid black', marginBottom: '10px', padding: '10px' }}>
      <p>{post}</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>

      <div>
        <h4>Comments</h4>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}

        <form onSubmit={handleAddComment}>
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </div>
  );
};

export default PostList;
