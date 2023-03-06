import { createAction } from "redux-actions";
import { TRIP_ACTIONS } from "../../constants";
import { TripDto, TripStep } from "../../types/trip.type";

export const updateTripAction = createAction<Partial<TripDto>>(
  TRIP_ACTIONS.UPDATE_TRIP
);

export const addTripStepAction = createAction<TripStep>(
  TRIP_ACTIONS.ADD_TRIP_STEP
);
