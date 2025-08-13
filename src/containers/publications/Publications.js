import React, { useState, useEffect } from "react";
import "./Publications.scss";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import { publicationsSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Publications() {
  const [papers, setPapers] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const initialCount = 2; // Show first 2 papers initially

  useEffect(() => {
    if (!publicationsSection.display) return;

    let sortedPapers = [...publicationsSection.papers];

    // Sort papers by date (most recent first) if sortByDate is enabled
    if (publicationsSection.sortByDate) {
      sortedPapers.sort((a, b) => {
        // If both have dates, sort by date
        if (a.date && b.date) {
          return new Date(b.date) - new Date(a.date);
        }
        // If only one has date, prioritize it
        if (a.date && !b.date) return -1;
        if (!a.date && b.date) return 1;
        // Fallback to year sorting
        return parseInt(b.year) - parseInt(a.year);
      });
    }

    // Secondary sort by featured status (featured papers first)
    sortedPapers.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

    setPapers(sortedPapers);
  }, []);

  const papersToShow = showAll ? papers : papers.slice(0, initialCount);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  if (!publicationsSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="publications-section" id="publications">
        <h1 className="publications-heading">{publicationsSection.title}</h1>
        <div className="publications-card-container">
          {papers.length > 0 ? (
            <>
              {papersToShow.map((paper, index) => (
                <Fade bottom duration={1000} distance="20px" key={index}>
                  <PublicationCard paper={paper} />
                </Fade>
              ))}
              {papers.length > initialCount && (
                <div className="show-more-container">
                  <button 
                    className="show-more-btn" 
                    onClick={toggleShowAll}
                  >
                    {showAll ? "Show Less" : `See All Publications (${papers.length})`}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="no-publications">
              <p>No publications available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
