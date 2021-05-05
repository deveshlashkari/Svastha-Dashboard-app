import axios from "axios";

import Constants from "../../Constants/Constants";

export const getAllEmergencyCategory = () => {
  try {
    return axios.get(`${Constants.BASE_URL}/get_all_emergency_category`);
  } catch (error) {
    console.log(error);
  }
};

export const savePlasmaDonor = (body) => {
  try {
    return axios.post(`${Constants.BASE_URL}/plasma_donors`, body);
  } catch (error) {
    console.error();
  }
};
