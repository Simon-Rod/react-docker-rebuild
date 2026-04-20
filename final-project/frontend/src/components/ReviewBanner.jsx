import React from 'react';
import './ReviewBanner.css';

function ReviewBanner() {
  return (
    <section className="review-section">
      <div className="review-box">
        <div className="review-logo">
          <span className="ign-red">IGN</span>
        </div>
        <div className="review-content">
          <h2>
            <span className="ign-text">IGN - </span>
            <span className="score-text">8/10 "Super"</span>
          </h2>
          <p>An infinite sea of player interactions.</p>
        </div>
      </div>
    </section>
  );
}

export default ReviewBanner;