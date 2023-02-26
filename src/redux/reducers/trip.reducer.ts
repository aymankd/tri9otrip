import { AnyAction } from "redux";
import { TRIP_ACTIONS } from "../../constants";
import { TripDto } from "../../types/trip.type";

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
  action: AnyAction
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
    default:
      return state;
  }
}
