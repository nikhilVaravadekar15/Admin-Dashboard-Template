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
        value: "Dashboard",
        linkTo: "/"
    }
]

const LeftSidebar_lists_data = [
    {
        icon: PersonOutlineIcon,
        value: "Users",
        linkTo: "/users"
    },
    {
        icon: StoreIcon,
        value: "Products",
        linkTo: "/products"
    },
    {
        icon: CreditCardIcon,
        value: "Orders",
        linkTo: "/"
    },
    {
        icon: LocalShippingIcon,
        value: "Delivery",
        linkTo: "/"
    }
]

const LeftSidebar_useful_data = [
    {
        icon: InsertChartIcon,
        value: "Statistics",
        linkTo: "/"
    },
    {
        icon: NotificationsNoneIcon,
        value: "Notifications",
        linkTo: "/"
    }
]

const LeftSidebar_service_data = [
    {
        icon: SettingsSystemDaydreamOutlinedIcon,
        value: "System Health",
        linkTo: "/"
    },
    {
        icon: PsychologyOutlinedIcon,
        value: "Logs",
        linkTo: "/"
    },
    {
        icon: SettingsApplicationsIcon,
        value: "Settings",
        linkTo: "/"
    }
]

const LeftSidebar_user_data = [
    {
        icon: AccountCircleOutlinedIcon,
        value: "Profile",
        linkTo: "/users/testuser"
    },
    {
        icon: ExitToAppIcon,
        value: "Logout",
        linkTo: "/"
    }
]

export {
    LeftSidebar_main_data,
    LeftSidebar_lists_data,
    LeftSidebar_useful_data,
    LeftSidebar_service_data,
    LeftSidebar_user_data
}
