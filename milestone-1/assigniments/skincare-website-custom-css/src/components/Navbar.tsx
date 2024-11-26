
import Link from 'next/link';


const Navbar = () => {

  return (
    <nav className="navbar">
        
          <Link className='link' href="/"><span></span>Home</Link>
          <Link className='link' href="/tips"><span></span>Skincare Tips</Link>
          <Link className='link' href="/about"><span></span>About Us</Link>

    </nav>
  );
};

export default Navbar;