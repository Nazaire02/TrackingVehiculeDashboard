import { Link, useNavigate } from "react-router-dom";
import { useState, SetStateAction, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createVehicule } from '../redux/actions/VehiculeAction';
import Helper from "../helpers/Helper";


export default function CreateTracking() {

    const [immatriculationVehicule, setImmatriculationVehicule] = useState('')
    const [puissance, setPuissance] = useState('')
    const [couleur, setCouleur] = useState('')
    const [marque, setMarque] = useState('')
    const [anneeMiseEnCirculation, setAnneeMiseEnCirculation] = useState('')
    const [status, setStatus] = useState('Non occupé')
    const [errorData, setErrorData] = useState({})

    const user = Helper()

    const dispach = useDispatch();
    const navigate = useNavigate();
    const { vehicule, error } = useSelector((state: any) => state?.vehiculeCreate);

    const handleImmatriculationVehiculeChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setImmatriculationVehicule(event.target.value);
    };

    const handlePuissanceChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setPuissance(event.target.value);
    };

    const handleCouleurChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setCouleur(event.target.value);
    };

    const handleMarqueChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setMarque(event.target.value);
    };

    const handleAnneeMiseEnCirculationChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setAnneeMiseEnCirculation(event.target.value);
    };

    const handleStatusChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setStatus(event.target.value);
    };

    const creationVehicule = (event) => {
        event.preventDefault();
        const vehiculeData = { 
            immatriculation_vehicule: immatriculationVehicule,
            puissance,
			couleur, 
			marque,
			annee_mise_en_circulation: anneeMiseEnCirculation,
			status,
            token: user?.token
        }
        dispach(createVehicule(vehiculeData));
    }

    useEffect(() => {
        if (vehicule) {
            navigate('/home/Tracking')
        } else {
            console.log('error', error)
            setErrorData({ ...error })
        }
    }, [vehicule, error, navigate])

    /**
     * immatriculation_vehicule,
            puissance,
			couleur, 
			marque,
			annee_mise_en_circulation,
			status
     */

    return (
        <div className="card mb-4">
            <h5 className="card-header">Formulaire de création de vehicule</h5>
            <form className="card-body" onSubmit={creationVehicule}>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Immatriculation Vehicule</label>
                        <input
                            type="text"
                            className="form-control"
                            value={immatriculationVehicule}
                            onChange={handleImmatriculationVehiculeChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">puissance</label>
                        <input
                            type="text"
                            className="form-control"
                            value={puissance}
                            onChange={handlePuissanceChange}
                        />
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Couleur</label>
                        <input
                            type="text"
                            className="form-control"
                            value={couleur}
                            onChange={handleCouleurChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Marque</label>
                        <input
                            type="text"
                            className="form-control"
                            value={marque}
                            onChange={handleMarqueChange}
                        />
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label className="form-label">Annee mise en circulation</label>
                        <input
                            type="date"
                            className="form-control"
                            value={anneeMiseEnCirculation}
                            onChange={handleAnneeMiseEnCirculationChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Status</label>
                        <input
                            disabled
                            value={status}
                            type="text"
                            className="form-control"
                            onChange={handleStatusChange}
                        />
                    </div>
                </div>
                <div className="pt-4">
                    <button type="submit" className="btn btn-primary me-sm-3 me-1">Créer</button>
                    <Link to="/home/Tracking" className="btn btn-label-secondary">Retour</Link>
                </div>
            </form>
        </div>
    )
}