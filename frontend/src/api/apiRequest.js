import axios from "axios";
import Cookies from "js-cookie";

const baseurl = `https://quantumpossibilities.eu:82/api`;
export const userLogin = async (formValue) => {
  const url = `${baseurl}/login`;
  try {
    const res = await axios.post(url, formValue);
    if (res.status === 200) {
      Cookies.set("token", res.data.accessToken);
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

