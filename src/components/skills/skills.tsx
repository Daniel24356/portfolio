import './skills.css'
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { MdOutlineCss } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaAngular } from "react-icons/fa";

const Skill = () => {
    return(
        <>
        <div className="skill">
           <h1>Skills</h1>
           <div className='skill-indiv'>
            <div>
             <TiHtml5 className='skill-iconhtml'/>
            </div>
            <div className='css-box'>
             <FaCss3Alt className='skill-icons'/>
             <MdOutlineCss className='skill-iconcss'/>
            </div>
            <div className='css-box'>
                <FaGithub className='skill-icons'/>
                <DiGithubFull className='skill-icongit'/>
            </div>
            <div>
                <IoLogoJavascript className='skill-icons'/>
            </div>
            <div>
                <SiTypescript className='skill-icons'/>
            </div>
            <div>
                <FaReact className='skill-icons'/>
            </div>
            <div>
                <FaNode className='skill-icons'/>
            </div>
            <div>
                <RiNextjsFill className='skill-icons'/>
            </div>
            <div>
                <DiMongodb className='skill-icons'/>
            </div>
            <div>
                <FaAngular className='skill-icons'/>
            </div>
            <div>
                <p className='c-icons'>C</p>
            </div>
            <div className='css-box'>
                <SiMicrosoftsqlserver className='skill-icons'/>
                <TbSql className='skill-iconsql'/>
            </div>
            <div className='css-box'>
             <FaJava className='skill-icons'/>
             <p className='java-icons'>Java</p>
            </div>
           </div>
         </div>
            </>
    )
}

export default Skill