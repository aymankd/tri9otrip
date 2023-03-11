import { useCallback, useReducer, useState, memo } from "react";
import { Location } from "../icons/Location";
import { NextStepInfo, TransportTypes } from "../../types/trip.type";
import { Modal } from "../base/Modal";
import { Input } from "../base/Input";
import { InputImage } from "../base/InputImage";
import { CheckBox } from "../base/CheckBox";
import Tent from "../icons/Tent";
import { Button } from "../base/Button";
import { useDispatch } from "react-redux";
import {
  addTripStepAction,
  updateTripStepBudgetAction,
} from "../../redux/actions";
import Car from "../icons/Car";
import WalkingMan from "../icons/WalkingMan";
import AirPlane from "../icons/Airplane";
import BikingMan from "../icons/BikingMan";
import Bus from "../icons/Bus";
import Train from "../icons/Train";

const initTripState: NextStepInfo = {
  budget: 0,
  transport: {},
};

type AddStepBudgetModalProps = {
  show: boolean;
  onClose: () => void;
  index: number;
};

enum UPDATE_TRIP_ACTIONS {
  SET_BUDGET = "SET_BUDGET",
  SELECT_TRANSPORT = "SELECT_TRANSPORT",
  UNSELECT_TRANSPORT = "UNSELECT_TRANSPORT",
}

interface UpdateNextStepBudget {
  id: UPDATE_TRIP_ACTIONS.SET_BUDGET;
  budget: number;
}

interface UpdateNextStepTransport {
  id: UPDATE_TRIP_ACTIONS.SELECT_TRANSPORT;
  // | UPDATE_TRIP_ACTIONS.UNSELECT_TRANSPORT;
  transport: keyof TransportTypes;
}

const tronsports: Required<{
  [P in keyof TransportTypes]: { element: JSX.Element; text: string };
}> = {
  car: { element: <Car />, text: "Car" },
  airplane: { element: <AirPlane />, text: "Airplane" },
  bike: { element: <BikingMan />, text: "Biking" },
  bus: { element: <Bus />, text: "Bus" },
  train: { element: <Train />, text: "Train" },
  walk: { element: <WalkingMan />, text: "Walking" },
};

const tronsportsMap = Object.entries(tronsports) as [
  keyof TransportTypes,
  { element: JSX.Element; text: string }
][];

export const AddStepBudgetModal = ({
  show,
  onClose,
  index,
}: AddStepBudgetModalProps) => {
  /* ---------------------------------- Other --------------------------------- */
  const dispatch = useDispatch();
  /* -------------------------------- Reducers -------------------------------- */
  const [nextStepInfo, setNextStepInfo] = useReducer(function (
    state: NextStepInfo,
    action: UpdateNextStepBudget | UpdateNextStepTransport
  ) {
    console.log("state: ", state);

    switch (action.id) {
      case UPDATE_TRIP_ACTIONS.SET_BUDGET:
        return {
          ...state,
          budget: action.budget,
        };
      case UPDATE_TRIP_ACTIONS.SELECT_TRANSPORT: {
        const newTransport = state.transport;
        newTransport[action.transport] = newTransport[action.transport]
          ? undefined
          : true;

        return {
          ...state,
          transport: { ...newTransport },
        };
      }
      default:
        return state;
    }
  },
  initTripState);
  /* -------------------------------- Callbacks ------------------------------- */
  const SaveHandler = () => {
    console.log("nextStepInfo: ", nextStepInfo);
    dispatch(updateTripStepBudgetAction({ nextStepInfo, index }));
    onClose();
  };
  return (
    <Modal
      show={show}
      onClose={onClose}
      header={`Add transport & budget infos ${index}`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <div className="py-2 px-1 font-poppinsMedium">
            how mush did you spend ?
          </div>
          <Input
            className="w-full"
            placeholder="Budget"
            id="emoji"
            type="number"
            value={nextStepInfo.budget}
            onChange={(e) =>
              setNextStepInfo({
                id: UPDATE_TRIP_ACTIONS.SET_BUDGET,
                budget: +e.target.value,
              })
            }
          />
        </div>
        <div>
          <div className="py-2 px-1 font-poppinsMedium">
            how mush did you spend ?
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            {tronsportsMap.map(([key, value]) => {
              return (
                <CheckBox
                  key={key}
                  id={key}
                  className="w-[47%]"
                  icon={value.element}
                  inputText={value.text}
                  defaultChecked={nextStepInfo.transport[key]}
                  inputClick={() => {
                    setNextStepInfo({
                      id: UPDATE_TRIP_ACTIONS.SELECT_TRANSPORT,
                      transport: key,
                    });
                  }}
                />
              );
            })}
          </div>
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
