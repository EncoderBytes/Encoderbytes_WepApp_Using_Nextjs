"use client";

import { useEffect, useState } from "react";
import axios from "axios";

/* ===== Imports ===== */
import Top from "./Utils/Top";
import HeroSection from "./components/home/HeroSection";
import WeProvideSection from "./components/home/WeProvideSection";
import StatsSection from "./components/home/StatsSection";
import RecentProjectsSection from "./components/home/RecentProjectsSection";
import OurApproachesSection from "./components/home/OurApproachesSection";
import LetsDiscussSection from "./components/home/LetsDiscussSection";
import IndustriesSection from "./components/home/IndustriesSection";
import Carousal from "./Utils/Carousal";
import Contactform from "./Utils/Contactform";

/* ===== Utils & APIs ===== */
import { fallbackServices } from "./components/carts";
import {
  API_URL_WeProvide,
  API_URL_Stats,
  API_URL_Projects,
  API_URL_OurApproaches,
} from "./AdminDashboard/components/ShowApidatas/apiUrls";

export default function Home() {
  /* ===== States ===== */
  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(true);

  const [stats, setStats] = useState({});
  const [loadingStats, setLoadingStats] = useState(true);

  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  const [approaches, setApproaches] = useState([]);
  const [loadingApproaches, setLoadingApproaches] = useState(true);

  /* ===== Fetch Services ===== */
  useEffect(() => {
    async function fetchServices() {
      try {
        setLoadingServices(true);
        const res = await axios.get(API_URL_WeProvide);
        setServices(res.data.Result || []);
      } catch (error) {
        setServices([]);
      } finally {
        setLoadingServices(false);
      }
    }
    fetchServices();
  }, []);

  /* ===== Fetch Stats ===== */
  useEffect(() => {
    async function fetchStats() {
      try {
        setLoadingStats(true);
        const res = await axios.get(API_URL_Stats);
        setStats(res.data.Result?.[0] || {});
      } catch (error) {
        setStats({
          projectsDelivered: "100+",
          happyClients: "300",
          globalOffice: "01",
          yearsInBusiness: "04",
          expertTeam: "50",
        });
      } finally {
        setLoadingStats(false);
      }
    }
    fetchStats();
  }, []);

  /* ===== Fetch Projects ===== */
  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoadingProjects(true);
        const res = await axios.get(API_URL_Projects);
        const allProjects = res.data.Result || [];

        // Latest projects only
        const latestProjects = allProjects.filter(
          (p) => p.LatestProject === 1 || p.LatestProject === "1"
        );

        setProjects(latestProjects);
      } catch (error) {
        setProjects([]);
      } finally {
        setLoadingProjects(false);
      }
    }
    fetchProjects();
  }, []);

  /* ===== Fetch Our Approaches ===== */
  useEffect(() => {
    async function fetchApproaches() {
      try {
        setLoadingApproaches(true);
        const res = await axios.get(API_URL_OurApproaches);
        setApproaches(res.data.Result || []);
      } catch (error) {
        setApproaches([]);
      } finally {
        setLoadingApproaches(false);
      }
    }
    fetchApproaches();
  }, []);

  return (
    <div className="bg-white">
      <Top />
      <HeroSection />

      {/* We Provide */}
      <WeProvideSection
        services={services}
        fallbackServices={fallbackServices}
        loading={loadingServices}
      />

      {/* Stats */}
      <StatsSection stats={stats} loading={loadingStats} />

      {/* Recent Projects */}
      <RecentProjectsSection
        projects={projects}
        loading={loadingProjects}
      />

      {/* Our Approaches */}
      <OurApproachesSection
        approaches={approaches}
        loading={loadingApproaches}
      />

      {/* Let's Discuss */}
      <LetsDiscussSection />

      {/* Industries */}
      <IndustriesSection
        latestProject={projects.slice(0, 3)}
        loading={loadingProjects}
      />

      {/* Carousal */}
      <Carousal />

      {/* Contact */}
      <Contactform />
    </div>
  );
}
