import React from 'react';
import './team.css';
import member1Photo from './ananya.jpeg';
import member2Photo from './har.jpeg';
import member3Photo from './sakshi.jpeg';
import member4Photo from './bhu.jpeg';

const Team = () => {
  return (
    <div id="team" className="section">
      <h2 className="team-heading">Meet Our Team</h2> {/* Changed "Our team" to "Meet Our Team" */}
      <div className="team-container">
        <div className="team-member">
          <div className="member-info">
            <img src={member1Photo} alt="Team Member 1" />
            <p>ANANYA BHAT</p>
          </div>
        </div>
        <div className="team-member">
          <div className="member-info">
            <img src={member2Photo} alt="Team Member 2" />
            <p>HARSHITHA V</p>
          </div>
        </div>
        <div className="team-member">
          <div className="member-info">
            <img src={member3Photo} alt="Team Member 3" />
            <p>SAKSHI K</p>
          </div>
        </div>
        <div className="team-member">
          <div className="member-info">
            <img src={member4Photo} alt="Team Member 4" />
            <p>BHUVAN SHRIDHAR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
