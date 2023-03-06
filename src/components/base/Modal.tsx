import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useRef } from "react";
import { createPortal } from "react-dom";

type ModalProp = {
  onClose: () => any;
  show?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
  portalId?: string;
};

export const Modal: React.FC<ModalProp> = ({
  show,
  onClose,
  children,
  portalId = "modal",
}) => {
  const inputRef = useRef<HTMLDivElement>(null);
  const elem = document.getElementById(portalId);
  const clickOutside = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent) => {
      e.stopPropagation();
      if (!inputRef.current?.contains(e.target as Node)) onClose();
    },
    [onClose]
  );

  return elem && show
    ? createPortal(
        <div
          className="fixed top-0 left-0 right-0 z-50 flex h-full w-full flex-col-reverse overflow-y-auto overflow-x-hidden bg-gray-700 bg-opacity-50"
          onClick={clickOutside}
        >
          <div ref={inputRef} className="h-5/6 divide-y rounded-t-2xl bg-white">
            <div className="flex flex-row items-center justify-between px-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                <FontAwesomeIcon
                  onClick={onClose}
                  className=" text-slate-700"
                  size="lg"
                  icon={faXmark}
                />
              </div>
              <p className="items-center justify-center font-poppinsBold text-base">
                Add starting point
              </p>
              <div className="h-10 w-10"></div>
            </div>
            <div className=" p-4">{children}</div>
          </div>
        </div>,
        elem
      )
    : null;
};
