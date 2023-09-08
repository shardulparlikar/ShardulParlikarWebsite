import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import config from "../../../../public/data.json";

const AboutPage = () => {
  return (
    <>
      <div className="w-screen bg-light-blue">
        <div className="xl:flex justify-around items-center">
          <h2 className="text text-6xl font-monster uppercase mt-12 xl:hidden block text-center">
            About
          </h2>
          <div className="xl:h-[40rem] xl:max-w-[30rem] rounded-full h-48 max-w-[12rem] mx-auto xl:mx-0  my-4">
            <Image
              height={800}
              width={700}
              src="/sdp.png"
              alt="shardul"
              className="h-full xl:rounded-none rounded-full"
              objectFit="contain"
            />
          </div>
          <div className="max-w-[40rem] xl:text-end px-6 xl:p-0">
            <h2 className="text text-6xl font-monster uppercase mt-12 hidden xl:block">
              About
            </h2>

            <div className="mt-12">
              <div className="">
                <span className="xl:text-2xl text-lg  text-neutral-600">
                  Skills
                </span>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-neutral-600 h-5 ml-2"
                />
                <div className="flex mt-4 xl:justify-end flex-wrap max-w-3xl">
                  {config.skills.map((skill, index) => (
                    <p
                      className="xl:text-xl text-base font-monster font-medium"
                      key={index}
                    >
                      {skill.skillName} ,
                    </p>
                  ))}
                </div>
              </div>

              <div className=" mt-8">
                <span className="xl:text-2xl text-lg  text-neutral-600 ">
                  Education
                </span>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-neutral-600 h-5 ml-2"
                />
                <div className="xl:text-xl text-base font-monster font-medium mt-4">
                  {config.degree}
                </div>
                <div className="xl:text-xl text-base  font-monster font-medium mt-2">
                  {config.college}
                </div>
                <div className="xl:text-xl text-base font-monster font-medium">
                  {config.degreeYear}
                </div>
              </div>

              <div className=" mt-4">
                <span className="xl:text-2xl text-lg  text-neutral-600">
                  Phone No
                </span>
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="text-neutral-600 h-5 ml-2"
                />
                <div className="flex xl:justify-end">
                  <div className="xl:text-xl text-base font-monster font-medium mt-4">
                    {config.phoneNoExt}-
                  </div>
                  <div className="xl:text-xl text-base font-monster font-medium mt-4">
                    {config.phoneNo}
                  </div>
                </div>
              </div>

              <a
                className=" mt-8 cursor-pointer flex xl:justify-end gap-2 xl:text-2xl text-lg  font-monster"
                href="/ShardulParlikar.pdf"
                download="Shardul Parlikar"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-neutral-600 h-8"
                />
                Download Full Resume
              </a>

              <div className="mt-4 ">
                <div className="flex xl:justify-end  items-center gap-2">
                  <p className="xl:text-2xl text-lg  text-neutral-600 ">
                    Follow Me
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="text-neutral-600 h-5 ml-2"
                  />
                </div>
                <div className="flex xl:justify-end mt-4 ">
                  <a
                    className="flex items-center justify-center ml-4 cursor-pointer w-8 h-8 rounded-full border-2 border-black"
                    href={config.linkedLink}
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin-in text-xl"></i>
                  </a>

                  <a
                    className="flex items-center justify-center ml-4 cursor-pointer w-8 h-8 rounded-full border-2 border-black"
                    href={config.gitHubLink}
                    target="_blank"
                  >
                    <i className="fa-brands fa-github text-xl"></i>
                  </a>

                  <a
                    className="flex items-center justify-center ml-4 cursor-pointer w-8 h-8 rounded-full border-2 border-black"
                    href={`mailto:${config.email}`}
                    target=""
                  >
                    <i className="fa-regular fa-envelope text-xl"></i>
                  </a>
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
