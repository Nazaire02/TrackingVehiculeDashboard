import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Helper from "../helpers/Helper";
import { getHome } from "../redux/actions/HomeAction";
import { getAllConduire } from "../redux/actions/ConduireAction";
import { getDetailConducteur } from "../redux/actions/ConducteurAction";
import voiture from '../assets/img/voiture.jpg'
import { getAllCarburant } from "../redux/actions/CarburantAction";
import { getAllMaintenance } from "../redux/actions/MaintenanceAction";

export default function Dashboard() {
    const [Data, setData] = useState([])
    const [DataConduire, setDataConduire] = useState([])
    const [DataCarburant, setDataCarburant] = useState([])
    const [DataMaintenance, setDataMaintenance] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { home } = useSelector((state: any) => state?.home);
    const { conduire } = useSelector((state: any) => state?.conduireGetAll);
    const { carburant } = useSelector((state: any) => state?.carburantGetAll);
    const { maintenance } = useSelector((state: any) => state?.MaintenanceGetAll);



    const user = Helper()

    useEffect(() => {
        dispatch(getHome(user?.token))
        .then((response) => {
            console.log('response', response);
            navigate('/home');
        })
        .catch((error: unknown) => {
            console.error('Erreur lors de la récupération des conducteurs :', error);
        });
    }, [dispatch, navigate, user]);

    useEffect(() => {
        dispatch(getAllConduire(user?.token))
        .then((response) => {
            console.log('response', response);
            navigate('/home');
        })
        .catch((error: unknown) => {
            console.error('Erreur lors de la récupération des conducteurs :', error);
        });
    }, [dispatch, navigate, user]);

    useEffect(() => {
        dispatch(getAllCarburant(user?.token))
        .then((response) => {
            console.log('response', response);
            navigate('/home');
        })
        .catch((error: unknown) => {
            console.error('Erreur lors de la récupération des conducteurs :', error);
        });
    }, [dispatch, navigate, user]);

    useEffect(() => {
        dispatch(getAllMaintenance(user?.token))
        .then((response) => {
            console.log('response', response);
            navigate('/home');
        })
        .catch((error: unknown) => {
            console.error('Erreur lors de la récupération des conducteurs :', error);
        });
    }, [dispatch, navigate, user]);

    useEffect(() => {
        if (home) {
            setData(home)
        }

        if(conduire) {
            setDataConduire(conduire)
        }

        if(carburant) {
            setDataCarburant(carburant)
        }

        if(maintenance) {
            setDataMaintenance(maintenance)
        }
    }, [home, conduire, carburant, maintenance]);

    console.log('data maintenace', DataMaintenance)

    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="row g-4 mb-4">
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                        <div className="content-left">
                            <div className="d-flex align-items-end mt-2">
                            <h4 className="mb-0 me-2">{Data?.data?.countChauffeur}</h4>
                            </div>
                            <small>Total Chauffeurs</small>
                        </div>
                        <span className="badge bg-label-primary rounded p-2">
                            <i className="bx bx-user bx-sm"></i>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                        <div className="content-left">
                            <div className="d-flex align-items-end mt-2">
                            <h4 className="mb-0 me-2">{Data?.data?.countVehicule}</h4>
                            </div>
                            <small>Total Vehicules </small>
                        </div>
                        <span className="badge bg-label-danger rounded p-2">
                            <i className="fa-solid fa-car" style={{fontSize: 22}}></i>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                        <div className="content-left">
                            <div className="d-flex align-items-end mt-2">
                            <h4 className="mb-0 me-2">{Data?.data?.countVehiculeOccupe}</h4>
                            </div>
                            <small>Total Vehicule occupé</small>
                        </div>
                        <span className="badge bg-label-success rounded p-2">
                            <i className="fa-solid fa-car" style={{fontSize: 22}}></i>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                    <div className="card">
                    <div className="card-body">
                        <div className="d-flex align-items-start justify-content-between">
                        <div className="content-left">
                            <div className="d-flex align-items-end mt-2">
                            <h4 className="mb-0 me-2">{Data?.data?.countVehiculeNonOccupe}</h4>
                            </div>
                            <small>Total Vehicule non occupé</small>
                        </div>
                        <span className="badge bg-label-warning rounded p-2">
                            <i className="fa-solid fa-car" style={{fontSize: 22}}></i>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <h5 className="card-header">Véhicule associé à un chauffeur</h5>
                        <div className="table-responsive text-nowrap">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Véhicule</td>
                                        <td>Chauffeur</td>
                                        <td>Date</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        DataConduire?.data?.map((element, index) => {
                                            const formattedDate = new Date(element.date).toISOString().split('T')[0];
                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <div className="d-flex align-items-center me-2">
                                                            <img src={voiture} alt="" style={{"width": 45, "height": 45}}
                                                                className="rounded-circle" />
                                                            <div className="ms-3">
                                                                <p className="fw-bold mb-1">{element?.Vehicule?.immatriculation_vehicule}</p>
                                                                <p className="text-muted mb-0">{element?.Vehicule?.marque} {element?.Vehicule?.couleur}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>{element?.Chauffeur?.nom} {element?.Chauffeur?.prenom}</td>
                                                    <td>{formattedDate}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody> 
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="card">
                        <h5 className="card-header">Listes / Carburant</h5>
                        <div className="table-responsive text-nowrap">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Numéro Facture</td>
                                        <td>Véhicule</td>
                                        <td>Chauffeur</td>
                                        <td>Nombre Litre</td>
                                        <td>Montant</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        DataCarburant?.data?.map((element, index) => (
                                            <tr key={index}>
                                                <td>{element.numero_facture}</td>
                                                <td>
                                                    <div className="d-flex align-items-center me-2">
                                                        <img src={voiture} alt="" style={{"width": 45, "height": 45}}
                                                            className="rounded-circle" />
                                                        <div className="ms-3">
                                                            <p className="fw-bold mb-1">{element?.Vehicule?.immatriculation_vehicule}</p>
                                                            <p className="text-muted mb-0">{element?.Vehicule?.marque} {element?.Vehicule?.couleur}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{element?.Chauffeur?.nom} {element?.Chauffeur?.prenom}</td>
                                                <td>{element.nombre_litre} litre</td>
                                                <td>{element.montant} cfa</td>
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
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <div className="card">
                        <h5 className="card-header">Listes / Maintenance</h5>
                        <div className="table-responsive text-nowrap">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <td>Numéro Facture</td>
                                        <td>Véhicule</td>
                                        <td>Chauffeur</td>
                                        <td>Description</td>
                                        <td>Montant</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {
                                        DataMaintenance?.data?.map((element, index) => (
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
                                                <td>{element?.Chauffeur?.nom} {element?.Chauffeur?.prenom}</td>
                                                <td>{element.saisie_reparation}</td>
                                                <td>{element.montant} cfa</td>
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
                                    }  */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}