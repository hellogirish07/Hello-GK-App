import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="h-[100%] flex flex-col items-center px-3 md:px-16 py-3 ">
      <div className="flex flex-col md:flex-row items-center gap-10 w-full">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 flex justify-center " data-aos="fade-down">
          <img src={profile} alt="About"
            className=" w-64 h-full md:w-80 md:h-80 rounded-full object-cover shadow-xl overflow-hidden border-4 border-yellow-500" />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400 uppercase">About Me</h2>

          <p className="text-white leading-relaxed mb-4" data-aos="fade-up">
            Hi, I’m <span className="font-semibold">Girish Suthar</span>, a
            passionate Frontend Developer who loves building clean, modern and
            responsive web applications.
          </p>

          <p className="text-white leading-relaxed mb-4" data-aos="fade-up">
            My journey in the tech world began with a fascination for coding,
            and I have since honed my skills in various programming languages
            and frameworks. I am particularly passionate about web development,
            where I enjoy creating dynamic and responsive user interfaces.
          </p>

          <p className="text-white leading-relaxed mb-6" data-aos="fade-up">
            I am passionate about helping others whenever possible and have a
            deep interest in music and e-sports. I enjoy engaging in various
            sports, including cricket, badminton, table tennis, football, and
            chess, along with video gaming.
          </p>
        </div>
      </div>
      
      <div className=" gap-3 justify-center md:justify-start grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mt-8 w-full max-w-4xl" data-aos="fade-up">
        <span className="glass px-4 py-2 text-white rounded-full text-sm md:text-lg font-medium text-black hover:bg-yellow-400 hover:text-black">
          <i className="fa-brands fa-html5 mr-2"></i>
          HTML5
        </span>
        <span className="glass px-4 py-2 text-white rounded-full text-sm md:text-lg font-medium text-black hover:bg-yellow-400 hover:text-black">
          <i className="fa-brands fa-css3-alt mr-2"></i>
          CSS3
        </span>
        <span className="glass px-4 py-2 text-white rounded-full text-sm md:text-lg font-medium text-black hover:bg-yellow-400 hover:text-black">
          <i className="fa-brands fa-js-square mr-2"></i>
          JavaScript
        </span>
        <span className="glass px-4 py-2 text-white rounded-full text-sm md:text-lg font-medium text-black hover:bg-yellow-400 hover:text-black">
          <i className="fa-brands fa-bootstrap mr-2"></i>
          Bootstrap
        </span>
        <span className="glass px-4 py-2 text-white rounded-full text-sm md:text-lg font-medium text-black hover:bg-yellow-400 hover:text-black">
          <i className="fas fa-code mr-2"></i>
          Tailwind CSS
        </span>
        <span className="glass px-4 py-2 text-white rounded-full text-sm md:text-lg font-medium text-black hover:bg-yellow-400 hover:text-black">
          <i className="fa-brands fa-node-js mr-2"></i>
          Node JS
        </span>
        <span className="glass px-4 py-2 text-white rounded-full text-sm md:text-lg font-medium text-black hover:bg-yellow-400 hover:text-black">
          <i className="fa-brands fa-react mr-2"></i>
          React JS
        </span>
        <span className="glass px-4 py-2 text-white rounded-full text-sm md:text-lg font-medium text-black hover:bg-yellow-400 hover:text-black">
          <i className="fa-brands fa-github mr-2"></i>
          GitHub
        </span> 
      </div>
    </section>
  );
}
