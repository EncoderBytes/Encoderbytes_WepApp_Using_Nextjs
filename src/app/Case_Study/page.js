"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Top from "../Utils/Top";
import Contactform from "../Utils/Contactform";
import { ProjectsCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";

import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import InfoCards from "./components/InfoCards";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import ProcessSection from "./components/ProcessSection";
import ImpactSection from "./components/ImpactSection";

const CaseStudyPage = ({ searchParams }) => {
  const projectId = searchParams.project;

  // ✅ YOU NEED THESE
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProjects = React.useCallback(async () => {
    setLoading(true);
    try {
      const { admins } = await ProjectsCount();
      setProjects(admins);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, [getProjects, projectId]);

  const project = projects.find(
    (p) => p.id === Number(projectId)
  );

  const projectTeam = project ? JSON.parse(project.ProjectTeam || "[]") : [];
  const projectTechnology = project
    ? JSON.parse(project.ProjectTechnology || "[]")
    : [];

  const errorsResolved = project?.errorsResolved
    ? parseInt(project.errorsResolved)
    : 75;

  const userIncreased = project?.userIncreased
    ? parseInt(project.userIncreased)
    : 90;

  return (
    <>
      <Top />

      <HeroSection loading={loading} project={project} />
      <OverviewSection loading={loading} project={project} />

      <InfoCards
        loading={loading}
        project={project}
        projectTeam={projectTeam}
        projectTechnology={projectTechnology}
      />

      <ProblemSection loading={loading} project={project} />
      <SolutionSection loading={loading} project={project} />
      <ProcessSection loading={loading} project={project} />

      <ImpactSection
        loading={loading}
        project={project}
        errorsResolved={errorsResolved}
        userIncreased={userIncreased}
      />

      <Link
  href="/Projects"
  className="text-customFull transition-all w-36 h-10 font-semibold mx-auto mb-6
             rounded-md bg-custom-blue flex items-center justify-center
             hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue"
>
  View All Projects
</Link>

      <Contactform />
    </>
  );
};

export default CaseStudyPage;
