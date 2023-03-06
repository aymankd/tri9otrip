import { useCallback, useReducer, useState } from "react";
import { Location } from "../icons/Location";
import { TripStep } from "../../types/trip.type";
import { Modal } from "../base/Modal";
import { Input } from "../base/Input";
import { InputImage } from "../base/InputImage";
import { CheckBox } from "../base/CheckBox";
import Tent from "../icons/Tent";
import { Button } from "../base/Button";
import { useDispatch } from "react-redux";

const initTripState: TripStep = {
  locationName: "",
  isTent: false,
  pictures: [],
};

export const NextStep = ({ num }: { num: number }) => {
  /* ---------------------------------- Other --------------------------------- */
  const dispatch = useDispatch();
  /* --------------------------------- States --------------------------------- */
  const [show, setShow] = useState(false);
  /* -------------------------------- Reducers -------------------------------- */
  const [trip, setTrip] = useReducer(
    (state: TripStep, newState: Partial<TripStep>) => {
      console.log("State: ", {
        ...state,
        ...newState,
      });

      return {
        ...state,
        ...newState,
      };
    },
    initTripState
  );
  /* -------------------------------- Callbacks ------------------------------- */
  const onCloseModalHandler = useCallback(() => {
    setShow(false);
  }, [setShow]);
  const SaveHandler = () => {
    console.log("trip in: ", trip);

    // dispatch(addTripStepAction(trip));
    // setTrip(initTripState);
    // onCloseModalHandler();
    // setShow(false);
  };

  console.log("trip out: ", trip);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setShow(true);
      }}
      type="button"
      className="flex flex-row items-center justify-center gap-2 rounded-2xl border border-dotted border-brand-100 p-5 font-poppinsMedium text-brand-100 shadow-xl"
    >
      <Location num={num} /> Add next point
      <Modal show={show} onClose={onCloseModalHandler}>
        <div className="flex flex-col gap-4">
          <Input
            className="w-full"
            placeholder="Location"
            id="emoji"
            value={trip.locationName}
            onChange={(e) =>
              setTrip({
                locationName: e.target.value,
              })
            }
          />
          <CheckBox
            icon={<Tent />}
            checked={trip.isTent}
            onChange={(e) => {
              console.log("change:", e.target.checked);

              setTrip({
                isTent: e.target.checked,
              });
            }}
          />
          <div className="mb-5 flex flex-row justify-between gap-2">
            <InputImage
              selectedImage={trip?.pictures ? trip?.pictures[0] : undefined}
              setSelectedImage={(file: File) =>
                setTrip({
                  pictures: [file, trip.pictures[1], trip.pictures[2]],
                })
              }
            />
            <InputImage
              selectedImage={trip?.pictures ? trip?.pictures[1] : undefined}
              setSelectedImage={(file: File) =>
                setTrip({
                  pictures: [trip.pictures[0], file, trip.pictures[2]],
                })
              }
            />
            <InputImage
              selectedImage={trip?.pictures ? trip?.pictures[2] : undefined}
              setSelectedImage={(file: File) =>
                setTrip({
                  pictures: [trip.pictures[0], trip.pictures[1], file],
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
    </button>
  );
};
