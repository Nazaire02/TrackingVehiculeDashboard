import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Helper from "../helpers/Helper";
import { getHome } from "../redux/actions/HomeAction";
import { getAllConduire } from "../redux/actions/ConduireAction";
import { getDetailConducteur } from "../redux/actions/ConducteurAction";

export default function Dashboard() {
    const [Data, setData] = useState([])
    const [DataConduire, setDataConduire] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { home } = useSelector((state: any) => state?.home);
    const { conduire } = useSelector((state: any) => state?.conduireGetAll);

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
        if (home) {
            setData(home)
        }

        if(conduire) {
            setDataConduire(conduire)
        }
    }, [home, conduire]);

    console.log('home', Data?.data)
    console.log('all conduire', conduire)

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
                            <i className="bx bx-user-plus bx-sm"></i>
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
                            <i className="bx bx-group bx-sm"></i>
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
                            <i className="bx bx-user-voice bx-sm"></i>
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
                                        
                                    }
                                </tbody> 
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}