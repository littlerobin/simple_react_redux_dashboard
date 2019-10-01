import * as API from "../../../lib/http/data.service";

export const loginUserService = async request => {
  return API.getByID(
    "getentitybyid",
    {
      username: request.username,
      password: request.password,
      tableuid: "0x2713",
      menutableuid: "0x2715"
    },
    "user",
    "DT"
  );
};
