import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from 'next/link';


const Home = () => {
    return (
        <div className="main">
            <Navbar />
            <h1 className="Heading" >Welcome to My Portfolio</h1>
            <div><p className="Intro">Hi, I am Abrish Rathoor, a fresh front-end developer. I am enthusiastic about creating dynamic and visually appealing web experiences.</p>
            <img src="" alt="" />
                </div>
            <Footer />
        </div>
    );
};

export default Home;

