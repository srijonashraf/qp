export const axiosHeader = () => {
  return {
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${Cookies.get("token")}`,
    },
  };
};
