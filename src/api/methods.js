import axios from 'axios';

const API_HOST = 'http://localhost:8080';

export const fetchUsers = () => {
    const url = `${API_HOST}/api/users`;

    return axios.get(url, {
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        }
    });
};

export const fetchAmmo = () => {
    const url = `${API_HOST}/api/ammo`;

    return axios.get(url, {
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        }
    });
};

export const fetchGuns = () => {
    const url = `${API_HOST}/api/guns`;

    return axios.get(url, {
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        }
    });
};