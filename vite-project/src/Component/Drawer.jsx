import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useMediaQuery } from "@mui/material";
import "./styles/Drawer.css";
import Dashboard from "./Dashboard";
import Activity from "./Activity";
import DashboardLogo from "../assets/ic_dashboard.png";
import RecruitmentLogo from "../assets/ic_recruitment.png";
import ScheduleLogo from "../assets/ic_calendar.png";
import EmployeeLogo from "../assets/ic_employee.png";
import DepartmentLogo from "../assets/ic_department.png";
import SupportLogo from "../assets/ic_support.png";
import SettingLogo from "../assets/Group.png";
import Navbar from "./Navbar";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  backgroundColor: "white",
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("md")); // Check if the screen size is mobile
  const [open, setOpen] = React.useState(!isTablet); // Initially open on larger screens

  React.useEffect(() => {
    setOpen(!isTablet);
  }, [isTablet]); // Update the state when the screen size changes

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" open={open} sx={{ bgcolor: "inherit" }}>
        <Navbar />
      </AppBar>

      <Drawer variant="permanent" open={open}>
      <DrawerHeader sx={{ textAlign: "center",display:'flex',flexDirection:'column' , marginTop:'2rem',marginBottom:'2rem'}}>
          <Typography
            variant="h6"
            sx={{ fontSize: "23px", fontWeight: "bolder" }}
          >
            WeHr
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "12px" }}>
            Main menu
          </Typography>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: "Dashboard", logo: DashboardLogo },
            { text: "Recruitment", logo: RecruitmentLogo },
            { text: "Schedule", logo: ScheduleLogo },
            { text: "Employee", logo: EmployeeLogo },
            { text: "Department", logo: DepartmentLogo },
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={item.logo} alt={item.text} width={24} height={24} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
             { text: "Support", logo: SupportLogo, path: "/support" },
             { text: "Setting", logo: SettingLogo, path: "/setting" },
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <img src={item.logo} alt={item.text} width={24} height={24} />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography sx={{ display: "flex", flexDirection: isTablet ? "column" : "row", columnGap: "2rem" }}>
            <Dashboard availablePos={24} JobOpens={10} newEmployee={24} />
            {!isTablet && <Activity className="activity-container" />
} 
        </Typography>
      </Box>
    </Box>
  );
}
