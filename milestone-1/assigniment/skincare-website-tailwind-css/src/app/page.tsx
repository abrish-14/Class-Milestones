import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Navbar />
    <main className="py-8 px-4 bg-[url('back.jpg')] bg-cover bg-center h-[92vh] bg-no-repeat text-center">
      <h1 className="text-4xl font-serif px-[8vmin] py-1 text-left text-[40px] md:text-5xl lg:text-6xl">
        Welcome to Skincare Hub!
      </h1>
      <h2 className="px-[7vmin] font-sans text-left text-pink-800 text-[25px] md:text-[30px] lg:text-[35px]">
        Here, we believe that skincare is more than just a routine—it’s a journey to self-care,<br />
        self-love, and confidence. Our goal is to empower you with knowledge on how to nurture,<br />
        protect, and celebrate your skin every day.
      </h2>
      <button className="bg-[#8b6c47] text-[25px] mx-[7vmin] my-4 px-[8vmin] py-2 md:text-[30px]">
        Visit More        
      </button>
    </main>
    <Footer />
  </>
);

export default Home;