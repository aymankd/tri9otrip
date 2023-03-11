import { AnyAction } from "redux";
import { TRIP_ACTIONS } from "../../constants";
import { TripDto } from "../../types/trip.type";
import {
  addTripStepActionType,
  updateTripActionType,
  updateTripStepBudgetActionType,
} from "../actions";

export type TripsState = {
  trip: TripDto;
  allTrips: TripDto[];
  failure: boolean;
  isLoading: boolean;
  error?: string;
  isCreate: boolean;
};

const initialTripstate: TripDto = {
  name: "",
  emoji: "",
  description: "",
  steps: [],
};

const initialState: TripsState = {
  trip: initialTripstate,
  allTrips: [],
  isLoading: false,
  failure: false,
  error: undefined,
  isCreate: false,
};

export function tripReducer(
  // eslint-disable-next-line default-param-last
  state = initialState,
  action:
    | updateTripActionType
    | addTripStepActionType
    | updateTripStepBudgetActionType
): TripsState {
  switch (action.type) {
    case TRIP_ACTIONS.UPDATE_TRIP:
      return {
        ...state,
        trip: {
          ...state.trip,
          ...action.payload,
        },
      };
    case TRIP_ACTIONS.ADD_TRIP_STEP:
      return {
        ...state,
        trip: {
          ...state.trip,
          steps: state.trip.steps.concat(action.payload),
        },
      };
    case TRIP_ACTIONS.UPDATE_TRIP_STEP_BUDGET:
      return {
        ...state,
        trip: {
          ...state.trip,
          steps: state.trip.steps.map((step, index) =>
            index === action.payload.index
              ? { ...step, nextStepInfo: action.payload.nextStepInfo }
              : step
          ),
        },
      };
    default:
      return state;
  }
}
