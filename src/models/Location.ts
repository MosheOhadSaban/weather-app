export default interface ILocation {
  Key: string |null;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
}
