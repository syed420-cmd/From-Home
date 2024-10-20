import React, { useState } from 'react';

function Newsfeed() {
  const [posts, setPosts] = useState([
    { id: 1, content: 'Working on a new project!' },
    { id: 2, content: 'Attended a youth workshop.' },
  ]);

  const [newPost, setNewPost] = useState('');

  const handlePost = () => {
    if (newPost.trim()) {
      setPosts([{ id: posts.length + 1, content: newPost }, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="newsfeed">
      <h2>Newsfeed</h2>
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={handlePost}>Post</button>

      {posts.map((post) => (
        <div key={post.id} className="post">
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Newsfeed;
