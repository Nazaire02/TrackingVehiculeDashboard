import { combineReducers } from 'redux'
import AuthSlice from './AuthSlice'
import ConducteurSlice from './ConducteurSlice'
import VehiculeSlice from './VehiculeSlice'
import ConduireSlice from './ConduireSlice'
import CarburantSlice from './CarburantSlice'
import MaintenanceSlice from './MaintenanceSlice'
import HomeSlice from './HomeSlice'


const rootReduceur = combineReducers({
    adminLogin: AuthSlice.adminLogin,
    adminLogout: AuthSlice.adminLogout,
    conducteurCreate: ConducteurSlice.conducteurCreate,
    conducteurGetAll: ConducteurSlice.conducteurGetAll,
    conducteurGetDetail: ConducteurSlice.conducteurGetDetail,
    conducteurDelete: ConducteurSlice.conducteurDelete,
    vehiculeCreate: VehiculeSlice.vehiculeCreate,
    vehiculeGetAll: VehiculeSlice.vehiculeGetAll,
    vehiculeGetDetail: VehiculeSlice.vehiculeGetDetail,
    vehiculeDelete: VehiculeSlice.vehiculeDelete,
    conduireCreate: ConduireSlice.conduireCreate,
    conduireGetAll: ConduireSlice.conduireGetAll,
    carburantRecherche: CarburantSlice.carburantRecherche,
    carburantGetAll: CarburantSlice.carburantGetAll,
    MaintenanceRecherche: MaintenanceSlice.MaintenanceRecherche,
    MaintenanceGetAll: MaintenanceSlice.MaintenanceGetAll,
    home: HomeSlice.home
})

export default rootReduceur