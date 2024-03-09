import React from 'react';
import pic1 from '../assets/pic1.png';
import styles from "./styles/teamMember.module.css"

const TeamMember = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Add team member</h2>
        <p className='time-p'>The following users have access to this meeting:</p>
      </div>
      
      <div className='team'>
        <div className={styles.person}>
            <div><img src={pic1} alt="" /></div>
            <div>
                <div className='time-p'>Candice wu</div>
                <div className='time-p'>Cand@untitledui.com</div>
            </div>
            <div style={{color:'red'}}>remove</div>
        </div>
        <div className={styles.person}>
            <div><img src={pic1} alt="" /></div>
            <div>
                <div className='time-p'>Demi Wilkinson</div>
                <div className='time-p'>demi@untitledui.com</div>
            </div>
            <div style={{color:'red'}}>remove</div>
        </div>
        <div className={styles.person}>
            <div><img src={pic1} alt="" /></div>
            <div>
                <div className='time-p'>Drew Cano</div>
                <div className='time-p'>drew@untitledui.com</div>
            </div>
            <div style={{color:'red'}}>remove</div>
        </div>
      </div>

      <div>
        <h4>Team member</h4>
        <select className={styles.input} name="team-member" id="team-member">
            <option value="" disabled selected>
              <img src={pic1} alt="Logo" /> 
              Select team member
            </option> 
            <option value="john-doe">John Doe</option>
            <option value="jane-doe">Jane Doe</option>
            <option value="alex-smith">Alex Smith</option>
        </select>
      </div>
    </div>
  );
};

export default TeamMember;
