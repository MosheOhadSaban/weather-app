import ILocation from "./../models/Location";

export const addFavoriteLocationToStorage = (location: ILocation): void => {
  if (location.Key) {
    localStorage.setItem(location.Key, JSON.stringify(location));
  }
};

export const geSotrageFavoriteLocationItem = (key: string): any => {
  let location = localStorage.getItem(key);
  if (location) {
    JSON.parse(location);
  }

  return location;
};

export const removeSotrageFavoriteLocationItem = (key: string | null): void => {
  if (key) {
    localStorage.removeItem(key);
  }
};

export const getLocalStorageFavoriteLocationsList = (): ILocation[] => {
  let locationsList: ILocation[] = [];
  Object.keys(localStorage).forEach((key) => {
    let location: any = localStorage.getItem(key);
    location = JSON.parse(location);
    locationsList.push(location);
  });

  return locationsList;
};
