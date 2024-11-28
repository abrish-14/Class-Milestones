import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Projects = () => {
    return (
        <div className="Projects">
            <Navbar />
            <h2 className="Heading3">My Projects</h2>
            <div className="projectList">
                <div className="projectItem">
                    <h3 >Resume Builder</h3>
                    <img src="project1.jpg" className="projectImage" alt="Resume Builder" />
                    <p className="Detail">A web application to create and customize resumes.</p>
                    <a 
                        href="https://hackathonmilestone1-2-xi.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="projectLink"
                    >
                        View Project
                    </a>
                </div>
                <div className="projectItem">
                    <h3>Skincare Website</h3>
                    <img src="project2.jpg" className="projectImage" alt="Skincare Website" />
                    <p className="Detail">A skincare tips showcase website.</p>
                    <a 
                        href="https://skincare-website-with-custom-css.vercel.app/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="projectLink"
                    >
                        View Project
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Projects;