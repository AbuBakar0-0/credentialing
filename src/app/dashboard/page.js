"use client";
import Sidebar from "../components/Sidebar";
import { FaArrowCircleRight } from "react-icons/fa";
import ProvidersInformation from "./ProvidersInformation";
import { useState } from "react";
import EducationAndTraining from "./EducationAndTraining";
import HospitalAffiliations from "./HospitalAffiliations";
import EmploymentInformation from './EmploymentInformation';
import ProfessionalIds from "./ProfessionalIds";
import Specialities from "./Specialities";
import PracticeLocations from "./PracticeLocations";

export default function Dashboard() {
  const sidenavLinks = [
    {
      title: "Personal Information",
      component: <ProvidersInformation />,
    },
    {
      title: "Professional IDs",
      component: <ProfessionalIds/>,
    },
    {
      title: "Education & Training",
      component: <EducationAndTraining/>,
    },
    {
      title: "Specialities",
      component: <Specialities/>,
    },
    {
      title: "Practice Locations",
      component: <PracticeLocations/>,
    },
    {
      title: "Hospital Affiliations",
      component: <HospitalAffiliations/>,
    },
    {
      title: "Credentialing Contracts",
      component: <></>,
    },
    {
      title: "Employment Information",
      component: <EmploymentInformation/>,
    },
    {
      title: "Professional References",
      component: <></>,
    },
    {
      title: "Disclosures",
      component: <></>,
    },
  ];

  let [view, setView] = useState(sidenavLinks[0]["component"]);

  const handleChange = (item) => {
    setView(item);
  };
  return (
    <>
      <div className="flex">
        {/* <Sidebar /> */}
        <div className="flex w-1/5 justify-center items-start p-10">
          <div className="w-full flex flex-col justify-center items-center gap-3 border-gray-400 border-2 shadow-xl p-3 rounded-xl">
            {sidenavLinks.map((item, index) => (
              <div
                onClick={() => {
                  handleChange(item.component);
                }}
                className="w-full flex flex-row justify-start items-center gap-4 uppercase hover:cursor-pointer"
                key={index}
              >
                <div className="min-w-6 min-h-6">
                  <FaArrowCircleRight className="w-full h-full text-primary" />
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <main className="flex-1">
          <div className="bg-white flex flex-col justify-start items-start p-10 text-black gap-4">
            {view}
          </div>
        </main>
      </div>
    </>
  );
}
