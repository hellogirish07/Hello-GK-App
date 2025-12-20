import { useState } from "react";
import { projects } from "../data/projects";
import { LayoutGrid, List } from "lucide-react";

export default function Projects() {
  const [view, setView] = useState("grid");

  return (
    <section className="w-full min-h-screen px-2 py-16">
      <div className="max-w-8xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-500 uppercase">
            My Projects
          </h2>

          {/* Toggle (Desktop only) */}
          <div className="hidden md:flex gap-2 glass">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded-lg  ${
                view === "grid" && "bg-yellow-500 text-black"
              }`}
            >
              <LayoutGrid size={20} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`p-2 rounded-lg  ${
                view === "list" && "bg-yellow-500 text-black"
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Projects Wrapper */}
        <div
          className={`grid gap-6
            ${view === "grid"
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "md:grid-cols-1"}
          `}
        >
          {projects.map((p) => (
            <div
              key={p.id} data-aos="fade-in"
              className={`glass rounded-xl overflow-hidden hover:shadow-lg transition
                ${view === "list" ? "md:flex" : ""}
              `}
            >
              {/* Image */}
              <img
                src={p.image}
                alt={p.title}
                className={`object-cover
                  ${view === "list"
                    ? "md:w-56 md:h-auto w-full h-48"
                    : "w-full h-48"}
                `}
              />

              {/* Content */}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl text-yellow-400 font-semibold">
                    {p.title}
                  </h3>

                  <p className="text-gray-200 mt-2">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {p.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 glass rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={p.link}
                  className="inline-block mt-3 px-5 py-2 rounded-lg bg-yellow-400 text-black text-center uppercase font-bold hover:bg-yellow-500 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
          
      </div>
    </section>
  );
}
