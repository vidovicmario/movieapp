import { createAlova } from "alova";
import ReactHook from "alova/react";
import GlobalFetch from "alova/GlobalFetch";
const alovaInstance = createAlova({
  baseURL: "https://api.themoviedb.org/3/",
  statesHook: ReactHook,
  requestAdapter: GlobalFetch(),
  responsed: {
    onSuccess: async (response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      // data that will be passed to the transformData hook
      return await response.json();
    },
    onError: (error) => {
      alert(error.message);
    },
  },
  // global request timeout in milliseconds
  timeout: 50000,
});
export default alovaInstance;
