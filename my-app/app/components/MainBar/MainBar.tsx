"use client";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HiMiniBell } from "react-icons/hi2";
import Image from "next/image";
import BloodPressureCard from "../Charts/BloodPresure";
import HeartRateCard from "../Charts/HeartRate";
import Temper from "../Charts/Temp";
import NextAppointment from "../Calendar/Calender";
import Pills from "../Pills/Pills";
import { GrDocumentPdf } from "react-icons/gr";
import { RiDownload2Line } from "react-icons/ri";


type User = {
  name: string;  
  token: string;
};

interface SideBarProps {
  user: User;
}

const MainBar = ({user}:SideBarProps) => {
  return (
    <div>
      <div className="w-full flex mt-6  text-black ">
        {/* Search input with icon */}
        <div className="w-[400px] h-[50px] mr-100  flex justice-end relative mx-2 ">
          <IoSearchSharp className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-xl" />
          <input
            placeholder="Search here..."
            className="w-full h-full pl-12 pr-4 rounded-full border border-green-200 focus:outline-none"
          />
        </div>
        <HiMiniBell className="w-8 h-8 mt-3" />
        {/* Profile placeholder */}
        <div className="ml-6 mt-1 border-l w-[200px] h-10 border-2px flex justify-end items-center space-x-2 pl-2">
          <div>
            <Image
              src="/Images/face.jpg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">Jun 25 2024 06:00 AM</p>
          </div>
        </div>
      </div>
      <div className="w-full h-15 rounded-xl border-1 mx-4 my-3 mt-7 border-green-200 text-green-950">
        <p className="p-4 text-center flex items-center justify-center gap-2">
          <HiMiniBell className="text-xl text-green-700" />
          <span>
            Important Notice: Please adhere to all COVID-19 safety protocols
            while in the hospital...
          </span>
        </p>
      </div>
      {/* Body content goes here */}
      <div className="flex justify-between items-start mt-6 mx-4">
        {/* Cards Section */}
        <div>
          <div className="flex gap-7 flex-wrap">
            <div className="w-[215px] border-1 border-green-200 rounded-xl ">
              <BloodPressureCard />
            </div>
            <div className="w-[215px] border-1 border-green-200 rounded-xl ">
              <HeartRateCard />
            </div>
            <div className="w-[215px] border-1 border-green-200 rounded-xl ">
              <Temper />
            </div>
          </div>

          <div className=" mt-3 h-min-20 w-full gap-3  rounded-xl flex  ">
            <div className="border-2 border-green-200   flex-1/2 rounded-lg p-2">
              <h1 className="text-lg text-green-950 ml-3 mt-3 ">Lab Results</h1>

              <div className="flex items-center mt-2 justify-between px-1 py-1 border border-gray-300 rounded-md">
                <div className="flex items-start gap-3">
                  <GrDocumentPdf className="text-green-950 text-2xl mt-2" />
                  <div className="leading-tight">
                    <p className="text-green-950 ">Lorem Ipsum.pdf</p>
                    <span className="text-green-950 text-sm">
                      June 25, 2024
                    </span>
                  </div>
                </div>
                <RiDownload2Line className="text-green-950 text-2xl cursor-pointer" />
              </div>
              <div className="flex items-center mt-3  justify-between px-1 py-1 border border-gray-300 rounded-md">
                <div className="flex items-start gap-3">
                  <GrDocumentPdf className="text-green-950 text-2xl mt-2" />
                  <div className="leading-tight">
                    <p className="text-green-950 ">Lorem Ipsum.pdf</p>
                    <span className="text-green-950 text-sm">
                      June 25, 2024
                    </span>
                  </div>
                </div>
                <RiDownload2Line className="text-green-950 text-2xl cursor-pointer" />
              </div>
              <div className="flex items-center mt-3  justify-between px-1 py-1 border border-gray-300 rounded-md">
                <div className="flex items-start gap-3">
                  <GrDocumentPdf className="text-green-950 text-2xl mt-2" />
                  <div className="leading-tight">
                    <p className="text-green-950 ">Lorem Ipsum.pdf</p>
                    <span className="text-green-950 text-sm">
                      June 25, 2024
                    </span>
                  </div>
                </div>
                <RiDownload2Line className="text-green-950 text-2xl cursor-pointer" />
              </div>

              <div className="border-t border-green-950 mt-12 mx-4 pt-1 text-xs text-green-500 flex justify-center">
                <p className="cursor-pointer text-center">View All Report</p>
              </div>
            </div>
            <div className="border-2 border-green-200 flex-1/2 border-opacity-40 rounded-lg p-2">
              <h1 className="text-lg text-green-950 ml-3 mt-3">Documents</h1>

              <div className="flex items-center mt-2 justify-between px-1 py-1 border border-gray-300 rounded-md">
                <div className="flex items-start gap-3">
                  <GrDocumentPdf className="text-green-950 text-2xl mt-2" />
                  <div className="leading-tight">
                    <p className="text-green-950 ">Lorem Ipsum.pdf</p>
                    <span className="text-green-950 text-sm">
                      June 25, 2024
                    </span>
                  </div>
                </div>
                <RiDownload2Line className="text-green-950 text-2xl cursor-pointer" />
              </div>

              <div className="flex items-center mt-3 justify-between px-1 py-1 border border-gray-300 rounded-md">
                <div className="flex items-start gap-3">
                  <GrDocumentPdf className="text-green-950 text-2xl mt-2" />
                  <div className="leading-tight">
                    <p className="text-green-950 ">Lorem Ipsum.pdf</p>
                    <span className="text-green-950 text-sm">
                      June 25, 2024
                    </span>
                  </div>
                </div>
                <RiDownload2Line className="text-green-950 text-2xl cursor-pointer" />
              </div>

              <div className="flex items-center mt-3 justify-between px-1 py-1 border border-gray-300 rounded-md">
                <div className="flex items-start gap-3">
                  <GrDocumentPdf className="text-green-950 text-2xl mt-2" />
                  <div className="leading-tight">
                    <p className="text-green-950">Lorem Ipsum.pdf</p>
                    <span className="text-green-950 text-sm">
                      June 25, 2024
                    </span>
                  </div>
                </div>
                <RiDownload2Line className="text-green-950 text-2xl cursor-pointer" />
              </div>

              <div className="border-t border-green-950 mt-12 mx-4 pt-1 text-xs text-green-500 flex justify-center">
                <p className="cursor-pointer text-center">View All Document</p>
              </div>
            </div>
          </div>
          <div className=" w-[700px] border-2 border-green-200 h-[250px] mt-3 rounded-lg p-5 ">
            <h1>Visits History (5)</h1>
            <div className="flex justify-between mt-3 mx-4 text-xs font-semibold text-green-950">
              <div>Data</div>
              <div>Reason</div>
              <div>Doctor</div>
            </div>
            <div className="flex justify-between mt-2 pt-2 border-t-1  border-black text-xs font-semibold text-green-950">
              <div>June 25, 2025</div>
              <div>Lorem ipsum dolor sit amet consectetur </div>
              <div>Dr.Damien Frank</div>
            </div>

            <div className="flex justify-between mt-3 text-xs font-semibold text-green-950">
              <div>June 25, 2025</div>
              <div>Lorem ipsum dolor sit amet consectetur </div>
              <div>Dr.Damien Frank</div>
            </div>
             <div className="flex justify-between mt-3  text-xs font-semibold text-green-950">
              <div>June 25, 2025</div>
              <div>Lorem ipsum dolor sit amet consectetur </div>
              <div>Dr.Damien Frank</div>
            </div>

            <div className="flex justify-between mt-3 text-xs font-semibold text-green-950">
              <div>June 25, 2025</div>
              <div>Lorem ipsum dolor sit amet consectetur </div>
              <div>Dr.Damien Frank</div>
            </div>
             <div className="flex justify-between mt-3  text-xs font-semibold text-green-950">
              <div>June 25, 2025</div>
              <div>Lorem ipsum dolor sit amet consectetur </div>
              <div>Dr.Damien Frank</div>
            </div>

            <div className="flex justify-between mt-3  text-xs  font-semibold text-green-950">
              <div>June 25, 2025</div>
              <div>Lorem ipsum dolor sit amet consectetur </div>
              <div>Dr.Damien Frank</div>
            </div>
          </div>
        </div>

        {/* Optional Right Section (if needed) */}
        <div>
          <div className="border-2 border-gray-200 rounded-lg ml-3 w-[300px]">
            <NextAppointment />
          </div>
          <div className="border-2 border-gray-200 rounded-lg mt-3 ml-3 w-[328px]">
            <Pills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBar;
