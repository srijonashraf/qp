import axios from "axios";
import Cookies from "js-cookie";
import { setEmail, setPassword } from "../helper/sessionHelper";
import { axiosHeader } from "../constants/axiosHeader";

const baseurl = `https://quantumpossibilities.eu:82/api`;
export const userLogin = async (formValue) => {
  const url = `${baseurl}/login`;
  try {
    const res = await axios.post(url, formValue);
    if (res.status === 200) {
      Cookies.set("token", res.data.accessToken);
      setEmail(formValue.email);
      setPassword(formValue.password);
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const userRegistration = async (formValue) => {
  const url = `${baseurl}/signup`;
  try {
    const res = await axios.post(url, formValue);
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const reactionSubmission = async (formValue) => {
  const url = `${baseurl}/save-reaction-main-post`;
  try {
    const res = await axios.post(url, formValue, axiosHeader());
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const commentSubmission = async (formValue) => {
  const url = `${baseurl}/save-user-comment-by-post`;
  try {
    const res = await axios.post(url, formValue, axiosHeader());
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const createStory = async (formValue) => {
  const url = `https://qp-rho.vercel.app/api/create-story`;
  try {
    const res = await axios.post(url, formValue, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};
