import React, { useState } from "react";
import Image from "next/image";
import config from "../../../../public/data.json";
import "./exprincePage.css";
import PopupBox from "./PopupBox";

const ExpriancePage = () => {
  const imageMap = {
    1: "/111coding.png",
    2: "/118macbook.png",
    3: "/day42mac.png",
    4: "/workstation.png",
    5: "/day42mac.png",
    8: "/111coding.png",
    7: "/118macbook.png",
    9: "/day42mac.png",
    6: "/workstation.png",
    10: "/118macbook.png",
    18: "/111coding.png",
    17: "/118macbook.png",
    16: "/day42mac.png",
    15: "/workstation.png",
    14: "/day42mac.png",
    13: "/111coding.png",
    12: "/118macbook.png",
    11: "/day42mac.png",
    19: "/workstation.png",
    20: "/118macbook.png",
  };

  const [openPopupIndex, setOpenPopupIndex] = useState(false);
  const [exp, setExp] = useState({});

  function openPopup(exp, image) {
    document.body.classList.add("overflow-hidden");
    setOpenPopupIndex(true);
    setExp({ ...exp, image: image });
  }

  const closePopup = () => {
    setOpenPopupIndex(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <div className="h-auto w-auto pb-60 bg-white-bg flex flex-col items-center gap-20">
        <h1 className="pt-20 text-4xl tracking-wide text-center capitalize font-monster">
          experience and Portfolio
        </h1>

        <div className="flex xl:flex-row flex-col flex-wrap gap-12 text-center items-center max-w-[62rem]">
          {config.expriance.map((exp, index) => (
            <div
              key={index}
              className="bg-light-blue h-auto shadow-lg flex flex-col w-[18rem] rel "
            >
              <div
                id="card"
                onClick={() => openPopup(exp, exp.freelancing ? "/freelancing.png" : imageMap[index + 1])}
              >
                <Image
                  src={
                    exp.freelancing ? "/freelancing.png" : imageMap[index + 1]
                  }
                  className="cursor-pointer"
                  alt="company logo"
                  height={500}
                  width={300}
                />
              </div>

              <div>
                <h1 className="text-lg tracking-wide text-center capitalize font-monster h-16 pt-4">
                  {exp.companyName}
                </h1>
              </div>
              <div>
                <h1 className="text-sm  tracking-wide text-center capitalize font-monster">
                  {exp.position}
                </h1>
              </div>
              <h1 className="text-sm mt-2 font-bold tracking-wide text-center capitalize font-monster pb-4">
                {exp.fromDate} - {exp.toDate}
              </h1>
            </div>
          ))}
        </div>

        <PopupBox
          isOpen={openPopupIndex}
          onClose={closePopup}
          customProp={exp}
        ></PopupBox>
      </div>
    </>
  );
};

export default ExpriancePage;
