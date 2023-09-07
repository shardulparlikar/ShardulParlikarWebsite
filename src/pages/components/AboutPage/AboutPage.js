import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import config from "../../../../public/data.json";

const AboutPage = () => {
  const downloadCv = () => {
    // Perform the download logic here
    const link = document.createElement("a");

    link.href = "/ShardulParlikar.pdf";
    link.download = "Shardul Parlikar";
    link.click();
  };

  function myhref(web) {
    if (typeof window !== "undefined") {
      // Client-side-only code
      window.open(web);
    }
  }
  return (
    <>
      <div className="h-auto w-screen bg-gray-bg">
        <div className="flex justify-around">
          <Image
            height={500}
            width={700}
            src="/shardulModified.png"
            alt="shardul"
            className="h-screen"
          />
          <div className="min-w-[40rem]">
            <h2 className="text text-6xl font-monster uppercase mt-20 text-end">
              About
            </h2>

            <div className="mt-16">
              <div className="text-end">
                <span className="text-3xl text-neutral-600 text-end">
                  Skills
                </span>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-neutral-600 h-5 ml-2"
                />
                <div className="flex mt-4 justify-end flex-wrap max-w-3xl">
                  {config.skills.map((skill, index) => (
                    <div
                      className="text-2xl font-monster font-medium"
                      key={index}
                    >
                      {skill.skillName} ,
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-end mt-12">
                <span className="text-3xl text-neutral-600 text-end">
                  Education
                </span>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-neutral-600 h-5 ml-2"
                />
                <div className="text-2xl font-monster font-medium mt-4">
                  {config.degree}
                </div>
                <div className="text-2xl font-monster font-medium">
                  {config.college}
                </div>
                <div className="text-xl font-monster font-medium">
                  {config.degreeYear}
                </div>
              </div>

              <div className="text-end mt-12">
                <span className="text-3xl text-neutral-600 text-end">
                  Phone No
                </span>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-neutral-600 h-5 ml-2"
                />
                <div className="flex justify-end">
                  <div className="text-2xl font-monster font-medium mt-4">
                    {config.phoneNoExt}-
                  </div>
                  <div className="text-2xl font-monster font-medium mt-4">
                    {config.phoneNo}
                  </div>
                </div>
              </div>

              <div
                className="text-end mt-12 cursor-pointer"
                onClick={downloadCv}
              >
                <div className="flex justify-end items-center">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-neutral-600 h-8"
                  />
                  <span className="text-4xl ml-4 text-neutral-600 text-end">
                    Download Full Resume
                  </span>
                </div>
              </div>

              <div className="mt-20 text-end ">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-neutral-600 h-5 ml-2"
                />
                <span className="text-3xl text-neutral-600 text-end">
                  Follow Me
                </span>
                <div className="flex justify-end mt-8">
                  <div
                    className="flex items-center ml-4 cursor-pointer  relative group"
                    onClick={() => myhref(config.linkedLink)}
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-black flex justify-center items-center ">
                      <div className="fa-brands fa-linkedin-in bg-blend-color-dodge"></div>
                    </div>
                    <span className="group-hover:opacity-100 opacity- text-lg py-4 px-4 absolute left-1/2 top-3 transform -translate-x-1/2 transition-opacity">
                      LinkedIn
                    </span>
                  </div>
                  <div
                    className="flex items-center ml-24 cursor-pointer  relative group"
                    onClick={() => myhref(config.gitHubLink)}
                  >
                    <div className="w-8 h-8 rounded-full border-2 border-black flex justify-center items-center ">
                      <div className="fa-brands fa-github bg-blend-color-dodge"></div>
                    </div>
                    <span className="group-hover:opacity-100 opacity- text-lg py-4 px-4 absolute left-1/2 top-3 transform -translate-x-1/2 transition-opacity">
                      GitHub
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
