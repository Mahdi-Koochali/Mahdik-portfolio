import React from "react";
import "./PublicationCard.scss";

export default function PublicationCard({ paper }) {
  return (
    <div className={`publication-card ${paper.featured ? 'featured' : ''}`}>
      {paper.featured && (
        <div className="featured-badge">
          <i className="fas fa-star"></i> Featured
        </div>
      )}
      
      <div className="publication-header">
        <h3 className="publication-title">{paper.title}</h3>
        <div className="publication-meta">
          <span className="publication-authors">{paper.authors}</span>
          <span className="publication-venue">{paper.venue}</span>
          <span className="publication-year">{paper.year}</span>
        </div>
      </div>

      {paper.description && (
        <div className="publication-description">
          <p>{paper.description}</p>
        </div>
      )}

      {paper.tags && (
        <div className="publication-tags">
          {paper.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {paper.links && paper.links.length > 0 && (
        <div className="publication-links">
          {paper.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="publication-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon || "fas fa-external-link-alt"}></i>
              {link.name}
            </a>
          ))}
        </div>
      )}

      {paper.citations && (
        <div className="publication-stats">
          <span className="citations">
            <i className="fas fa-quote-right"></i> {paper.citations} citations
          </span>
        </div>
      )}
    </div>
  );
}
