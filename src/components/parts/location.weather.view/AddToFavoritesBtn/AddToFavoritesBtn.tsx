import React from "react";
import { Button } from "react-bootstrap";
import { BsHeart } from "react-icons/bs";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import ILocation from "../../../../models/Location";
import { setFavoriteLocationOn } from "../../../../redux/actionsCreators/booleansActionsCreators";
import { addFavoriteLocationToStorage } from "../../../../utils/favoritesUtils";
import { useDispatch } from 'react-redux';

function AddToFavoritesBtn() {
  const dispatch = useDispatch()
  const currentLocation: ILocation = useTypedSelector(
    (state) => state.currentLocation.data
  );
  return (
    <div>
      <Button
        onClick={() => {
          addFavoriteLocationToStorage(currentLocation);
          dispatch(setFavoriteLocationOn())
        }}
      >
        Add to Favorites <BsHeart />
      </Button>
    </div>
  );
}

export default AddToFavoritesBtn;
