import React from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import ILocation from "../../../../models/Location";
import SearchResultCard from "../SearchResultCard/SearchResultCard";
import "./SearchResults.css";

function SearchResults() {
  const locations: ILocation[] = useTypedSelector(
    (state) => state.location.data
  );

  return (
    <div className="SearchResults">
      {locations.map((location, index) => (
        <SearchResultCard
          key={index}
          LocalizedName={location.LocalizedName}
          Country={{
            ID: location.Country.ID,
            LocalizedName: location.Country.LocalizedName,
          }}
          Key={location.Key}
        />
      ))}
    </div>
  );
}

export default SearchResults;
