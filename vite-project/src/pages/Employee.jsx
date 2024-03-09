import React from 'react'
import DrawerSideBar from '../Component/Drawer'
import Activity from '../Component/Activity'
import { Box } from '@mui/material'
import styles from "./Home.module.css"
import AccordianComp from '../Component/AccordianComp'
import Dashboard from '../Component/Dashboard'


const Employee = () => {
  return (
    <div>
      
      <Box className={styles.box}>
        <DrawerSideBar />
        <Dashboard/>
      </Box>
    </div>
  )
}

export default Employee
