import React, { useState, useEffect } from 'react';
import { FaRecycle, FaLeaf, FaTrash, FaCalendarAlt } from 'react-icons/fa';
import './Schedule.css';

function Schedule() {
  const [weekData, setWeekData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockDatabaseResponse = [
          { 
            day: 'Monday', 
            date: 'Jan 22', 
            events: [{ type: 'General Waste', time: '7:00 AM - 9:00 AM', category: 'general' }] 
          },
          { 
            day: 'Tuesday', 
            date: 'Jan 23', 
            events: [{ type: 'Recyclables', time: '7:00 AM - 9:00 AM', category: 'recycling' }] 
          },
          { 
            day: 'Wednesday', 
            date: 'Jan 24', 
            events: [{ type: 'Organic Waste', time: '7:00 AM - 9:00 AM', category: 'organic' }] 
          },
          { 
            day: 'Thursday', 
            date: 'Jan 25', 
            events: [{ type: 'General Waste', time: '7:00 AM - 9:00 AM', category: 'general' }] 
          },
          { 
            day: 'Friday', 
            date: 'Jan 26', 
            events: [
              { type: 'Recyclables', time: '7:00 AM - 9:00 AM', category: 'recycling' },
              { type: 'Organic Waste', time: '10:00 AM - 12:00 PM', category: 'organic' }
            ] 
          },
          { day: 'Saturday', date: 'Jan 27', events: [] },
          { day: 'Sunday', date: 'Jan 28', events: [] },
        ];

        setWeekData(mockDatabaseResponse);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching schedule:", error);
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  const getIcon = (category) => {
    switch(category) {
      case 'recycling': return <FaRecycle />;
      case 'organic': return <FaLeaf />;
      case 'general': return <FaTrash />;
      default: return <FaTrash />;
    }
  };

  return (
    <div className="page-wrapper">
      <header className="main-header">
        <div className="header-content">
          <div className="header-icon-circle">
            <FaCalendarAlt />
          </div>
          <h1 className="header-title">Pickup Schedule</h1>
          <p className="header-subtitle">Weekly waste collection schedule for your area</p>
        </div>
      </header>

      <div className="schedule-container">
        <div className="guide-section">
          <h2 className="section-title">Waste Type Guide</h2>
          <div className="guide-grid">
            <div className="guide-card guide-general">
              <div className="guide-icon"><FaTrash /></div>
              <div className="guide-info">
                <h4>General Waste</h4>
                <p>Non-recyclable items</p>
              </div>
            </div>
            <div className="guide-card guide-recycling">
              <div className="guide-icon"><FaRecycle /></div>
              <div className="guide-info">
                <h4>Recyclables</h4>
                <p>Paper, plastic, glass</p>
              </div>
            </div>
            <div className="guide-card guide-organic">
              <div className="guide-icon"><FaLeaf /></div>
              <div className="guide-info">
                <h4>Organic Waste</h4>
                <p>Food scraps</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="section-title">Weekly Overview</h2>
        
        {loading ? (
          <div className="loading-container">
            <p>Loading schedule...</p>
          </div>
        ) : (
          <div className="calendar-grid">
            {weekData.map((dayData, index) => (
              <div key={index} className="calendar-card">
                <div className="calendar-header">
                  <span className="cal-day">{dayData.day}</span>
                  <span className="cal-date">{dayData.date}</span>
                </div>
                <div className="calendar-body">
                  {dayData.events.length > 0 ? (
                    dayData.events.map((event, idx) => (
                      <div key={idx} className={`event-block event-${event.category}`}>
                        <div className="event-icon">{getIcon(event.category)}</div>
                        <div className="event-details">
                          <span className="event-name">{event.type}</span>
                          <span className="event-time">{event.time}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="no-collection">
                      <p className="nc-title">No Collection</p>
                      <p className="nc-sub">Enjoy your day off!</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="reminders-section">
          <h3 className="reminders-title">Important Reminders</h3>
          <ul className="reminders-list">
            <li>Place bins at the curb by 7:00 AM on collection day</li>
            <li>Ensure lids are closed and bins are not overflowing</li>
            <li>Separate waste types properly to avoid collection delays</li>
            <li>Check for holiday schedule changes on our website</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
