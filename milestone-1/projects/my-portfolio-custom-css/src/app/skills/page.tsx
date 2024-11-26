'use client'
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Skills = () => {
    return (
        <div className="container1">
            <Navbar />
            <h2 className="Heading2">My Skills</h2>
            <p className="Details">
            I’m, a beginner in programming,exploring and polishing my skills through <br />various projects and websites.
            I’ve been learning programming languages for<br /> a year now,Currently,I’m enrolled in a Generative AI and Metaverse course<br /> underthe Governor House initiative, which
            is helping me gain advanced ,<br />knowledge in cutting-edge technologies. <br />
            I have experience with the following technologies:
            </p>
            <div className="Details">
            <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>TypeScript</li>
                <li>React.js</li>
                
            </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Skills;