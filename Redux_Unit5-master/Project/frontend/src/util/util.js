import axios from 'axios';

export const getUser = (id) => {
return axios.get("/username/" + id)};

export const getUserPins = (id) => {
return axios.get("/pins/" + id + "/pins")
}
