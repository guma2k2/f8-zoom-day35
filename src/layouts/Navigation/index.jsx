import { NavLink } from "react-router";
import styles from "./Navigation.module.scss";
import clsx from "clsx";
const navItems = [
    {
        to: "/",
        title: "Home",
    },
    {
        to: "/buttons",
        title: "Buttons",
    },
    {
        to: "/comments",
        title: "Comments",
    },
    {
        to: "/counter",
        title: "Counter",
    },
    {
        to: "/products",
        title: "Products",
    },
    {
        to: "/profile",
        title: "Profile",
    },
    {
        to: "/todo",
        title: "Todo",
    },
    {
        to: "/weather",
        title: "Weather",
    },
];
function Navigation() {
    return (
        <nav className={styles.navbar}>
            <ul>
                {navItems.map((item, index) => (
                    <li key={index} className={styles.item}>
                        <NavLink className={({ isActive }) => clsx(styles.link, { [styles.active]: isActive })} to={item.to}>
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
