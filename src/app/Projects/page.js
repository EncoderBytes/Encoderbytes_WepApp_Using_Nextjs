"use client";
import React, { useState, useMemo } from "react";
import ProjectsHero from "./ProjectsHero";
import ProjectsFilter from "./ProjectsFilter";
import ProjectsGrid from "./ProjectsGrid";
import Contactform from "../Utils/Contactform";
import { useProjects } from "./useProjects";

const Page = () => {
  const { projects, loading, error } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const normalizeCategory = (category) => {
    const mapping = {
      app: "mobileapplication",
      mobileapp: "mobileapplication",
      mobileapplication: "mobileapplication",
      web: "webapplication",
      website: "webapplication",
      webapp: "webapplication",
      webapplication: "webapplication",
      ai: "artificialintelligence",
      artificialintelligence: "artificialintelligence",
      uiux: "uiux",
      "ui/ux": "uiux",
      blockchain: "blockchain",
    };
    const key = category?.trim().replace(/\s+/g, "").toLowerCase();
    return mapping[key] || key;
  };

  const filteredProjects = useMemo(
    () =>
      projects.filter((p) => {
        const normalized = normalizeCategory(p.ProjectCategory);
        return selectedCategory === "All" || normalized === selectedCategory.toLowerCase();
      }),
    [projects, selectedCategory]
  );

  const handleLoadMore = () => setVisibleCount((v) => v + 2);
  const handleShowLess = () => setVisibleCount((v) => Math.max(4, v - 2));

  return (
    <div className="bg-white">
      <ProjectsHero />
      <ProjectsFilter activeCategory={selectedCategory} onSelect={(cat) => { setSelectedCategory(cat); setVisibleCount(4); }} />
      <ProjectsGrid
        projects={filteredProjects}
        loading={loading}
        error={error}
        visibleCount={visibleCount}
        onLoadMore={handleLoadMore}
        onShowLess={handleShowLess}
        selectedCategory={selectedCategory}
      />
      <Contactform />
    </div>
  );
};

export default Page;
