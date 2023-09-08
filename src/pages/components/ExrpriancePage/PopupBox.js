import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { faXmark, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const PopupBox = ({ isOpen, onClose, customProp }) => {
  if (!isOpen) {
    return;
  }
  return (
    <div className="fixed h-full w-full top-0 left-0 z-[99]  bg-black/50">
      <div className="max-w-10xl h-screen mx-auto left-0 right-0 absolute z-[999] p-10 ">
        <div className="bg-light-blue h-full overflow-y-auto px-6 py-10  relative">
          <FontAwesomeIcon
            icon={faXmark}
            className="dark xl:h-16 h-8 absolute right-2 top-0"
            onClick={onClose}
          />

          <h1 className="text-center font-heebo xl:text-4xl text-2xl font-bold uppercase tracking-normal">
            {customProp.companyName}
          </h1>

          <div className="max-w-4xl mx-auto xl:mt-16 mt-8">
            <Image
              src={customProp.image}
              alt="123"
              height={200}
              width={200}
              className="h-[40rem] w-[60rem]"
              objectFit="contain"
            />

            <h2 className="xl:text-3xl text-xl mt-12 font-monster">Overview</h2>

            <ul
              className="mt-8 ml-6 xl:text-xl text-base font-monster"
            >
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faAngleRight} className="dark h-5" />
                <h2 className="">{customProp.position}</h2>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faAngleRight} className="dark h-5" />
                <h2 className="">{customProp.fieldOfWork}</h2>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faAngleRight} className="dark h-5" />
                <h2 className="">{customProp.industry}</h2>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="dark h-5"
                  onClick={onClose}
                />
                <h2 className="">{customProp.fromDate}</h2>
                <h2 className="">to</h2>
                <h2 className="">{customProp.toDate}</h2>
              </div>
            </ul>

            <div className="mt-16 xl:min-w-[60rem]">
              <h2 className="xl:text-3xl text-xl  mt-12 font-monster">
                About Project
              </h2>

              <ul className="mt-6 list-disc">
                {customProp.description.map((liPoint, index) => (
                  <li
                    className=" mt-2 xl:text-xl text-base  font-monster ml-8"
                    key={index}
                  >
                    {liPoint}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <button
                onClick={onClose}
                className="py-3 px-12 mx-auto mt-16 bg-slate-500 rounded-xl text-lg font-medium text-white"
              >
                <FontAwesomeIcon icon={faXmark} className="white h-6 mr-4" />
                Close Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupBox;
