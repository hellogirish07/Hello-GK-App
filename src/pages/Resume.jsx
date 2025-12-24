export default function Resume() {
  const skills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Node.js", level: 65 },
    { name: "DSA Basics", level: 70 },
  ];

  const courses = [
    "Web Development Bootcamp – Udemy",
    "JavaScript Crash Course – Udemy",
    "Tailwind CSS Mastery – Udemy",
    "Node.js Development – Mind Luster",
    "Python Mastery – Udemy",
  ];

  return (
    <section className="w-full min-h-[calc(100vh-64px)] px-3 md:px-16 py-3 flex justify-center">
      <div className="w-full max-w-6xl">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400 uppercase">
          Resume
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            {/* Summary */}
            <div className="bg-white rounded-xl shadow p-6 glass" data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                Professional Summary
              </h3>
              <p className="text-white leading-relaxed">
                Frontend-focused Computer Science graduate with strong
                hands-on experience in building responsive web applications
                using modern tools and frameworks.
              </p>
            </div>

            {/* Skills with Progress Bars */}
            <div className="bg-white rounded-xl shadow p-6 glass" data-aos="fade-up">
              <h3 className="text-xl text-yellow-400 font-semibold mb-5">
                Skills
              </h3>

              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm font-medium mb-1 ">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-yellow-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            {/* Education */}
            <div className="glass rounded-xl shadow p-6" data-aos="fade-up">
              <h3 className="text-xl text-yellow-400 font-semibold mb-4">
                Education
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">
                    B.Tech in Computer Science
                  </h4>
                  <p className="text-gray-100 text-sm">
                    Chartered Institute of Technology, Abu Road
                  </p>
                  <p className="text-gray-100 text-sm">
                    2021 – 2025
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Senior Secondary (Class XII)
                  </h4>
                  <p className="text-gray-100 text-sm">
                    91.6% – Rajasthan Board
                  </p>
                </div>
              </div>
            </div>

            {/* Certificates & Courses */}
            <div className="bg-white rounded-xl shadow p-6 glass" data-aos="fade-up">
              <h3 className="text-xl text-yellow-400 font-semibold mb-4">
                Certificates & Courses
              </h3>

              <ul className="space-y-2 text-white list-disc list-inside">
                {courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-xl shadow p-6 glass" data-aos="fade-up">
              <h3 className="text-xl text-yellow-400 font-semibold mb-4">
                Projects
              </h3>

              <ul className="space-y-3 text-white list-disc list-inside">
                <li>
                  <span className="font-medium text-yellow-400">
                    Quick Code Studio
                  </span>{" "}
                  – Online code editor with live preview
                </li>
                <li>
                  <span className="font-medium text-yellow-400">
                    PDF Merger App
                  </span>{" "}
                  – In-browser PDF merge tool
                </li>
                <li>
                  <span className="font-medium text-yellow-400">
                    Genius GK (AI Chatbot)
                  </span>{" "}
                  – Gemini API powered chatbot
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
