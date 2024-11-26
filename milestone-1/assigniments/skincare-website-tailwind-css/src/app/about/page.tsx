import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const About = () => (
  <>
    <Navbar />
    <main className="bg-[url('back3.jpg')] bg-cover bg-center h-[83vh] p-8 bg-no-repeat text-center">
      <h1 className="text-left text-3xl md:text-4xl lg:text-5xl font-sans font-semibold mb-2">
        About
      </h1>
      <h1 className="text-left text-3xl md:text-4xl lg:text-5xl font-sans font-semibold mb-4">
        Us:
      </h1>
      <div className="text-center text-xl md:text-2xl lg:text-3xl font-serif px-5vmin text-[#db8b8b]">
        <p>
          "Thank you for exploring our skincare journey. We believe in empowering everyone with knowledge and confidence to make the best choices for their skin. Remember, skincare is a personal journey—so embrace each step, and let your natural beauty shine. Happy glowing!"
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default About;