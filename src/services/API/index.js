import axios from "axios";
import backendUrl from "../backendurl";


export const createClaim = async (body) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        //   Authorization: `Bearer ${token}`,
      };
      const { data } = await axios.post(`${backendUrl}claim/createClaim`, body, {
        headers,
      });
      return data;
    } catch (error) {
      return error;
    }
  };

  export const updateClaimStatus = async (body) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const { data } = await axios.put(`${backendUrl}claim/updateClaimStatus`, body, {
        headers,
      });
      return data;
    } catch (error) {
      return error;
    }
  };

  export const deleteClaim = async (body) => {
    try {
      const { data } = await axios.delete(`${backendUrl}claim/deleteClaim`,body);
      return data;
    } catch (error) {
      return error;
    }
  };
  
  export const getAllClaims = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}claim/getAllClaims`);
      return data;
    } catch (error) {
      return error;
    }
  };
  
  export const getClaim = async (body) => {
    try {
      const { data } = await axios.get(`${backendUrl}claim/getClaim`,body);
      return data;
    } catch (error) {
      return error;
    }
  };