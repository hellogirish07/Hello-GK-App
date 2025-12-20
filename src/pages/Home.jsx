import profile from "../assets/pic (2).jpg";
import '../index.css';

export default function Home() {
  return (
    <section className=" w-full min-h-[calc(100vh-64px)] flex items-center justify-center px-6" >
      <div className=" max-w-8xl w-full flex flex-col md:flex-row items-center md:items-center justify-center gap-10" >
        {/* Profile Image */}
        <div className="flex-shrink-0" data-aos="fade-down">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-yellow-500">
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-xl text-center md:text-left" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 uppercase">
            Girish Suthar
          </h1>

          <p className="text-yellow-400 text-lg md:text-2xl mt-2">
            Frontend Developer, Coder & Programmer
          </p>

          <p className="text-white text-base md:text-xl mt-4 leading-relaxed">
            I create stunning digital experiences that combine beautiful design
            with powerful functionality. Let's build something amazing
            together!
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-3 justify-center md:justify-start text-4xl social-icons">
            <a href="https://www.instagram.com/gk.suthar1/" 
             className="p-3 rounded-full text-white hover:bg-yellow-400 hover:text-black transition ">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/hellogirish07"
             className="p-3 rounded-full text-white hover:bg-yellow-400 hover:text-black transition ">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/girish-suthar-b6786b257/" 
             className="p-3 rounded-full text-white hover:bg-yellow-400 hover:text-black transition ">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
