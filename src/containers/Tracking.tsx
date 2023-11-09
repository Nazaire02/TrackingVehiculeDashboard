import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState, SetStateAction } from 'react'
import { getAllVehicule } from '../redux/actions/VehiculeAction';
import Helper from '../helpers/Helper';
import './Tracking.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline   } from 'react-leaflet';
import { createConducteur } from '../redux/actions/ConducteurAction';

const markers = [
    { id: 1, lat: 5.359951, lng: -4.008256, name: 'Abidjan' },
    { id: 2, lat: 7.539989, lng: -5.54708, name: 'Yamoussoukro' },
    { id: 3, lat: 6.130308, lng: -3.282382, name: 'San Pedro' },
    { id: 4, lat: 8.000000, lng: -6.000000, name: 'New Marker' }
];
  
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

function Tracking() {
    const [DataVehicule, setDateVehicule] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { vehicule } = useSelector((state: any) => state?.vehiculeGetAll);

    const [id, setID] = useState('')
    const [date, setDate] = useState('')

    const handleIdChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setID(event.target.value);
    };

    const handleDateChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setDate(event.target.value);
    };

    const dispach = useDispatch();

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

    const [shuffledMarkers, setShuffledMarkers] = useState(markers);
    const [showAllMarkers, setShowAllMarkers] = useState(true);
    const [polylinePositions, setPolylinePositions] = useState(markers.map(marker => [marker.lat, marker.lng]));

    const createDriverTest = (event) => {
        event.preventDefault();
        const newMarkers = showAllMarkers ? markers.slice(0, 3) : markers; // Affiche 3 ou 4 markers en fonction de l'état showAllMarkers
        const newShuffledMarkers = shuffleArray(newMarkers);
        setPolylinePositions(newShuffledMarkers.map(marker => [marker.lat, marker.lng]));
    };

    console.log(shuffledMarkers)

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
            <div className="card mt-4 py-4">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="card-header">Suivre le chemin d'un vehicule</h5>
                        <form className='card-body'>
                            <div className='mb-3'>
                                <label className="form-label">Immatricule du véhicule</label>
                                <select name="" id="" className="form-control" onChange={handleIdChange}>
                                    <option value="">Choisir un vehicule</option>
                                    {
                                        DataVehicule?.data?.map((element, index) => (
                                            <option value={element.id} key={index}>{element.immatriculation_vehicule} ({element.marque} {element.couleur} avec {element.puissance} Wh)</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='row'>
                                <div className="col-md-12">
                                    <label className="form-label">Date</label>
                                    <input type="date" id="multicol-birthdate" onChange={handleDateChange} className="form-control dob-picker" placeholder="YYYY-MM-DD" />
                                </div>
                            </div>
                            <div className="d-flex">
                                <button type="submit" onClick={createDriverTest} className="btn rounded-pill btn-primary mt-3">Suivre</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8">
                        {/* <MapContainer center={[7.54, -5.55]} zoom={7} style={{ height: "500px", width: "100%" }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {shuffledMarkers.map(marker => (
                                <Marker key={marker.id} position={[marker.lat, marker.lng]}>
                                    <Popup>{marker.name}</Popup>
                                </Marker>
                            ))}
                            <Polyline positions={markers.map(marker => [marker.lat, marker.lng])} color="blue" />
                        </MapContainer> */}
                        <MapContainer center={[7.54, -5.55]} zoom={7} style={{ height: "500px", width: "100%" }}>
                            <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {shuffledMarkers.map(marker => (
                            <Marker key={marker.id} position={[marker.lat, marker.lng]}>
                                <Popup>{marker.name}</Popup>
                            </Marker>
                            ))}
                            <Polyline positions={polylinePositions} color="blue" />
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tracking