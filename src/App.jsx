import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';

function ProductPost({ product, index }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="post-container">
      {/* Header */}
      <div className="post-header">
        <div className="user-info">
          <div className="profile-picture">
            <img 
              src="https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=100" 
              alt="Biplov Dhakal" 
            />
          </div>
          <div className="user-details">
            <div className="username">Biplov Dhakal</div>
            <div className="location">Ulabari, Nepal</div>
          </div>
        </div>
        <button className="menu-button">
          <MoreHorizontal size={24} />
        </button>
      </div>

      {/* Main Image */}
      <div className="post-image">
        <img 
          src={product.image} 
          alt={product.name} 
        />
      </div>

      {/* Action Buttons */}
      <div className="post-actions">
        <div className="action-buttons-left">
          <button 
            className={`action-button ${isLiked ? 'liked' : ''}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart size={24} fill={isLiked ? '#ed4956' : 'transparent'} />
          </button>
          <button className="action-button">
            <MessageCircle size={24} />
          </button>
          <button className="action-button">
            <Send size={24} />
          </button>
        </div>
        <button 
          className={`action-button ${isSaved ? 'saved' : ''}`}
          onClick={() => setIsSaved(!isSaved)}
        >
          <Bookmark size={24} fill={isSaved ? '#262626' : 'transparent'} />
        </button>
      </div>

      {/* Likes Count */}
      <div className="likes-section">
        <span className="likes-count">{product.likes} likes</span>
      </div>

      {/* Caption */}
      <div className="caption-section">
        <span className="username-bold">biplov_dhakal</span>
        <span className="caption-text">{product.caption}</span>
      </div>

      {/* Comments */}
      <div className="comments-section">
        <div className="view-comments">View all {product.comments} comments</div>
        <div className="post-time">{product.timeAgo}</div>
      </div>
    </div>
  );
}

function App() {
  const products = [
    {
      id: 1,
      name: "Red Nike Sneakers",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 247,
      comments: 12,
      timeAgo: "2 hours ago",
      caption: "Fresh kicks for the weekend! 🔥 Nothing beats the classic red and white combo. #sneakerhead #nike #style"
    },
    {
      id: 2,
      name: "Casual T-Shirt",
      image: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 189,
      comments: 8,
      timeAgo: "4 hours ago",
      caption: "Simple yet stylish! Perfect for those casual summer days ☀️ Comfort meets fashion. #casualwear #summer #style"
    },
    {
      id: 3,
      name: "Denim Jeans",
      image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 312,
      comments: 15,
      timeAgo: "6 hours ago",
      caption: "Classic denim never goes out of style! 👖 These fit perfectly and go with everything. #denim #jeans #timeless"
    },
    {
      id: 4,
      name: "Leather Jacket",
      image: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 425,
      comments: 23,
      timeAgo: "8 hours ago",
      caption: "Feeling like a rockstar in this leather jacket! 🖤 Perfect for those cool evening vibes. #leather #jacket #rockstyle"
    }
  ];

  return (
    <div className="app">
      <div className="posts-grid">
        {products.map((product, index) => (
          <ProductPost key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;