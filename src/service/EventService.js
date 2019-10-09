import axios from 'axios'
    
const apiClient = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false, // This is the default
    headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
    return apiClient.get('/member')
    },
    getEvent(id) {
    return apiClient.get('/member/' + id)
    },

    getApps() {
    return apiClient.get('/appuser')
    },
    getApp(id) {
        return apiClient.get('/appuser/' + id)
    },

    getSearchs() {
    return apiClient.get('/products')
    },
    getSearch(id) {
    return apiClient.get('/products' + id)
    },
}