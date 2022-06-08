import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const widget_user_data = {
    title: "users",
    counter: 21325,
    isMoney: false,
    link: "See all Users",
    percentage: 20,
    icon: (
        <PersonOutlinedIcon
            className="icon"
            style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
        />
    )
}

const widget_orders_data = {
    title: "orders",
    counter: 21131,
    isMoney: false,
    percentage: -22.5,
    link: "See all orders",
    icon: (
        <ShoppingCartOutlinedIcon
            className="icon"
            style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod",
            }}
        />
    )
}

const widget_earnings_data = {
    title: "earnings",
    counter: 125358,
    isMoney: true,
    link: "See all earnings",
    percentage: 35,
    icon: (
        <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
    )                
}

const widget_balance_data = {
    title: "balance",
    counter: 23324,
    isMoney: true,
    link: "balance sheet",
    percentage: -8,
    icon: (
        <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple",
            }}
        />
    )
}

export {
    widget_user_data,
    widget_orders_data,
    widget_earnings_data,
    widget_balance_data
}
