import './project.css'
import { motion } from 'framer-motion'

const Project = () => {
   return (
      <>
         <div className='project-div'>
            <h1 className='pro-text'>Projects</h1>
            <motion.div
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

            </motion.div>

            {/* <motion.div
               initial={{ x: 300, opacity: 0, scale: 0.7 }}
               whileInView={{ x: 0, opacity: 1, scale: 1 }}
               className='pro-m'>
               <div className='project-indiv'>
                  <img src="/Logo.jpeg" alt="" />
                  <div className='text-pro'>
                     <h1>FAME'S PLACE</h1>
                     <p>
                        it is a realtime hotel website built with HTML, CSS , JavaScript and React.
                        This website features hotel booking, all the available rooms and their respective prices,
                        A checkout page for payment, admin dashboard for admins and login and signUp for users and other pages.
                        I deployed this website using Cpanel and did the seo indexing mySelf. I designed their old website before
                        it was changed. You can checkout the website fameplacehotels.com
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/FlamePlace">
                           <div className='html-btn'>HTML</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/FlamePlace">
                           <div className='css-btn'>CSS</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/FlamePlace">
                           <div className='github-btn'>Javascript</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/FlamePlace">
                           <div className='js-btn'>React</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://flame-place-8y7n.vercel.app/">
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
                  <img src="/google-docs.png" alt="" />
                  <div className='text-pro'>
                     <h1>Google Docs</h1>
                     <p>
                        This is a clone of google docs and its functionalities, it is a FullStack project incoporating both frontend and backend.
                        The aim of this project was to achieve the collaborative feature using webSocket for realtime editing.
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/google-docs-clone">
                           <div className='html-btn'>Next js</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/google-docs-clone">
                           <div className='js-btn'>Typescript</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/google-docs-clone">
                           <div className='github-btn'>Node js</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/google-docs-clone">
                           <div className='js-btn'>Mongo Db</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://google-docs-clone-bay.vercel.app/">
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
                  <img src="/ff-logo.png" alt="" />
                  <div className='text-pro'>
                     <h1>Future Fund</h1>
                     <p>
                        This is a mobile banking app built with react native for the frontend and node js, typescript and MongoDb for the backend.
                        its is a Fullstack App incoporating features like signIn, login, editProfile, apply for loan, repay laon, push Notifications, buy airtime, buy data, buy electricity with vtPass,
                        integrating payment with paystack and webhook, making contributions, and a full functional dashboard where admins can process loans, see avalaible users and so on.
                        This project was built with 7 senior developers, 3 junior developers and  I as the team leader.
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/Future-Find">
                           <div className='js-btn'>React Native</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/Future-Fund-Dashboard">
                           <div className='github-btn'>React</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/Future-Fund-Backend">
                           <div className='github-btn'>Node js</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://future-fund-dashboard.vercel.app/">
                           <div className='js-btn'>Dashboard</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://expo.dev/accounts/dan27/projects/Future-Find/builds/6695f5fe-ef0e-4bfb-89dc-3027c52aed2f">
                           <div className='github-btn'>APK</div>
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
                  <img src="/chat-04.jpg" alt="" />
                  <div className='text-pro'>
                     <h1>Chat App</h1>
                     <p>
                        This is a real time chat App built with react, typescript, node js and mongo db.
                        The aim of this project is to do a real time chatting like whatsapp using websokets for  realtime updates.
                        This app incoporates a login and signIn, a chatting function where two users can send messages to each other at real time,
                        a typing feature when a user is typing, an edit function to to edit the message, a delete function to delete the message,
                        an online feature to display if a user is online or offline.
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Uchenna99/Live-Chat-Frontend">
                           <div className='github-btn'>React</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Uchenna99/Live-Chat-Frontend">
                           <div className='js-btn'>Typescript</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Uchenna99/Live-Chat-Backend-2">
                           <div className='github-btn'>Node js</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Uchenna99/Live-Chat-Backend-2">
                           <div className='github-btn'>Mongo Db</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Uchenna99/Live-Chat-Backend-2">
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
                  <img src="/drones-1-1.png" alt="" />
                  <div className='text-pro'>
                     <h1>Evotel</h1>
                     <p>
                        it is a website used to deliver medicine quickly to people through the use of evotels(modern drones).
                        This website is a FullStack project consisting of both frontend and backend. In this website, a user is
                        able to signIn and Login, see the available evtols with their battery levels, book medicines based on the selected evtol,
                        admins dashboard for admin where the medicines are created, all users are displayed and so on.
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/Evtol-new">
                           <div className='github-btn'>React</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/Evtol-new">
                           <div className='js-btn'>Typescript</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/Evtol-Backends">
                           <div className='github-btn'>Node js</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/Evtol-Backends">
                           <div className='github-btn'>Mongo Db</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/Evtol-new">
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
                  <img src="/logo.png" alt="" />
                  <div className='text-pro'>
                     <h1>Banking App</h1>
                     <p>
                        This is a banking App built with Angular as the frontend and spring boot(java) as the
                        backend using micro services. The aim of this project is to build a website where users can
                        signIn, logIn, Connect to their bank, payment, see all payment transactions, see all
                        connected banks and so on.
                     </p>
                     <div className='pro-skills'>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/BankingAngular">
                           <div className='github-btn'>Angular</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/BankingAngular">
                           <div className='js-btn'>Typescript</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/BankingAngular">
                           <div className='github-btn'>Java</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://github.com/Daniel24356/BankingAngular">
                           <div className='github-btn'>Springboot</div>
                        </a>
                        <a target="_blank"
                           rel="noopener noreferrer" href="https://banking-angular.vercel.app/">
                               <div className='github-btn'>Visit</div>
                           </a>
                       
                     </div>
                  </div>
                  <div>
                     <div>
                        <div>
                           <div>
                              <div>
                                 <div>
                                    
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </motion.div>
         </div>

      </>
   )
}

export default Project