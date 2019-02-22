import axios from 'axios';

export const getUser = (id) => {
  return axios.get("/username/" + id);

};
