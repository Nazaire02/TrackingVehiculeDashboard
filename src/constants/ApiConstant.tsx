const BACKEND_BASE_URL = "http://192.168.1.15:7000";

const BACKEND_API = {
    BASE_API_URL: `${BACKEND_BASE_URL}/api`,
    LOGIN: '/admin/login',
    LOGOUT: '/admin/logout',
    HOME: '/home',
    GET_ALL_CHAUFFEUR: '/chauffeur/get/all',
    GET_DETAIL_CHAUFFEUR: '/chauffeur/:id/detail',
    CREATE_CHAUFFEUR: '/chauffeur/create',
    DESTROY_CHAUFFEUR: '/chauffeur/destroy/:id/admin/:adminId',
    GET_ALL_VEHICULE: '/vehicule/get/all',
    GET_DETAIL_VEHICULE: '/vehicule/:id/detail',
    CREATE_VEHICULE: '/vehicule/create',
    DESTROY_VEHICULE: '/vehicule/destroy/:id/admin/:adminId',
    GET_ALL_CARBURANT: '',
    DETAIL_CARBURANT: '',
    GET_ALL_MAINTENANCE: '',
    DETAIL_MAINTENANCE: '',
    CREATE_CONDUIRE: '/conduire/create/chauffeur/:chauffeurId',
    GET_ALL_CONDUIRE: '/conduire/get/all',
}

export default {BACKEND_API}