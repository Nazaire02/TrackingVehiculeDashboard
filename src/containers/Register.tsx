import { useState } from "react"
import { Link } from "react-router-dom"

function Register() {
    const [isShowPassword, setIsShowPassword] = useState(false)
    return (
        <div className="container-xxl col-10 col-sm-10 col-md-8 col-lg-5">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                    <div className="card">
                        <div className="card-body">
                            <div className="app-brand justify-content-center">
                                <span className="app-brand-text demo text-body fw-bold mb-3">Inscription</span>
                            </div>
                            <p className="mb-4">Veillez remplir le formulaire ci dessous pour créer un compte</p>

                            <form id="formAuthentication" className="mb-3" action="index.html" method="POST">
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" id="email" name="email-username" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" placeholder="Enter your username" />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <div className="d-flex justify-content-between">
                                        <label className="form-label">Password</label>
                                    </div>
                                    {!isShowPassword && <div className="input-group input-group-merge">
                                        <input type="password" id="password" className="form-control" name="password" placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" aria-describedby="password" />
                                        <span className="input-group-text cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}><i className="bx bx-hide"></i></span>
                                    </div>}
                                    {isShowPassword && <div className="input-group input-group-merge">
                                        <input type="text" id="password" className="form-control" name="password" placeholder="password" aria-describedby="password" />
                                        <span className="input-group-text cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}><i className="bx bx-show"></i></span>
                                    </div>}
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="remember-me" />
                                        <label className="form-check-label" >
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-grid w-100" type="submit">S'inscrire</button>
                                </div>
                            </form>

                            <p className="text-center">
                                <span>Déjà un compte sur la plateforme?</span>
                                <a href="auth-register-basic.html">
                                    <Link to="/">Se connecter</Link>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register