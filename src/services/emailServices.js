import instance from "./instance";

const emailServices = {
  getResetLink: async (data) => {
    return await instance.patch("/user/getResetLink", data);
  },
  verifyReset: async (token, email) => {
    return await instance.post(`/user/verifyReset/${token}`, { email });
  },
};

export default emailServices;
