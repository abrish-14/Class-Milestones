import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-[#db8b8b] p-8">
      <Link className="mx-4 text-black text-2xl font-normal" href="/">
        <span></span>Home
      </Link>
      <Link className="mx-4 text-black text-2xl font-normal" href="/tips">
        <span></span>Skincare Tips
      </Link>
      <Link className="mx-4 text-black text-2xl font-normal" href="/about">
        <span></span>About Us
      </Link>
    </nav>
  );
};

export default Navbar;