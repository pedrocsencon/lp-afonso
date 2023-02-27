import axios from "axios";

export const api = axios.create({
  baseURL: `https://fast-island-65456.herokuapp.com/https://afonsomolina.api-us1.com/api/3`,
  headers: {
    "Api-Token":
      "d068fa9fc561da0329ec515dc4fce6c8fdb67ade375eab5a1c8c1693f76f3deea1c83a05",
  },
});
