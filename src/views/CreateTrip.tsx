import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/base/Button";
import { Input } from "../components/base/Input";
import { Textarea } from "../components/base/TextArea";
import { ROUTES } from "../constants";
import { updateTripAction } from "../redux/actions";
import { tripsSelector } from "../redux/selectors/trip.selector";

export function CreateTrip() {
  const dispatch = useDispatch();
  const tripState = useSelector(tripsSelector);
  const nav = useNavigate();
  const goBack = useCallback(() => nav(-1), [nav]);
  const emojiOnChange = useCallback<
    React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  >(
    (event) => {
      const isNotEmoji = event.currentTarget.value.match(/\p{Emoji}/gu);
      if (isNotEmoji || event.currentTarget.value === "")
        dispatch(
          updateTripAction({
            [event.currentTarget.id]: event.currentTarget.value,
          })
        );
    },
    [dispatch]
  );

  const inputOnChange = useCallback<
    React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  >(
    (event) => {
      dispatch(
        updateTripAction({
          [event.currentTarget.id]: event.currentTarget.value,
        })
      );
    },
    [dispatch]
  );
  return (
    <div className="flex flex-col">
      <div className="px-4 py-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
          <FontAwesomeIcon
            onClick={goBack}
            className=" text-slate-700"
            size="lg"
            icon={faArrowLeft}
          />
        </div>
      </div>
      <div className="px-4">
        <h2 className="w-full text-left font-poppinsBold text-lg text-main-text">
          Let’s share your <br></br> amazing trip with people
        </h2>
        <div className="flex w-full flex-col gap-2 py-4 ">
          <Input
            className="w-full"
            placeholder="Give your trip a name"
            id="name"
            value={tripState.trip.name}
            onChange={inputOnChange}
          />
          <Input
            className="w-full"
            placeholder="Describe the trip mood with an emoji"
            id="emoji"
            value={tripState.trip.emoji}
            onChange={emojiOnChange}
            maxLength={2}
          />
          <Textarea
            className="w-full"
            placeholder="Add a trip description"
            id="description"
            rows={3}
            value={tripState.trip.description}
            onChange={inputOnChange}
          />
        </div>
        <NavLink to={ROUTES.STEPS} className="h-14 w-10/12">
          <Button className="h-full w-full rounded-lg bg-brand-300 py-3 text-white hover:bg-brand-200 hover:shadow-inner">
            Next
          </Button>
        </NavLink>
      </div>
    </div>
  );
}
