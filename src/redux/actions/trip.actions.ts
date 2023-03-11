import { createAction } from "redux-actions";
import { TRIP_ACTIONS } from "../../constants";
import { NextStepInfo, TripDto, TripStep } from "../../types/trip.type";

export const updateTripAction = createAction<Partial<TripDto>>(
  TRIP_ACTIONS.UPDATE_TRIP
);

export type updateTripActionType = {
  type: TRIP_ACTIONS.UPDATE_TRIP;
  payload: Partial<TripDto>;
};

export const addTripStepAction = createAction<TripStep>(
  TRIP_ACTIONS.ADD_TRIP_STEP
);

export type addTripStepActionType = {
  type: TRIP_ACTIONS.ADD_TRIP_STEP;
  payload: TripStep;
};

export const updateTripStepBudgetAction = createAction<{
  nextStepInfo: NextStepInfo;
  index: number;
}>(TRIP_ACTIONS.UPDATE_TRIP_STEP_BUDGET);

export type updateTripStepBudgetActionType = {
  type: TRIP_ACTIONS.UPDATE_TRIP_STEP_BUDGET;
  payload: {
    nextStepInfo: NextStepInfo;
    index: number;
  };
};
