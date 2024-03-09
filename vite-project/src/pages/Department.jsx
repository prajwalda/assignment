import React from 'react'
import DrawerSideBar from '../Component/Drawer'
import { Box } from '@mui/material'
import styles from "./Home.module.css"
import DepartmentTeamPage from './DepartmentTeamPage'


const Department = () => {
  return (
    <div>
      
      <Box className={styles.box}>
        <DrawerSideBar />
        <DepartmentTeamPage/>
      </Box>
    </div>
  )
}

export default Department;
