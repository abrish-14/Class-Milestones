import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Tips = () => (
  <>
    <Navbar />
    <main className="bg-[url('Back2.jpg')] bg-cover bg-center h-[85vh] p-8 text-center bg-no-repeat">
      <h1 className="text-left text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        SkinCare Tips:
      </h1>

      <h2 className="text-left text-palevioletred text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
        Drinking Water:
      </h2>
      <ul className="list-disc list-inside text-left mb-4">
        <li className="font-serif font-bold text-lg text-black">Improves skin tone.</li>
        <li className="font-serif font-bold text-lg text-black">Prevents premature aging.</li>
        <li className="font-serif font-bold text-lg text-black">Prevents acne.</li>
        <li className="font-serif font-bold text-lg text-black">Flush toxins from skin.</li>
      </ul>

      <h2 className="text-left text-palevioletred text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
        Targeted Serums For Skintypes:
      </h2>
      <ul className="list-disc list-inside text-left mb-4">
        <li className="font-serif font-bold text-lg text-black">Oily Skin: Salicylic acid, Niacinamide acid.</li>
        <li className="font-serif font-bold text-lg text-black">Dry Skin: Hyaluronic Acid, Lactic acid.</li>
        <li className="font-serif font-bold text-lg text-black">Combination Skin: Mandelic acid, Glycolic acid.</li>
      </ul>

      <h2 className="text-left text-palevioletred text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
        Moisturize Your Skin:
      </h2>
      <ul className="list-disc list-inside text-left mb-4">
        <li className="font-serif font-bold text-lg text-black">
          Must use a good soothing moisturizer which suits you. Use it even if you have oily skin; gel moisturizers are good for oily skin.
        </li>
      </ul>

      <h2 className="text-left text-palevioletred text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
        Use Sunscreen:
      </h2>
      <ul className="list-disc list-inside text-left mb-4">
        <li className="font-serif font-bold text-lg text-black">
          Using sunscreen is essential regardless of the weather—whether it's sunny, cloudy, or even rainy.
        </li>
        <li className="font-serif font-bold text-lg text-black">
          Harmful UV rays can still penetrate through clouds and cause skin damage, leading to aging and the risk of skin cancer.
        </li>
      </ul>
    </main>
    <Footer />
  </>
);

export default Tips;