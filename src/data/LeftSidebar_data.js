import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const LeftSidebar_main_data = [
    {
        icon: DashboardIcon,
        value: "Dashboard"
    }
]

const LeftSidebar_lists_data = [
    {
        icon: PersonOutlineIcon,
        value: "Users"
    },
    {
        icon: StoreIcon,
        value: "Products"
    },
    {
        icon: CreditCardIcon,
        value: "Orders"
    },
    {
        icon: LocalShippingIcon,
        value: "Delivery"
    }
]

const LeftSidebar_useful_data = [
    {
        icon: InsertChartIcon,
        value: "Statistics"
    },
    {
        icon: NotificationsNoneIcon,
        value: "Notifications"
    }
]

const LeftSidebar_service_data = [
    {
        icon: SettingsSystemDaydreamOutlinedIcon,
        value: "System Health"
    },
    {
        icon: PsychologyOutlinedIcon,
        value: "Logs"
    },
    {
        icon: SettingsApplicationsIcon,
        value: "Settings"
    }
]

const LeftSidebar_user_data = [
    {
        icon: AccountCircleOutlinedIcon,
        value: "Profile"
    },
    {
        icon: ExitToAppIcon,
        value: "Logout"
    }
]

export {
    LeftSidebar_main_data,
    LeftSidebar_lists_data,
    LeftSidebar_useful_data,
    LeftSidebar_service_data,
    LeftSidebar_user_data
}
