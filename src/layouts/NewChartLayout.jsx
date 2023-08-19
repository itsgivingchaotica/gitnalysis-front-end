import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DateRangeToolbar from "../components/DateRangeToolbar";
import LeadTimeChart from ".././components/LeadTimeChart";
import Branches from ".././components/Branches";
import Collaborators from "../components/Collaborators";
import MergeSuccessRate from "../components/MergeSuccessRate";
import BarChart from "../components/CommitsBarChart";
import MergedPRCount from "../components/PullRequests/ClosedPrs";
import OpenPullRequests from "../components/PullRequests/OpenPRs";
import ClosedIssues from "../components/Issues/ClosedIssues";
import NewIssues from "../components/Issues/NewIssues";

const NewChartLayout = () => {
  
  const currRepo = useSelector((state) => state.repo.currRepo);

  return (
    <>
      <div className="w-screen h-full">
        <div className="flex gap-y-12 p-10">
          <div className="flex w-full">
            <div
              className="grid grid-cols-3 grid-rows-2 gap-x-4 pr-4 text-center"
              style={{ width: "74%" }}
            >
              <div className="flex col-span-1 h-32 p-2 iflex w-full justify-center items-center bg-gradient-to-br from-teal-300 to-sky-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl font-bold text-white shadow-2xl">
                <Collaborators />
              </div>
              <div className="flex col-span-1 h-32 p-2 iflex w-full justify-center items-center bg-gradient-to-br from-purple-400 to-pink-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl font-bold text-white shadow-2xl">
                <Branches />
              </div>
              <div className="flex col-span-1 h-32 p-2 iflex w-full justify-center items-center bg-gradient-to-br from-lime-400 to-green-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl font-bold text-white shadow-2xl">
                <MergeSuccessRate />
              </div>
            </div>
            <div className="w-1/3">
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-center">
                <div
                  className="ml-1 w-4/5 rounded-xl shadow-3xl"
                  style={{ backgroundColor: "#171C2Eff" }}
                >
                  <div className="flex h-28 p-2 items-center justify-center font-bold text-white">
                    <MergedPRCount />
                  </div>{" "}
                </div>
                <div
                  className="ml-1 w-4/5 rounded-xl shadow-3xl "
                  style={{
                    transform: "translateX(-50px)",
                    backgroundColor: "#171C2Eff",
                  }}
                >
                  <div className="flex h-28 p-2 items-center justify-center font-bold text-white">
                    <OpenPullRequests />
                  </div>
                </div>
                <div
                  className="ml-1 w-4/5 rounded-xl shadow-3xl "
                  style={{ backgroundColor: "#171C2Eff" }}
                >
                  <div className="flex p-2 items-center justify-center h-28 font-bold text-white">
                    <ClosedIssues />
                  </div>
                </div>
                <div
                  className="ml-1 w-4/5 rounded-xl shadow-3xl "
                  style={{
                    transform: "translateX(-50px)",
                    backgroundColor: "#171C2Eff",
                  }}
                >
                  <div className="flex h-28 p-2 items-center justify-center font-bold text-white">
                    <NewIssues />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pl-10 text-center items-center"
          style={{ transform: "translateY(-150px)" }}
        >
          <div
            className="rounded-xl shadow-3xl text-white"
            style={{ width: "66%", backgroundColor: "#171C2Eff" }}
          >
            <div className="h-56 p-4 font-bold text-white">
              {" "}
              Lead Time for Change
              <LeadTimeChart />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div
          className="grid grid-cols-2 gap-x-4 gap-y-4 text-center ml-10"
          style={{ transform: "translateY(-335px)", width: "64%" }}
        >
          <div
            className="flex col-span-1 h-60 p-2 items-center justify-center rounded-xl shadow-3xl text-white"
            style={{ backgroundColor: "#171C2Eff" }}
          >
            Change Failure Rate('CFR')
          </div>
          <div
            className="flex col-span-1 h-60 p-2 justify-center items-center rounded-xl shadow-3xl text-white"
            style={{ backgroundColor: "#171C2Eff" }}
          >
            Issues
          </div>
        </div>
        <div
          className="grid grid-cols-1 w-96 grid gap-x-4 gap-y-4 text-center"
          style={{ transform: "translate(20px,-470px)" }}
        >
          <div
            className="flex p-2 justify-center items-center rounded-xl shadow-3xl text-white"
            style={{
              height: "375px",
              width: "90%",
              backgroundColor: "#171C2Eff",
            }}
          >
            <BarChart fullRepo={currRepo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewChartLayout;
