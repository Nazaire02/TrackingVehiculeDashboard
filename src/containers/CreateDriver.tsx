import { Link, useNavigate } from "react-router-dom"
import { SetStateAction, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { createConducteur } from "../redux/actions/ConducteurAction";
import Helper from "../helpers/Helper";

function CreateDriver() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [date_naissance, setDateNaiss] = useState('');
    const [numero_piece_identite, setNumPiece] = useState('');
    const [telephone, setTel] = useState('');
    const [salaire, setSalaire] = useState('');
    const [adresse, setAdresse] = useState('');
    const [errorData, setErrorData] = useState({})


    const dispach = useDispatch();
    const navigate = useNavigate();
    const { conducteur, error } = useSelector((state: any) => state?.conducteurCreate);
    console.log(conducteur)

    const user = Helper()

    const createDriver = (event) => {
        event.preventDefault();
        const conducteurData = { 
            nom, 
            prenom, 
            date_naissance, 
            numero_piece_identite, 
            telephone, 
            salaire, 
            adresse, 
            username, 
            password,
            token: user?.token 
        }
        dispach(createConducteur(conducteurData));
        console.log(conducteur)
    };

    useEffect(() => {
        if (conducteur) {
            navigate('/home/AllDrivers')
        } else {
            setErrorData({ ...error })
            navigate('/home/CreateDriver')
        }
    }, [conducteur, error, navigate])

    const handleChange = (fieldName: string, event: { target: { value: SetStateAction<string>; }; }) => {
        if (fieldName === 'nom') {
            setNom(event.target.value);
        } else if (fieldName === 'prenom') {
            setPrenom(event.target.value);
        } else if (fieldName === 'dateNaiss') {
            setDateNaiss(event.target.value);
        } else if (fieldName === 'numPiece') {
            setNumPiece(event.target.value);
        } else if (fieldName === 'tel') {
            setTel(event.target.value);
        } else if (fieldName === 'salaire') {
            setSalaire(event.target.value);
        } else if (fieldName === 'username') {
            setUsername(event.target.value);
        } else if (fieldName === 'password') {
            setPassword(event.target.value);
        }else if (fieldName === 'adresse') {
            setAdresse(event.target.value);
        }
    };

    return (
        <>        
            {/* <div className="alert alert-danger alert-dismissible" role="alert">
                This is a danger dismissible alert — check it out!
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                </button>
            </div> */}
            <div className="card mb-4">
                <h5 className="card-header">Formulaire de création de conducteur</h5>
                <form className="card-body" onSubmit={createDriver}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Nom</label>
                            <input
                                type="text"
                                value={nom}
                                onChange={(event) => handleChange('nom', event)}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Prénoms</label>
                            <input
                                type="text"
                                className="form-control"
                                value={prenom}
                                onChange={(event) => handleChange('prenom', event)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(event) => handleChange('username', event)}
                                className="form-control"
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Mot de passe</label>
                            <input
                                type="text"
                                className="form-control"
                                value={password}
                                onChange={(event) => handleChange('password', event)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Date de naissance</label>
                            <input
                                type="date"
                                className="form-control"
                                value={date_naissance}
                                onChange={(event) => handleChange('dateNaiss', event)}
                            />
                        </div>
                        <div className="col-md-6 select2-primary">
                            <label className="form-label" >Numero de piece</label>
                            <input
                                type="text"
                                className="form-control"
                                value={numero_piece_identite}
                                onChange={(event) => handleChange('numPiece', event)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Telephone</label>
                            <input
                                type="text"
                                className="form-control dob-picker"
                                value={telephone}
                                onChange={(event) => handleChange('tel', event)}
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Salaire</label>
                            <input
                                type="text"
                                className="form-control phone-mask"
                                value={salaire}
                                onChange={(event) => handleChange('salaire', event)}
                            />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Adresse</label>
                            <input
                                type="text"
                                className="form-control"
                                value={adresse}
                                onChange={(event) => handleChange('adresse', event)}
                            />
                        </div>
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="btn btn-primary me-sm-3 me-1">Créer</button>
                        <Link to="/home/AllDrivers" className="btn btn-label-secondary">Retour</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateDriver