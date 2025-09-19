import './project.css'
import { motion } from 'framer-motion'

const Project = () => {
   return (
      <>
         <div className='project-div'>
            <h1 className='pro-text'>Projects</h1>
            {/* <motion.div
               initial={{ x: 300, opacity: 0, scale: 0.7 }}
               whileInView={{ x: 0, opacity: 1, scale: 1 }}
               className='pro-m'>
               <div className='project-indiv'>
                  <img src="/Notion2.webp" alt="" />
                  <div className='text-pro'>
                     <h1>Notion Design</h1>
                     <p>
                        This is a clone of the notion website using HTML and CSS.
                        Explore this project to learn how to replicate the designs and functionality of notion,
                        a single space where you can think, write and plan,capture thoughts, manage projects and
                        even run an entire company the exact way you want.
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/Notion">
                           <div className='html-btn'>HTML</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/Notion">
                           <div className='css-btn'>CSS</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/Notion">
                           <div className='github-btn'>GitHub</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://notion-kavt.vercel.app/">
                           <div className='github-btn'>Visit</div>
                        </a>

                     </div>
                  </div>

               </div>

            </motion.div> */}

            <motion.div
               initial={{ x: 300, opacity: 0, scale: 0.7 }}
               whileInView={{ x: 0, opacity: 1, scale: 1 }}
               className='pro-m'>
               <div className='project-indiv'>
                  <a href="https://fameplacehotels.com/">
                     <img src="/Logo.jpeg" alt="" />
                  </a>

                  <div className='text-pro'>
                     <h1>FAME'S PLACE</h1>
                     <p>
                        Fame’s Place is a fully functional hotel booking platform that allows users to explore
                        available rooms, view prices, and book in real-time with an integrated checkout and payment system.
                        It includes secure authentication (login & signup), an admin dashboard for managing rooms and bookings,
                        and SEO optimization for better search visibility. The project demonstrates a full-stack architecture
                        deployed via CPanel with a smooth user experience across all devices.
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/FlamePlace">
                           <div className='html-btn'>HTML</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/FlamePlace">
                           <div className='css-btn'>CSS</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/FlamePlace">
                           <div className='github-btn'>JavaScript</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/FlamePlace">
                           <div className='js-btn'>React</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://fameplacehotels.com/">
                           <div className='github-btn'>Visit</div>
                        </a>
                     </div>
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ x: 300, opacity: 0, scale: 0.7 }}
               whileInView={{ x: 0, opacity: 1, scale: 1 }}
               className='pro-m'>
               <div className='project-indiv'>
                  <a href="https://google-docs-clone-bay.vercel.app/">
                     <img src="/google-docs.png" alt="" />
                  </a>

                  <div className='text-pro'>
                     <h1>Google Docs Clone</h1>
                     <p>
                        A full-stack real-time collaborative document editor inspired by Google Docs.
                        Multiple users can create and edit documents simultaneously with WebSockets powering
                        real-time updates and operational transformation resolving conflicts. Features include
                        secure authentication with Clerk, document storage in MongoDB, rich text formatting with Quill,
                        and a modern responsive interface built with Next.js and Tailwind CSS. Deployed on Vercel
                        for high performance and scalability.
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/google-docs-clone">
                           <div className='html-btn'>Next.js</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/google-docs-clone">
                           <div className='js-btn'>TypeScript</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/google-docs-clone">
                           <div className='github-btn'>Node.js</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/google-docs-clone">
                           <div className='js-btn'>MongoDB</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://google-docs-clone-bay.vercel.app/">
                           <div className='github-btn'>Visit</div>
                        </a>
                     </div>
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ x: 300, opacity: 0, scale: 0.7 }}
               whileInView={{ x: 0, opacity: 1, scale: 1 }}
               className='pro-m'>
               <div className='project-indiv'>
                  <a href="https://banking-new-iota.vercel.app/">
                     <img src="/ff-logo.png" alt="" />
                  </a>

                  <div className='text-pro'>
                     <h1>Future Fund</h1>
                     <p>
                        A digital microfinance and fintech platform developed with a team of 10 developers,
                        where I served as the team leader. The app empowers users to apply for and repay loans,
                        buy airtime/data/electricity (via VTPass), make contributions, and receive push notifications.
                        It integrates Paystack for payments and webhooks for transaction validation.
                        The admin dashboard offers loan management, user monitoring, and analytics.
                        Built with React Native for mobile, React for admin dashboards, and a Node.js + PostgreSQL backend
                        ensuring scalability and data security.
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/Future-Find">
                           <div className='js-btn'>React Native</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/Future-Fund-Dashboard">
                           <div className='github-btn'>React</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/Future-Fund-Backend">
                           <div className='github-btn'>Node.js</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://future-fund-dashboard.vercel.app/">
                           <div className='js-btn'>Dashboard</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://banking-new-iota.vercel.app/">
                           <div className='github-btn'>Visit</div>
                        </a>
                     </div>
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ x: 300, opacity: 0, scale: 0.7 }}
               whileInView={{ x: 0, opacity: 1, scale: 1 }}
               className='pro-m'>
               <div className='project-indiv'>
                  <a href="https://github.com/Daniel24356/RealTimeChat">
                     <img src="/chat-04.jpg" alt="" />
                  </a>
                  <div className='text-pro'>
                     <h1>Chat App</h1>
                     <p>
                        A real-time chat application inspired by WhatsApp, designed for seamless peer-to-peer
                        communication. It supports secure authentication, direct messaging, typing indicators,
                        online/offline status tracking, message editing, and message deletion. Powered by WebSockets
                        for instant updates, React and TypeScript for the frontend, and Node.js with MongoDB for
                        the backend. This project demonstrates my skills in building highly interactive,
                        real-time applications with robust backend integration.
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/RealTimeChat">
                           <div className='github-btn'>React</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/RealTimeChat">
                           <div className='js-btn'>TypeScript</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Uchenna99/Live-Chat-Backend-2">
                           <div className='github-btn'>Node.js</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Uchenna99/Live-Chat-Backend-2">
                           <div className='github-btn'>MongoDB</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/RealTimeChat">
                           <div className='github-btn'>Visit</div>
                        </a>
                     </div>
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ x: 300, opacity: 0, scale: 0.7 }}
               whileInView={{ x: 0, opacity: 1, scale: 1 }}
               className='pro-m'>
               <div className='project-indiv'>
                  <a href="https://github.com/Daniel24356/Evtol-new">
                     <img src="/drones-1-1.png" alt="" />
                  </a>

                  <div className='text-pro'>
                     <h1>Evotel</h1>
                     <p>
                        Evotel is a full-stack platform that uses drone technology to deliver medicine quickly
                        and efficiently. Users can sign up, log in, and book medicines based on available drones
                        (showing battery levels and status). The system includes an admin dashboard for managing
                        drones, medicines, and users. Built with React, TypeScript, Node.js, and MongoDB, it
                        showcases how modern logistics solutions can be powered by technology to solve real-world
                        healthcare delivery challenges.
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/Evtol-new">
                           <div className='github-btn'>React</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/Evtol-new">
                           <div className='js-btn'>TypeScript</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/Evtol-Backends">
                           <div className='github-btn'>Node.js</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/Evtol-Backends">
                           <div className='github-btn'>MongoDB</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/Evtol-new">
                           <div className='github-btn'>Visit</div>
                        </a>
                     </div>
                  </div>
               </div>
            </motion.div>

            <motion.div
               initial={{ x: 300, opacity: 0, scale: 0.7 }}
               whileInView={{ x: 0, opacity: 1, scale: 1 }}
               className='pro-m'>
               <div className='project-indiv'>
                  <a href="https://banking-angular.vercel.app/">
                     <img src="/logo.png" alt="" />
                  </a>
                  <div className='text-pro'>
                     <h1>Banking App</h1>
                     <p>
                        A microservice-driven banking application where users can securely sign up,
                        log in, connect to multiple banks, view their payment history, and track
                        all transactions. Built with Angular for a responsive frontend and
                        Spring Boot (Java) for the backend, leveraging microservice architecture
                        for scalability. It demonstrates enterprise-level practices with modular
                        service separation, transaction management, and REST API integrations.
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/BankingAngular">
                           <div className='github-btn'>Angular</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/BankingAngular">
                           <div className='js-btn'>TypeScript</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/BankingAngular">
                           <div className='github-btn'>Java</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Daniel24356/BankingAngular">
                           <div className='github-btn'>Spring Boot</div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://banking-angular.vercel.app/">
                           <div className='github-btn'>Visit</div>
                        </a>
                     </div>
                  </div>
               </div>
            </motion.div>

         </div>

      </>
   )
}

export default Project