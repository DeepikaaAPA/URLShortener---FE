import instance from "./instance";

const emailServices = {
  getResetLink: async (data) => {
    try {
      console.log(data);
      return await instance.patch("/getResetLink", data);
    } catch (err) {
      alert(err);
    }
  },
  verifyReset: async (token, email) => {
    return await instance.post(`/verifyReset/${token}`, { email });
  },
};

export default emailServices;
