import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/base/Button";
import { BetweenSteps, NextStep, Step } from "../components/step";
import { tripsSelector } from "../redux/selectors/trip.selector";

export function AddSteps() {
  /* --------------------------------- States --------------------------------- */
  const tripState = useSelector(tripsSelector);
  /* --------------------------------- Others --------------------------------- */
  const nav = useNavigate();
  /* -------------------------------- Callbacks ------------------------------- */
  const goBack = useCallback(() => nav(-1), [nav]);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between px-4 py-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
          <FontAwesomeIcon
            onClick={goBack}
            className=" text-slate-700"
            size="lg"
            icon={faArrowLeft}
          />
        </div>
        <Button className="flex h-10 w-1/4 items-center justify-center rounded-lg bg-gray-400 py-3 text-white hover:bg-brand-200 hover:shadow-inner">
          Share
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 px-4 py-2">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-green-100 text-5xl">
          {tripState.trip.emoji}
        </div>
        <div className="font-poppinsBold text-xl text-main-text ">
          {tripState.trip.name.toUpperCase()}
        </div>
        <div className="px-7 text-center font-poppins text-xs text-main-text ">
          {tripState.trip.description}
        </div>
      </div>
      <div className="flex flex-col px-4 py-2">
        <div className="font-poppinsBold text-lg">Amazing!</div>
        <p className="w-3/5 font-poppinsBold text-base">
          let’s add the places you visited in
          <span className="text-brand-100 ">
            {" "}
            {tripState.trip.name.toUpperCase()}
          </span>
        </p>
      </div>
      <div className="flex flex-col px-4 py-2">
        {tripState.trip.steps.map((tripStep, index) => (
          <div key={`step-${index + 1}`}>
            <Step num={index + 1} tripStep={tripStep} />
            <BetweenSteps />
          </div>
        ))}
        <NextStep num={tripState.trip.steps.length + 1} />
      </div>
    </div>
  );
}
