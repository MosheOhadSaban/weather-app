import ICurrentConditions from "./CurrentConditions";
import ILocation from "./Location";

export default interface IFavoritesLocation
  extends ILocation,
    ICurrentConditions {}
