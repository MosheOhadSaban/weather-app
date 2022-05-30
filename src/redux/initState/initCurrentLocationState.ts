import ICurrentLocationState from "./../../models/CurrentLocationState";

const initCurrentLocationState: ICurrentLocationState = {
  isLoading: false,
  data: {
    Key: "",
    LocalizedName: "",
    Country: {
      ID: "",
      LocalizedName: "",
    },
  },
  error: null,
};

export default initCurrentLocationState;
