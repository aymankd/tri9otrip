import { useCallback, useReducer, useState, memo } from "react";
import { Location } from "../icons/Location";
import { TripStep } from "../../types/trip.type";
import { Modal } from "../base/Modal";
import { Input } from "../base/Input";
import { InputImage } from "../base/InputImage";
import { CheckBox } from "../base/CheckBox";
import Tent from "../icons/Tent";
import { Button } from "../base/Button";
import { useDispatch } from "react-redux";
import { addTripStepAction } from "../../redux/actions";

const initTripState: TripStep = {
  locationName: "",
  isTent: false,
  pictures: [],
};

type AddStepModalProps = {
  show: boolean;
  onClose: () => void;
};

enum UPDATE_TRIP_ACTIONS {
  UPDATE_TRIP_LOCATION = "ADD_TRIP_LOCATION",
  UPDATE_TRIP_TENT = "UPDATE_TRIP_TENT",
  UPDATE_TRIP_IMAGES = "UPDATE_TRIP_IMAGES",
  CLEAR_DATA = "CLEAR_DATA",
}

interface UpdateTripLocation {
  id: UPDATE_TRIP_ACTIONS.UPDATE_TRIP_LOCATION;
  payload: Pick<TripStep, "locationName">;
}

interface UpdateTripTent {
  id: UPDATE_TRIP_ACTIONS.UPDATE_TRIP_TENT;
  payload: Pick<TripStep, "isTent">;
}

interface UpdateTripImages {
  id: UPDATE_TRIP_ACTIONS.UPDATE_TRIP_IMAGES;
  payload: { file: File; index: 0 | 1 | 2 };
}

interface ClearAddTripDate {
  id: UPDATE_TRIP_ACTIONS.CLEAR_DATA;
}

export const AddStepModal = ({ show, onClose }: AddStepModalProps) => {
  /* ---------------------------------- Other --------------------------------- */
  const dispatch = useDispatch();
  /* -------------------------------- Reducers -------------------------------- */
  const [trip, setTrip] = useReducer(function (
    state: TripStep,
    action:
      | UpdateTripLocation
      | UpdateTripTent
      | UpdateTripImages
      | ClearAddTripDate
  ) {
    switch (action.id) {
      case UPDATE_TRIP_ACTIONS.UPDATE_TRIP_LOCATION:
      case UPDATE_TRIP_ACTIONS.UPDATE_TRIP_TENT:
        return {
          ...state,
          ...action.payload,
        };
      case UPDATE_TRIP_ACTIONS.UPDATE_TRIP_IMAGES: {
        console.log("update Images");
        const pictures = state.pictures;
        pictures[action.payload.index] = URL.createObjectURL(
          action.payload.file
        );
        return {
          ...state,
          pictures,
        };
      }
      case UPDATE_TRIP_ACTIONS.CLEAR_DATA:
        onClose();
        return { ...initTripState, pictures: [] };
      default:
        return state;
    }
  },
  initTripState);
  /* -------------------------------- Callbacks ------------------------------- */
  const SaveHandler = () => {
    dispatch(addTripStepAction(trip));
    setTrip({
      id: UPDATE_TRIP_ACTIONS.CLEAR_DATA,
    });
    // onClose();
  };

  console.log("trip:", trip);

  return (
    <Modal show={show} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <Input
          className="w-full"
          placeholder="Location"
          id="emoji"
          value={trip.locationName}
          onChange={(e) =>
            setTrip({
              id: UPDATE_TRIP_ACTIONS.UPDATE_TRIP_LOCATION,
              payload: { locationName: e.target.value },
            })
          }
        />
        <CheckBox
          icon={<Tent />}
          checked={trip.isTent}
          onChange={(e) => {
            setTrip({
              id: UPDATE_TRIP_ACTIONS.UPDATE_TRIP_TENT,
              payload: { isTent: e.target.checked },
            });
          }}
        />
        <div className="mb-5 flex flex-row justify-between gap-2">
          <InputImage
            selectedImage={trip?.pictures ? trip?.pictures[0] : undefined}
            setSelectedImage={(file: File) =>
              setTrip({
                id: UPDATE_TRIP_ACTIONS.UPDATE_TRIP_IMAGES,
                payload: {
                  file: file,
                  index: 0,
                },
              })
            }
          />
          <InputImage
            selectedImage={trip?.pictures ? trip?.pictures[1] : undefined}
            setSelectedImage={(file: File) =>
              setTrip({
                id: UPDATE_TRIP_ACTIONS.UPDATE_TRIP_IMAGES,
                payload: {
                  file: file,
                  index: 1,
                },
              })
            }
          />
          <InputImage
            selectedImage={trip?.pictures ? trip?.pictures[2] : undefined}
            setSelectedImage={(file: File) =>
              setTrip({
                id: UPDATE_TRIP_ACTIONS.UPDATE_TRIP_IMAGES,
                payload: {
                  file: file,
                  index: 2,
                },
              })
            }
          />
        </div>
        <Button
          className="flex h-10 w-full items-center justify-center rounded-lg bg-brand-100 text-white hover:bg-brand-300 hover:shadow-inner"
          onClick={SaveHandler}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};
