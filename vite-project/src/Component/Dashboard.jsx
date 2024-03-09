import { Box } from '@mui/material'
import styles from "./styles/Dashboard.module.css"
import frame2 from '../assets/frame2.png'
import frame5 from '../assets/frame5.png'
import AccordianComp from './AccordianComp'


const Dashboard = ({availablePos,JobOpens,newEmployee}) => {
  return (
    <Box sx={{display:'flex',marginLeft:'10px', marginTop:'10px'}}>
      <div className={styles.left}>
        <h2>Dashboard</h2>

        <div className={styles.tbox}>
            <div className={styles.box11}>
                <h4>Available Position</h4>
                <h1>{availablePos}</h1>
                <p>4 Urgently Needed</p>
            </div>
            <div className={styles.box1}>
                <h4>Job Open</h4>
                <h1>{JobOpens}</h1>
                <p>4 Urgently Needed</p>
            </div>
            <div className={styles.box1}>
                <h4>New Employee</h4>
                <h1>{newEmployee}</h1>
                <p>4 Urgently Needed</p>
            </div>
        </div>

        <div className={styles.bbox}>
            <div className={styles.box2}>
                <div style={styles.textside}>
                    <h4>Total Employees</h4>
                    <h1>216</h1>
                    <div className={styles.fontSize}>120 Men</div>
                    <div className={styles.fontSize}>96 Women</div>
                </div>
                <div className={styles.imageSide}>
                    <img src={frame2} alt="img..." />
                </div>
            </div>
            <div className={styles.box2}>
            <div style={styles.textside}>
                    <h4>Talent Request</h4>
                    <h1>16</h1>
                    <div className={styles.fontSize}>6 Men</div>
                    <div className={styles.fontSize}>10 Women</div>
                </div>
                <div className={styles.imageSide}>
                    <img src={frame5} alt="img..." />
                </div>
            </div>

            
        </div>
        <div className='accordian'>
            <AccordianComp />
        </div>
      </div>
      
    </Box>
  )
}

export default Dashboard
