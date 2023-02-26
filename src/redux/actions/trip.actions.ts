import { createAction } from "redux-actions";
import { TRIP_ACTIONS } from "../../constants";
import { TripDto } from "../../types/trip.type";

export const updateTripAction = createAction<Partial<TripDto>>(
  TRIP_ACTIONS.UPDATE_TRIP
);
