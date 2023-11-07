import Dropdown from 'react-bootstrap/Dropdown';
import avatar from '../assets/img/avatars/1.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logoutAdmin } from '../redux/actions/AuthAction';
import AuthUser from '../helpers/AuthUser';
import './Navbar.css'
import {useEffect, useState} from 'react'

export function Navbar() {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await AuthUser.GetAuth();
                setUser(userData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserData();
    }, []);

    const logoutSubmit = (event) => {
        event.preventDefault();
        dispatch(logoutAdmin(user.token));
        navigate('/'); 
    };

    return (
            <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar">
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                        <i className="bx bx-menu bx-sm"></i>
                    </a>
                </div>

                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <i className="bx bx-search fs-4 lh-0"></i>
                            <input
                                type="text"
                                className="form-control border-0 shadow-none ps-1 ps-sm-2"
                                placeholder="Search..."
                                aria-label="Search..." />
                        </div>
                    </div>

                    <ul className="navbar-nav flex-row align-items-center ms-auto">
                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    <a className="nav-link dropdown-toggle hide-arrow">
                                        <div className="avatar avatar-online" >
                                            <img src={avatar} className="w-px-40 h-auto rounded-circle" />
                                        </div>
                                    </a>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Mon Profil</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Paramètres</Dropdown.Item>
                                    <form onSubmit={logoutSubmit}>
                                        <button className='logout' type='submit'>
                                            Se déconnecter
                                        </button>
                                    </form>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}