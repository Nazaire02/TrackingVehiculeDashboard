const BACKEND_BASE_URL = "http://192.168.1.13:7000";

const BACKEND_API = {
    BASE_API_URL: `${BACKEND_BASE_URL}/api`,
    LOGIN: '/admin/login',
    LOGOUT: '/admin/logout',
    GET_ALL_CHAUFFEUR: '/chauffeur/get/all',
    CREATE_CHAUFFEUR: '/chauffeur/register',
    DESTROY_CHAUFFEUR: '/chauffeur/destroy/:id/admin/:adminId',
    GET_ALL_VEHICULE: '/vehicule/get/all',
    CREATE_VEHICULE: '/vehicule/create',
    DESTROY_VEHICULE: '/vehicule/destroy/:id/admin/:adminId',
    GET_ALL_CARBURANT: '',
    DETAIL_CARBURANT: '',
    GET_ALL_MAINTENANCE: '',
    DETAIL_MAINTENANCE: '',
    CREATE_CONDUIRE: '/conduire/create/chauffeur/:chauffeurId'
}

export default {BACKEND_API}