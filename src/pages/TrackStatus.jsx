import React, { useState } from 'react';
import './TrackStatus.css';

function TrackStatus() {
  const [activeFilter, setActiveFilter] = useState('All');

  const issues = [
    { id: 1, title: 'Overflowing trash bin on Main Street', status: 'In Progress', description: 'Large trash bin is overflowing with general waste', location: '123 Main Street, near the park entrance', date: 'January 15, 2024', statusDetail: 'Being processed' },
    { id: 2, title: 'Broken recycling container', status: 'Pending', description: 'Recycling container lid is broken and needs replacement', location: '456 Oak Avenue, apartment complex', date: 'January 16, 2024', statusDetail: 'Awaiting review' },
    { id: 3, title: 'Missed pickup on Elm Street', status: 'Resolved', description: 'Weekly pickup was missed last Tuesday', location: '789 Elm Street, residential area', date: 'January 10, 2024', statusDetail: 'Completed' },
    { id: 4, title: 'Illegal dumping near highway', status: 'In Progress', description: 'Large amount of construction debris dumped illegally', location: 'Highway 101, exit 23', date: 'January 14, 2024', statusDetail: 'Being processed' },
    { id: 5, title: 'Damaged waste bin needs replacement', status: 'Resolved', description: 'Waste bin damaged by vehicle, needs immediate replacement', location: '321 Pine Road, commercial district', date: 'January 8, 2024', statusDetail: 'Completed' },
    { id: 6, title: 'Organic waste collection delay', status: 'Pending', description: 'Organic waste has not been collected for two weeks', location: '654 Maple Drive, residential area', date: 'January 17, 2024', statusDetail: 'Awaiting review' },
  ];

  const filteredIssues = activeFilter === 'All' ? issues : issues.filter(issue => issue.status === activeFilter);

  const getCount = (status) => status === 'All' ? issues.length : issues.filter(i => i.status === status).length;

  const filters = ['All', 'Pending', 'In Progress', 'Resolved'];

  return (
    <div className="track-status-page">
      <header className="status-header">
        <div className="header-icon-circle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
        </div>
        <h1 className="header-title">Track Issue Status</h1>
        <p className="header-subtitle">Monitor the progress of your reported issues</p>
      </header>

      <div className="content-container">
        <div className="filter-tabs">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'All' ? 'All Issues' : filter} 
              <span className="count-badge">({getCount(filter)})</span>
            </button>
          ))}
        </div>

        <div className="issues-grid">
          {filteredIssues.map((issue) => (
            <div key={issue.id} className="issue-card">
              <div className="card-top">
                <h3 className="issue-title">{issue.title}</h3>
                <span className={`status-badge status-${issue.status.toLowerCase().replace(' ', '-')}`}>
                  {issue.status}
                </span>
              </div>

              <p className="issue-description">{issue.description}</p>

              <div className="card-details">
                <div className="detail-row">
                  <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{issue.location}</span>
                </div>
                
                <div className="detail-row">
                  <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{issue.date}</span>
                </div>

                <div className="detail-row">
                  <svg className="detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{issue.statusDetail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrackStatus;
