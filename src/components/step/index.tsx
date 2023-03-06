import { AiOutlinePlusCircle } from "react-icons/ai";
import { Location } from "../icons/Location";
import { TripStep } from "../../types/trip.type";
import { NextStep } from "./NextStep";

const BetweenSteps = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-6 w-0 border border-dashed border-brand-100"></div>
      <div className="flex flex-row items-center justify-center gap-1 rounded-full bg-brand-100 bg-opacity-30 px-2 py-1 text-xs text-brand-100">
        <AiOutlinePlusCircle size={15} />
        Add transport & budget infos
      </div>
      <div className="h-6 w-0 border border-dashed border-brand-100"></div>
    </div>
  );
};

const Step = ({ num, tripStep }: { num: number; tripStep: TripStep }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-2 rounded-2xl border border-brand-100 p-5 font-poppinsMedium text-brand-100 shadow-md">
      <div className="h-10 w-10 rounded-md bg-brand-300">
        {tripStep.pictures[0] && (
          <img
            src={URL.createObjectURL(tripStep.pictures[0])}
            className="h-40 w-24 rounded-3xl object-cover"
            alt="stepImage"
          />
        )}{" "}
      </div>
      <Location num={num} /> {tripStep.locationName || "not loaded yet"}
    </div>
  );
};

export { BetweenSteps, Step, NextStep };
