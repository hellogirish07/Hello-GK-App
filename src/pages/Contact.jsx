export default function Contact() {
  return (
    <section className=" w-full min-h-[calc(100vh-64px)] flex items-center justify-center px-3">
      <div className=" w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* LEFT — Contact Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl text-yellow-500 uppercase font-bold mb-4"> Get in Touch </h2>

          <p className="text-white text-lg mb-6" data-aos="fade-up">
            Have a project in mind or just want to say hello?
            Feel free to reach out. I’m always open to discussing
            new ideas and opportunities.
          </p>

          <div className="space-y-4 text-lg" data-aos="fade-up">
            <div className="flex items-center gap-4">
              <i className="fas fa-envelope text-yellow-500 text-xl"></i>
              <span className="text-white">hellogk45@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <i className="fas fa-phone text-yellow-500 text-xl"></i>
              <span className="text-white">+91 7340316164</span>
            </div>

            <div className="flex items-center gap-4">
              <i className="fas fa-map-marker-alt text-yellow-500 text-xl"></i>
              <span className="text-white">India</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6 text-4xl social-icons" data-aos="fade-up">
            <a href="https://www.instagram.com/gk.suthar1/" 
              className="p-3 rounded-full text-white hover:bg-yellow-400 hover:text-black transition">
              <i className="fab fa-instagram "></i>
            </a>
            <a href="https://github.com/hellogirish07"
              className="p-3 rounded-full text-white hover:bg-yellow-400 hover:text-black transition">
              <i className="fab fa-github "></i>
            </a>
            <a href="https://www.linkedin.com/in/girish-suthar-b6786b257/"  
            className="p-3 rounded-full text-white hover:bg-yellow-400 hover:text-black transition">
              <i className="fab fa-linkedin "></i>
            </a>
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="glass shadow-lg rounded-2xl border-2 border-black p-8 " data-aos="fade-up">
          <form method="POST" className="space-y-3"
            action="https://api.web3forms.com/submit">
            <input type="hidden" name="access_key" value="33d44239-b74e-45c4-be8a-5c9f3feaab1d" />

            <div>
              <label className="block text-sm text-yellow-400 font-medium mb-2">Name</label>
              <input type="text" name="name" placeholder="Your Name"
                className="glass w-full px-4 py-3 text-black border-2 border-black rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"/>
            </div>

            <div>
              <label className="block text-sm text-yellow-400 font-medium mb-2">Email </label>
              <input
                type="email" name="email"
                placeholder="your@email.com"
                className=" glass w-full px-4 py-3 text-black border-2 border-black rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>

            <div>
              <label className="block text-sm text-yellow-400 font-medium mb-2">Subject</label>
              <input
                type="text" name="subject"
                placeholder="Subject of your message"
                className=" glass w-full px-4 py-3 text-black border-2 border-black rounded-lg outline-none focus:ring-2 focus:ring-yellow-400" />
            </div>

            <div>
              <label className="block text-sm text-yellow-400 font-medium mb-2"> Message</label>
              <textarea
                rows="4" name="message"
                placeholder="Write your message..."
                className="glass w-full px-4 py-3 text-black border-2 border-black rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
            </div>

            <button type="submit"
              className=" w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition ">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
