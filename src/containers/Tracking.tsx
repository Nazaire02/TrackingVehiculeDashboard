import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { getAllVehicule } from '../redux/actions/VehiculeAction';
import Helper from '../helpers/Helper';

function Tracking() {
    const [DataVehicule, setDateVehicule] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { vehicule } = useSelector((state: any) => state?.vehiculeGetAll);

    const user = Helper()

    useEffect(() => {
        console.log('token', user?.token)
        dispatch(getAllVehicule(user?.token))
        .then((response) => {
            console.log('response', response);
            navigate('/home/Tracking');
        })
        .catch((error: unknown) => {
            console.error('Erreur lors de la récupération des véhicules :', error);
        });
    }, [dispatch, navigate, user]);

    useEffect(() => {
        if (vehicule) {
            setDateVehicule(vehicule)
        }
    }, [vehicule]);

    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">Liste /</span> Mes véhicules</h4>
            <div className="card">
                <h5 className="card-header">Liste des véhicules</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Immatriculation_vehicule</th>
                                <th>Puissance</th>
                                <th>Couleur</th>
                                <th>marque</th>
                                <th>annee_mise_en_circulation</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            {
                                DataVehicule?.data?.map((vehicule, index) => (
                                    <tr key={index}>
                                        <td>{vehicule?.immatriculation_vehicule}</td>
                                        <td>{vehicule?.puissance}</td>
                                        <td>{vehicule?.couleur}</td>
                                        <td>{vehicule?.marque}</td>
                                        <td>{vehicule?.annee_mise_en_circulation}</td>
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
            <div className="d-flex justify-content-between">
                <Link to="/home/CreateTracking" type="button" className="btn rounded-pill btn-primary ms-auto mt-4">Créer un vehicule</Link>
            </div>
        </>
    )
}

export default Tracking