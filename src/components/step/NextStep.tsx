import { useCallback, useEffect, useReducer, useState } from "react";
import { Location } from "../icons/Location";
import { TripStep } from "../../types/trip.type";
import { Modal } from "../base/Modal";
import { Input } from "../base/Input";
import { InputImage } from "../base/InputImage";
import { CheckBox } from "../base/CheckBox";
import Tent from "../icons/Tent";
import { Button } from "../base/Button";
import { useDispatch } from "react-redux";
import { AddStepModal } from "./AddStepModal";

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

  const onCloseModalHandler = () => {
    setShow(false);
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setShow(true);
        }}
        type="button"
        className="flex flex-row items-center justify-center gap-2 rounded-2xl border border-dotted border-brand-100 p-5 font-poppinsMedium text-brand-100 shadow-xl"
      >
        <Location num={num} /> Add next point
        {/* <Modal show={show} onClose={onCloseModalHandler}> */}
      </button>
      {/* <Modal show={show} onClose={onCloseModalHandler}> */}
      <AddStepModal show={show} onClose={onCloseModalHandler} />
      {/* </Modal> */}
    </>
  );
};
