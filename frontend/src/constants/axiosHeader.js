import Cookies from "js-cookie";
export const axiosHeader = () => {
  return {
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
};
