import React from "react";
import { Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import ILocation from "../../../../models/Location";
import { setFavoriteLocationOff } from "../../../../redux/actionsCreators/booleansActionsCreators";
import { removeSotrageFavoriteLocationItem } from "../../../../utils/favoritesUtils";

function RemoveFromFavoritesBtn() {
  const dispatch = useDispatch();
  const currentLocation: ILocation = useTypedSelector(
    (state) => state.currentLocation.data
  );
  return (
    <div>
      <Button
        variant="light"
        onClick={() => {
          removeSotrageFavoriteLocationItem(currentLocation.Key);
          dispatch(setFavoriteLocationOff());
        }}
      >
        Remove from Favorites <BsTrash />
      </Button>
    </div>
  );
}

export default RemoveFromFavoritesBtn;
