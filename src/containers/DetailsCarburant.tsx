import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DetailsCarburant() {

    const [data, setData] = useState();
    return (
        <>
            <div className="card mb-4">
                <form className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Nom du véhicule</label>
                        <input type="text" id="multicol-phone" className="form-control phone-mask" placeholder="658 799 8941TOTYOTA" aria-label="658 799 8941" />
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <label className="form-label">Du</label>
                            <input type="date" id="multicol-birthdate" className="form-control dob-picker" placeholder="YYYY-MM-DD" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Au</label>
                            <input type="date" id="multicol-birthdate" className="form-control dob-picker" placeholder="YYYY-MM-DD" />
                        </div>
                    </div>
                    <div className="d-flex">
                        <button type="button" className="btn rounded-pill btn-primary ms-auto mt-3">Envoyer</button>
                    </div>
                </form >
            </div >
            <h4 className="py-3"><span className="text-muted fw-light">Détails /</span>Carburant</h4>
            {!data && <h4 className="py-3 mb-4">Aucun détails</h4>}
            {data && <div className="card">
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nom du conducteur</th>
                                <th>N² véhicule</th>
                                <th>Montant</th>
                                <th>Date</th>
                                {/* <th>Actions</th> */}
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            <tr>
                                <td>
                                    Kouacou Landry
                                </td>
                                <td>VEH102030407</td>
                                <td>10 000 FCFA</td>
                                <td>10/01/1998</td>
                            </tr>
                            <tr>
                                <td>
                                    Kouacou Landry
                                </td>
                                <td>VEH102030407</td>
                                <td>10 000 FCFA</td>
                                <td>10/01/1998</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>}
        </>
    )
}

export default DetailsCarburant