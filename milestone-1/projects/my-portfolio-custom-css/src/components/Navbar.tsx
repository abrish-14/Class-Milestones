'use client;'
import Link from 'next/link';

const Navbar = () => {

  return (
    <nav className="navbar">
        
          <Link className='link' href="/"><span></span>Home</Link>
          <Link className='link' href="/skills"><span></span>Skills</Link>
          <Link className='link' href="/projects"><span></span>Project</Link>
          <Link className='link' href="/contact"><span></span>Contact Me</Link>
    </nav>
  );
};

export default Navbar;