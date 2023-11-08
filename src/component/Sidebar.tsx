import { useState } from "react"
import { Link } from "react-router-dom";

export function Sidebar() {
    const [isShow, setIsShow] = useState(false);
    //const [activeItem, setActiveItem] = useState("");

    function toggle() {
        setIsShow(!isShow)
    }

    return (
        <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
            <div className="app-brand demo">
                <a href="index.html" className="app-brand-link">
                    {/* <span className="app-brand-logo demo">

                </span> */}
                    <span className="app-brand-text demo menu-text fw-bold text-capitalize">Tracking véhicule</span>
                </a>

                <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                    <i className="bx bx-chevron-left bx-sm align-middle"></i>
                </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
                <li className="menu-item active open">
                    <a className="menu-link menu-toggle" onClick={toggle}>
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Dashboards">Dashboard</div>
                    </a>
                    {isShow && <ul className="menu-sub">
                         <li className="menu-item">
                            <Link to="/home" className="menu-link">Accueil</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/home/AllDrivers" className="menu-link">Mes conducteurs</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/home/Tracking" className="menu-link">Tracker vehicule</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/home/DetailsCarburant" className="menu-link">Details carburant</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/home/DetailsMaintenance" className="menu-link">Details maintenance</Link>
                        </li>
                    </ul>}
                </li>
            </ul>
        </aside>
    )
}