import { combineReducers } from 'redux'
import AuthSlice from './AuthSlice'
import ConducteurSlice from './ConducteurSlice'
import VehiculeSlice from './VehiculeSlice'
import ConduireSlice from './ConduireSlice'
import CarburantSlice from './CarburantSlice'
import MaintenanceSlice from './MaintenanceSlice'


const rootReduceur = combineReducers({
    adminLogin: AuthSlice.adminLogin,
    adminLogout: AuthSlice.adminLogout,
    conducteurCreate: ConducteurSlice.conducteurCreate,
    conducteurGetAll: ConducteurSlice.conducteurGetAll,
    conducteurDelete: ConducteurSlice.conducteurDelete,
    vehiculeCreate: VehiculeSlice.vehiculeCreate,
    vehiculeGetAll: VehiculeSlice.vehiculeGetAll,
    vehiculeDelete: VehiculeSlice.vehiculeDelete,
    conduireCreate: ConduireSlice.conduireCreate,
    carburantCreate: CarburantSlice.carburantCreate,
    carburantGetAll: CarburantSlice.carburantGetAll,
    MaintenanceCreate: MaintenanceSlice.MaintenanceCreate,
    MaintenanceGetAll: MaintenanceSlice.MaintenanceGetAll
})

export default rootReduceur