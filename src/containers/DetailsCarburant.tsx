import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Helper from '../helpers/Helper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, SetStateAction } from 'react'
import { getAllVehicule } from '../redux/actions/VehiculeAction';
import { RechercheCarburant } from '../redux/actions/CarburantAction';

import voiture from '../assets/img/voiture.jpg'

function DetailsCarburant() {

    const [carburantData, setCarburantData] = useState();
    const [dataVehicule, setDataVehicule] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { vehicule } = useSelector((state: any) => state?.vehiculeGetAll);
    const { carburant } = useSelector((state: any) => state?.carburantRecherche);

    const user = Helper()

    const [id, setID] = useState('')
    const [dateDebut, setDateDebut] = useState('')
    const [dateFin, setDateFin] = useState('')

    const handleIdChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setID(event.target.value);
    };

    const handleDateDebutChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDateDebut(event.target.value);
    };

    const handleDateFinChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDateFin(event.target.value);
    };

    const RechercheSubmitCarburant = (event) => {
        event.preventDefault();
        const attribute = { 
            vehiculeId: id,
            date_debut: dateDebut,
            date_fin: dateFin,
            token: user?.token
        }

        dispatch(RechercheCarburant(attribute))
        .then((response) => {
            console.log('response', response);
            navigate('/home/DetailsCarburant');
        })
        .catch((error: unknown) => {
            console.error('Erreur lors de la récupération des conducteurs :', error);
        });
    }

    useEffect(() => {
        dispatch(getAllVehicule(user?.token))
        .then((response) => {
            console.log('response', response);
            navigate('/home/DetailsCarburant');
        })
        .catch((error: unknown) => {
            console.error('Erreur lors de la récupération des conducteurs :', error);
        });
    }, [dispatch, navigate, user]);

    useEffect(() => {
        if (vehicule) {
            setDataVehicule(vehicule)
        }

        if(carburant) {
            setCarburantData(carburant)
            navigate('/home/DetailsCarburant')
        }

    }, [vehicule, carburant, navigate]);

    console.log('All recherche carburant', carburantData?.data)

    return (
        <>
            <div className="card mb-4">
                <form className="card-body" onSubmit={RechercheSubmitCarburant}>
                    <div className="mb-3">
                        <label className="form-label">Immatricule du véhicule</label>
                        <select name="" id="" className="form-control" onChange={handleIdChange}>
                            <option value="">Choisir un vehicule</option>
                            {
                                dataVehicule?.data?.map((element, index) => (
                                    <option value={element.id} key={index}>{element.immatriculation_vehicule} ({element.marque} {element.couleur} avec {element.puissance} Wh)</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <label className="form-label">Du</label>
                            <input type="date" id="multicol-birthdate" onChange={handleDateDebutChange} className="form-control dob-picker" placeholder="YYYY-MM-DD" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Au</label>
                            <input type="date" id="multicol-birthdate" onChange={handleDateFinChange} className="form-control dob-picker" placeholder="YYYY-MM-DD" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <button type="submit" className="btn rounded-pill btn-primary ms-auto mt-3">Envoyer</button>
                    </div>
                </form >
            </div >
            <h4 className="py-3"><span className="text-muted fw-light">Détails /</span>Carburant</h4>
            {!carburantData && <h4 className="py-3 mb-4">Aucun détails</h4>}
            {carburantData && <div className="card">
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Numéro Facture</td>
                                <td>Véhicule</td>
                                <td>Nombre Litre</td>
                                <td>Montant</td>
                                <td>Status</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            {
                                carburantData?.data?.map((element, index) => (
                                    <tr key={index}>
                                        <td>{element.numero_facture}</td>
                                        <td>
                                            <div className="d-flex align-items-center me-2">
                                                <img src={voiture} alt="" style={{"width": 45, "height": 45}}
                                                    className="rounded-circle" />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">{element.Vehicule.immatriculation_vehicule}</p>
                                                    <p className="text-muted mb-0">{element.Vehicule.marque} {element.Vehicule.couleur}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{element.nombre_litre} litre</td>
                                        <td>{element.montant} cfa</td>
                                        <td>
                                            <span className='btn text-red'>{element.Vehicule.status}</span>
                                        </td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" id="" style={{ marginLeft: 4 }}>
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Delete</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>}
        </>
    )
}

export default DetailsCarburant