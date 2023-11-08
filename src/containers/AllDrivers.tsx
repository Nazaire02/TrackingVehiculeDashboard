import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getAllConducteur } from '../redux/actions/ConducteurAction';
import { useEffect, useState } from 'react'
import Helper from '../helpers/Helper';

function AllDrivers() {
    const [DataConducteur, setDateConducteur] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { conducteur } = useSelector((state: any) => state?.conducteurGetAll);
    
    const user = Helper()

    useEffect(() => {
        console.log('token', user?.token)
        dispatch(getAllConducteur(user?.token))
        .then((response) => {
            console.log('response', response);
            navigate('/home/AllDrivers');
        })
        .catch((error: unknown) => {
            console.error('Erreur lors de la récupération des conducteurs :', error);
        });
    }, [dispatch, navigate, user]);

    useEffect(() => {
        if (conducteur) {
            setDateConducteur(conducteur)
        }
    }, [conducteur]);

    console.log('conducteur', DataConducteur?.data);


    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">Liste /</span> Mes conducteurs</h4>
            <div className="card">
                <h5 className="card-header">Mes conducteurs</h5>
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nom et prénoms</th>
                                <th>Date de naiss</th>
                                <th>N² Pièce</th>
                                <th>Téléphone</th>
                                <th>Salaire</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                        {
                            DataConducteur?.data?.map((conducteur, index) => (
                                <tr key={index}>
                                    <td>{conducteur.nom} {conducteur.prenom}</td>
                                    <td>{conducteur.date_naissance}</td>
                                    <td>{conducteur.numero_piece_identite}</td>
                                    <td>{conducteur.telephone}</td>
                                    <td>{conducteur.salaire}</td> 
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
            <Link to="/home/CreateDriver" type="button" className="btn rounded-pill btn-primary ms-auto mt-4">Créer un conducteur</Link>
</div>
        </>
    )
}

export default AllDrivers