import React from 'react'
import DrawerSideBar from '../Component/Drawer'
import Activity from '../Component/Activity'
import { Box } from '@mui/material'
import styles from "./Home.module.css"
import SettingsPage from './SettingsPage'


const Setting = () => {
  return (
    <div>
      
      <Box className={styles.box}>
        <DrawerSideBar />
        <SettingsPage/>
      </Box>
    </div>
  )
}

export default Setting;
