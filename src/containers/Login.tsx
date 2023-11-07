import { SetStateAction, useEffect, useState } from "react"
import '../assets/css/login.css'
import { loginAdmin } from "../redux/actions/AuthAction";
import { useDispatch, useSelector } from 'react-redux'
import AuthUser from "../helpers/AuthUser";
import { useNavigate } from "react-router-dom";

function Login() {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorData, setErrorData] = useState({})

    const handleEmailChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPassword(event.target.value);
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { admin, error } = useSelector((state: any) => state?.adminLogin);

    const loginSubmit = (event) => {
        event.preventDefault();
        dispatch(loginAdmin({ email, password }));
    };

    useEffect(() => {
        if (admin) {
            AuthUser.SetAuth(admin.data); 
            navigate('/home')
        } else {
            setErrorData({...error})
        }
    }, [admin, error, navigate])

    return (
        <div className="container-xxl col-10 col-sm-10 col-md-8 col-lg-5 login">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                    <div className="card">
                        <div className="card-body">
                            <div className="app-brand justify-content-center">
                                <span className="app-brand-text demo text-body fw-bold mb-3">Connexion</span>
                            </div>
                            <p className="mb-4">Veillez remplir le formulaire ci dessous pour vous connecter</p>

                            <form id="formAuthentication" className="mb-3" onSubmit={loginSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email-username"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                <div className="d-flex justify-content-between">
                                        <label className="form-label">Mot de passe</label>
                                    </div>
                                    {!isShowPassword && <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                            aria-describedby="password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        <span className="input-group-text cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}><i className="bx bx-hide"></i></span>
                                    </div>}
                                    {isShowPassword && <div className="input-group input-group-merge">
                                        <input
                                            type="text"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="password"
                                            aria-describedby="password"
                                            value={password}
                                            onChange={handlePasswordChange}
                                        />
                                        <span className="input-group-text cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}><i className="bx bx-show"></i></span>
                                    </div>}
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="remember-me" />
                                        <label className="form-check-label" >
                                            Se souvenir de moi
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-grid w-100" type="submit">Se connecter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login