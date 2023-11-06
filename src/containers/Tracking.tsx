import Dropdown from 'react-bootstrap/Dropdown';

function Tracking() {
    return (
        <>
            <h4 className="py-3 mb-4"><span className="text-muted fw-light">Liste /</span> Mes véhicules</h4>
            <div className="card">
                <h5 className="card-header">Liste des véhicules</h5>
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
                            <tr>
                                <td>
                                    Kouacou Landry
                                </td>
                                <td>10/01/1998</td>
                                <td>CNI102030407</td>
                                <td>0102030407</td>
                                <td>190 000 FCFA</td>
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
                            <tr>
                                <td>Koffi Christ</td>
                                <td>20/11/1997</td>
                                <td>CNI000998877</td>
                                <td>0709090909</td>
                                <td>170 000 FCFA</td>
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
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <button type="button" className="btn rounded-pill btn-primary ms-auto mt-4">Créer un conducteur</button>
            </div>
        </>
    )
}

export default Tracking