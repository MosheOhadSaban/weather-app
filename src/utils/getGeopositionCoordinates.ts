export function getGeopositionCoordinates() {
  return new Promise(function (resolve, reject) {
    let coordinates = {
      latitude: "",
      longitude: "",
      error: {
        isError: false,
        message: "",
      },
    };
    function success(position: any) {
      coordinates.latitude = position.coords.latitude;
      coordinates.longitude = position.coords.longitude;
      resolve(coordinates);
    }

    function fail(error: any) {
      coordinates.error.isError = true;
      coordinates.error.message = error.message;
      reject(coordinates);
    }
    navigator.geolocation.getCurrentPosition(success, fail);
  });
}
