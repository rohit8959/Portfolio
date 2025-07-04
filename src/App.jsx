import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiPython } from "react-icons/si";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import Swal from 'sweetalert2';

function App() {

  const [color,setColor]=useState('#22d3ee');
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const formx = useRef();

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  if (inView) controls.start("visible");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    emailjs.sendForm(
      'service_5aiwwnj',        // <-- replace this
      'template_px8nrsl',       // <-- replace this
      formx.current,
      'CiYNEFXBKpkiVI0fv'         // <-- replace this
    )
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: `Thanks ${form.name}, I will get back to you soon.`,
          background: '#0f172a',              // dark background
          color: '#e0f7fa',                   // light cyan text
          iconColor: '#22d3ee',               // cyan icon color
          showConfirmButton: false,
          timer: 2500,
          customClass: {
            popup: 'rounded-xl shadow-[0_0_15px_#22d3ee]',
            title: 'text-cyan-400 text-xl font-bold',
            content: 'text-sm text-gray-300',
          }
        });
        formx.current.reset();
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Failed to send message. Please try again later.',
          background: '#0f172a',
          color: '#fca5a5',                   // soft red error text
          iconColor: '#f87171',               // red icon
          showConfirmButton: true,
          confirmButtonColor: '#22d3ee',
          customClass: {
            popup: 'rounded-xl shadow-[0_0_15px_#f87171]',
            title: 'text-red-400 text-xl font-bold',
            content: 'text-sm text-gray-300',
          }
        });
        console.log(error.text);
      });



    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const techSkills = [
    { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500 mr-2" /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500 mr-2" /> },
    { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400 mr-2" /> },
    { name: "React", level: 75, icon: <FaReact className="text-cyan-400 mr-2" /> },
    { name: "TailwindCSS", level: 80, icon: <SiTailwindcss className="text-teal-400 mr-2" /> },
   
    { name: "Java", level: 75, icon: <FaJava className="text-red-500 mr-2" /> },
    { name: "DSA", level: 70, icon: <span className="text-green-400 font-bold mr-2">📊</span> },
  ];

  const projects = [
    {
      title: "Foxdevoy Constructions",
      desc: "Responsive construction company website with React & TailwindCSS.",
      image: "./images/foxdevoy.png",
      link: "https://foxdevoy.in"
    },
    {
      title: "ShopSphere E-commerce",
      desc: "Full-featured frontend for an e-commerce platform.",
      image: "./images/a (2).png",
      link: "#"
    },
    {
      title: "Music Web App",
      desc: "Streaming UI for music app with dark theme.",
      image: "./images/music.png",
      link: "#"
    },
    {
      title: "Marksheet Generator",
      desc: "Simple web app to generate student marksheets.",
      image: "./images/marksheet.png",
      link: "#"
    }
  ];


  return (
    <>

   

 


      <div className="font-sans bg-[#0f172a] text-white scroll-smooth">
        {/* Navbar */}
        <header className="sticky top-0 bg-[#0f172a] shadow z-50 shadow-[0_0_10px_#938ba5]">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-cyan-400">Portfolio</h1>
            <ul className="flex gap-6 text-sm">
              <li><a href="#home" className="hover:text-cyan-400  hover:text-shadow-[10px_10px_20px_#22d3ee]  ">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-400  hover:text-shadow-[10px_10px_30px_#22d3ee] ">About</a></li>

              <li><a href="#skills" className="hover:text-cyan-400  hover:text-shadow-[10px_10px_30px_#22d3ee] ">Skills</a></li>
              <li><a href="#project" className="hover:text-cyan-400  hover:text-shadow-[10px_10px_30px_#22d3ee] ">Project</a></li>
              <li><a href="#contact" className="hover:text-cyan-400  hover:text-shadow-[10px_10px_30px_#22d3ee] " >Contact</a></li>
              
            
            </ul>
          </nav>
        </header>

        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-20 bg-gradient-to-b from-[#0f172a] to-[#111827]">
          <div className="md:w-1/2 text-center md:text-left ">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">Hello, It's Me</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mt-2 animate-pulse">Rohit Rajput</h1>
            <h3 className="text-2xl mt-4 text-cyan-400 font-medium">
              <Typewriter
                options={{
                  strings: [" Frontend Developer", "Java Programmer","Web Enthusiast"],
                  autoStart: true,
                  loop: true,
                  timer:10,
                }}
              />
            </h3>
            <p className="text-gray-300 mt-6">
              Turning ideas into beautiful and functional websites using modern web tech.
Passionate about clean code, creative design, and Java logic and many more...
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="https://github.com/rohit8959" className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center hover:shadow-[0_0_10px_#22d3ee] transition duration-200"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/rohit-rajput-b0891b263" className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center hover:shadow-[0_0_10px_#22d3ee] transition duration-200"><FaLinkedin /></a>
              <a href="mailto:rohitrajput125061@gmail.com" className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center hover:shadow-[0_0_10px_#22d3ee] transition duration-200"><FaEnvelope /></a>
              <a href="/formate22.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-cyan-600 text-white 
              rounded-full font-semibold transition duration-200 shadow-md hover:shadow-[0_0_10px_#22d3ee]">
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center ">
            <div className="relative w-80 h-100 rounded-full  border-2 border-gradient-to-tr from-pink-400 via-purple-500 to-cyan-400  shadow-[0_0_10px_#28d3ee] overflow-hidden shadow-9xl ">
              <img
                src="./images/rohit photo.jpg"
                alt="Profile"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-full border-4 border-pink-500 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-[#0f172a] text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-60 h-80 rounded-full border-2 border-gradient-to-tr from-pink-400 via-purple-500 to-cyan-400  shadow-[0_0_10px_#28d3ee] overflow-hidden shadow-9xl ">
                <img
                  src="./images/rohit photo.jpg"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 rounded-full border-4 border-pink-500 animate-pulse"></div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-2">
                About <span className="text-cyan-400">Me</span>
              </h2>
              <h3 className="text-xl mb-4">Full Stack Developer!</h3>
              <p className="text-gray-300 mb-6">
               A frontend web developer skilled in building clean, responsive, and interactive user interfaces using HTML, CSS, JavaScript, React, and TailwindCSS. Also well-versed in core Java programming concepts like object-oriented programming, arrays, and data structures.

Passionate about problem-solving and continuously exploring new technologies to create better digital experiences. Every project is an opportunity to learn, improve, and build something meaningful.
              </p>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-600 hover:to-cyan-600 text-white 
              rounded-full font-semibold transition duration-200 shadow-md hover:shadow-[0_0_10px_#22d3ee]">More About Me</a>
            </div>
          </div>
        </section>



        <section id="skills" className="py-20 px-6 bg-[#0f172a] text-white">
          <div className="container mx-auto" ref={ref}>
            <h2 className="text-3xl font-bold text-center mb-12">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Technical Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Technical Skills</h3>
                {techSkills.map((skill, idx) => (
                  <div key={idx} className="mb-4">
                    <div className="flex justify-between text-sm items-center ">
                      <div className="flex items-center">{skill.icon}<span>{skill.name}</span></div>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-2 bg-cyan-500 rounded-full"
                        initial="hidden"
                        animate={controls}
                        variants={{
                          hidden: { width: 0 },
                          visible: { width: `${skill.level}%` }
                        }}
                        transition={{ duration: 1.2, delay: idx * 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Professional Skills */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-cyan-300">Professional Skills</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { name: "Creativity", level: 90 },
                    { name: "Communication", level: 85 },
                    { name: "Problem Solving", level: 75 },
                    { name: "Teamwork", level: 80 }
                  ].map((skill, idx) => (
                    <div key={idx} className="text-center">
                      <div className="relative w-20 h-20 mx-auto mb-2">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <path
                            className="text-gray-700 stroke-current"
                            strokeWidth="3"
                            fill="none"
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <motion.path
                            className="text-cyan-500 stroke-current"
                            strokeWidth="3"
                            strokeDasharray="100, 100"
                            strokeDashoffset="100"
                            animate={inView ? { strokeDashoffset: 100 - skill.level } : {}}
                            transition={{ duration: 1.2, delay: idx * 0.3 }}
                            fill="none"
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <p className="text-sm mt-1 text-gray-300">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* //projeect */}
        <section id="project" className="py-20 px-6 bg-[#1e293b] text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              My <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {projects.map((proj, idx) => (
                <div key={idx} className="bg-[#0f172a] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                  <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-cyan-300 mb-2">{proj.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{proj.desc}</p>
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-400 hover:underline">Visit Project</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section id="contact" className="py-20 px-6 bg-[#0f172a] text-white ">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact <span className="text-cyan-400">Me</span></h2>
              <p className="text-gray-300 mb-4">
                Let's Work Together
              </p>
              <p className="text-gray-400 mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis possimus tenetur ullam ipsam.
              </p>
              <p className="mb-2">📧 rohitrajput125061@gmail.com</p>
              <div className="flex gap-4 text-2xl mt-4">
                <a href="https://github.com/rohit8959" className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center hover:shadow-[0_0_10px_#22d3ee] transition duration-200"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/rohit-rajput-b0891b263" className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center hover:shadow-[0_0_10px_#22d3ee] transition duration-200"><FaLinkedin /></a>
                <a href="mailto:rohitrajput125061@gmail.com" className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center hover:shadow-[0_0_10px_#22d3ee] transition duration-200"><FaEnvelope /></a>
              </div>
            </div>

            <form ref={formx} onSubmit={handleSubmit} className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Enter Your Name" className="w-full p-2 mb-4 rounded bg-[#334155] text-white border border-cyan-500" required />
              <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Enter Your Email" className="w-full p-2 mb-4 rounded bg-[#334155] text-white border border-cyan-500" required />
              <input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Enter Your Subject" className="w-full p-2 mb-4 rounded bg-[#334155] text-white border border-cyan-500" required />
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Enter Your Message" className="w-full p-2 mb-4 rounded bg-[#334155] text-white border border-cyan-500" rows="4" required />
              <button type="submit" className="w-full py-2 rounded bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition duration-200 cursor-pointer hover:shadow-[0_0_10px_#22d3ee]">Submit</button>
            </form>
          </div>
        </section>

        <footer className="bg-[#0f172a] text-center py-4 text-gray-200 text-sm">
          Designed & Developed with ❤️ by Rohit Rajput | All Rights Reserved © 2025
        </footer>


      </div>
    </>
  );
}

export default App;
