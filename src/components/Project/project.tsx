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
                        <a href="https://github.com/Daniel24356/Notion">
                           <div className='html-btn'>HTML</div>
                        </a>
                        <a href="https://github.com/Daniel24356/Notion">
                           <div className='css-btn'>CSS</div>
                        </a>
                        <a href="https://github.com/Daniel24356/Notion">
                           <div className='github-btn'>GitHub</div>
                        </a>
                        <a href="https://notion-kavt.vercel.app/">
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
                  <img src="/shirt.jpg" alt="" />
                  <div className='text-pro'>
                     <h1>Ecommerce Site</h1>
                     <p>
                        it is an ecommerce website built with HTML, CSS and Javascript ,
                        featuring an add to cart function/ delete cart  using local storage.
                        its a website where you can explore the dashboard, given you access to add,
                        delete and edit products which saves on the local storage and displays whichever
                        product you have added or deleted.
                     </p>
                     <div className='pro-skills'>
                        <a href="https://github.com/Daniel24356/ecommerce">
                           <div className='html-btn'>HTML</div>
                        </a>
                        <a href="https://github.com/Daniel24356/ecommerce">
                           <div className='css-btn'>CSS</div>
                        </a>
                        <a href="https://github.com/Daniel24356/ecommerce">
                           <div className='github-btn'>GitHub</div>
                        </a>
                        <a href="https://github.com/Daniel24356/ecommerce">
                           <div className='js-btn'>Javascript</div>
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
                  <img src="/blog.jpg" alt="" />
                  <div className='text-pro'>
                     <h1>Blog Site</h1>
                     <p>
                        This is a bolg site built with HTML, CSS, Typescript and React.
                        This project feature the use of API call to display the blogs,comment on the blog and
                        where you also have a sign up and login page that takes you to your admin dashboard.
                        its also has search features that help find the particular blog your looking for.
                     </p>
                     <div className='pro-skills'>
                        <a href="https://github.com/Daniel24356/myblog">
                           <div className='html-btn'>HTML</div>
                        </a>
                        <a href="https://github.com/Daniel24356/myblog">
                           <div className='css-btn'>CSS</div>
                        </a>
                        <a href="https://github.com/Daniel24356/myblog">
                           <div className='github-btn'>GitHub</div>
                        </a>
                        <a href="https://github.com/Daniel24356/myblog">
                           <div className='js-btn'>Typescript</div>
                        </a>
                        <a href="https://github.com/Daniel24356/myblog">
                           <div className='github-btn'>React</div>
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
                  <img src="/netflix.png" alt="" />
                  <div className='text-pro'>
                     <h1>Netflix Design</h1>
                     <p>
                        This is a site built  using HTML, CSS, Typescript and React.
                        Explore this project to learn how to replicate the designs and functionality of netflix,
                        a website used to watch movies and shows as entertainment for users to relax their minds during
                        their leisure time.
                     </p>
                     <div className='pro-skills'>
                        <a href="https://github.com/Daniel24356/design-netflix">
                        <div className='html-btn'>HTML</div>
                        </a>
                        <a href="https://github.com/Daniel24356/design-netflix">
                        <div className='css-btn'>CSS</div>
                        </a>     
                        <a href="https://github.com/Daniel24356/design-netflix">
                        <div className='github-btn'>GitHub</div>
                        </a>
                      <a href="https://github.com/Daniel24356/design-netflix">
                      <div className='js-btn'>Typescript</div>
                      </a>
                       <a href="https://github.com/Daniel24356/design-netflix">
                       <div className='github-btn'>React</div>
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
                  <img src="/portfolio.jpg" alt="" />
                  <div className='text-pro'>
                     <h1>Personal Portfolio</h1>
                     <p>
                        This is a site built with  HTML, CSS, Typescript and React.
                        It is a site that shows everthing about me , starting from
                        my career to my skills, projects, resume and achievements.
                        Explore this website if you want to know everthing about me and contact me.
                     </p>
                     <div className='pro-skills'>
                        <a href="https://github.com/Daniel24356/portfolio-code">
                        <div className='html-btn'>HTML</div>
                        </a>
                        <a href="https://github.com/Daniel24356/portfolio-code">
                        <div className='css-btn'>CSS</div>
                        </a>
                        <a href="https://github.com/Daniel24356/portfolio-code">
                        <div className='github-btn'>GitHub</div>
                        </a>
                         <a href="https://github.com/Daniel24356/portfolio-code">
                         <div className='js-btn'>Typescript</div>
                         </a>
                         <a href="https://github.com/Daniel24356/portfolio-code"></a>
                        <div className='github-btn'>React</div>
                     </div>
                  </div>

               </div>

            </motion.div>
         </div>

      </>
   )
}

export default Project