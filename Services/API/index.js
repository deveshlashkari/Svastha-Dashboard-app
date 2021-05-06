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

export const saveBloodBank = (body) => {
  try {
    return axios.post(`${Constants.BASE_URL}/blood_banks`, body);
  } catch (error) {
    console.error();
  }
};

export const createMedicalStore = (body) => {
  try {
    return axios.post(`${Constants.BASE_URL}/create_medical_store`, body);
  } catch (error) {
    console.error();
  }
};
export const saveHospitalDetail = (body) => {
  try {
    return axios.post(`${Constants.BASE_URL}/hospital_details`, body);
  } catch (error) {
    console.error();
  }
};

export const saveEmergencyContact = (body) => {
  try {
    return axios.post(`${Constants.BASE_URL}/emergency_contacts`, body);
  } catch (error) {
    console.error();
  }
};

export const getPlasmaDonors = () => {
  try {
    return axios.get(
      `${Constants.BASE_URL}/get_plasma_donor_for_emergency_contact`
    );
  } catch (error) {
    console.error();
  }
};

export const getListOfEmergencyCategory = (category) => {
  try {
    return axios.get(
      `${Constants.BASE_URL}/emergency_contacts?search_term=${category}`
    );
  } catch (error) {
    console.error();
  }
};
