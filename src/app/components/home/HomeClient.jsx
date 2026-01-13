"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import Top from "../../Utils/Top";
import HeroSection from "./HeroSection";
import WeProvideSection from "./WeProvideSection";
import StatsSection from "./StatsSection";
import RecentProjectsSection from "./RecentProjectsSection";
import OurApproachesSection from "./OurApproachesSection";
import LetsDiscussSection from "./LetsDiscussSection";
import IndustriesSection from "./IndustriesSection";
import Carousal from "../../Utils/Carousal";
import Contactform from "../../Utils/Contactform";

import { fallbackServices } from "../carts";
import {
  API_URL_WeProvide,
  API_URL_Stats,
  API_URL_Projects,
  API_URL_OurApproaches,
} from "../../AdminDashboard/components/ShowApidatas/apiUrls";

export default function HomeClient() {
  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);

  const [stats, setStats] = useState({});
  const [loadingStats, setLoadingStats] = useState(true);

  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  const [approaches, setApproaches] = useState([]);
  const [loadingApproaches, setLoadingApproaches] = useState(true);

  useEffect(() => {
    axios.get(API_URL_WeProvide).then(res => {
      setServices(res.data.Result || []);
      setLoadingServices(false);
    });
  }, []);

  useEffect(() => {
    axios.get(API_URL_Stats).then(res => {
      setStats(res.data.Result?.[0] || {});
      setLoadingStats(false);
    });
  }, []);

  useEffect(() => {
    axios.get(API_URL_Projects).then(res => {
      const latest = (res.data.Result || []).filter(
        p => p.LatestProject === 1 || p.LatestProject === "1"
      );
      setProjects(latest);
      setLoadingProjects(false);
    });
  }, []);

  useEffect(() => {
    axios.get(API_URL_OurApproaches).then(res => {
      setApproaches(res.data.Result || []);
      setLoadingApproaches(false);
    });
  }, []);

  return (
    <>
      <Top />
      <HeroSection />
      <WeProvideSection
        services={services}
        fallbackServices={fallbackServices}
        loading={loadingServices}
      />
      <StatsSection stats={stats} loading={loadingStats} />
      <RecentProjectsSection
        projects={projects}
        loading={loadingProjects}
      />
      <OurApproachesSection
        approaches={approaches}
        loading={loadingApproaches}
      />
      <LetsDiscussSection />
      <IndustriesSection
        latestProject={projects.slice(0, 3)}
        loading={loadingProjects}
      />
      <Carousal />
      <Contactform />
    </>
  );
}
