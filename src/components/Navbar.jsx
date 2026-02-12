import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0E161B] lg:bg-dark-primary border-b border-bg-active">
      <div className="max-w-[1393px] mx-auto py-4 px-4.5">
          <div className="flex items-center justify-between">
              {/* Logo */}
              <a href="/"><h2 className="text-xl font-bold text-white">The War Index</h2></a>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-4">
                  <ul className="flex items-center gap-0.5">
                      <li><a href="/" className="py-2 px-3.5 bg-bg-active rounded-md text-lg text-text-secondary-hover font-semibold transition duration-300">Prediction Markets Index</a></li>
                      <li><a href="/" className="py-2 px-3.5 bg-transparent hover:bg-bg-active rounded-md text-lg text-text-secondary-hover font-semibold transition duration-300">Feed</a></li>
                      <li><a href="/" className="py-2 px-3.5 bg-transparent hover:bg-bg-active rounded-md text-lg text-text-secondary-hover font-semibold transition duration-300 flex items-center gap-3 group">Bookmarks <span className="flex items-center justify-center w-8 h-6 rounded-full border border-utility-gray text-sm font-medium group-hover:border-white group-hover:bg-white transition duration-300 group-hover:text-dark-primary">10</span></a></li>
                  </ul>
              </div>

              {/* Desktop Search & Sign In */}
              <form action="#" className="hidden lg:flex items-center gap-4">
                  <div className="relative">
                      <input type="text" className="h-12 rounded-lg border border-utility-gray py-2.5 pr-4 pl-11 placeholder:text-text-placeholder text-text-primary text-lg w-full xl:min-w-86 w-full focus:outline-none focus:border-white transition duration-300" placeholder="Search"/>
                      <img src="/images/search.svg" alt="Search Icon" className="absolute top-1/2 -translate-y-1/2 left-4"/>
                  </div>
                  <button aria-label="Submit Button" type="submit" className="flex items-center gap-1.5 h-12 rounded-lg border border-utility-gray py-3 px-4 cursor-pointer hover:border-white hover:bg-white transition duration-300 group">
                      <img src="/images/user.svg" alt="User"/><p className="text-lg text-text-secondary font-semibold group-hover:text-dark-primary transition duration-300">Sign in</p></button>
              </form>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-start z-50 cursor-pointer"
                aria-label="Toggle menu"
              >
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-3 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col gap-4 pb-4">
                  {/* Mobile Navigation Links */}
                  <ul className="flex flex-col gap-2">
                      <li><a href="/" className="block py-2 px-3.5 bg-bg-active rounded-md text-lg text-text-secondary-hover font-semibold transition duration-300">Prediction Markets Index</a></li>
                      <li><a href="/" className="block py-2 px-3.5 bg-transparent hover:bg-bg-active rounded-md text-lg text-text-secondary-hover font-semibold transition duration-300">Feed</a></li>
                      <li><a href="/" className="block py-2 px-3.5 bg-transparent hover:bg-bg-active rounded-md text-lg text-text-secondary-hover font-semibold transition duration-300">
                        <span className="flex items-center gap-3 group">Bookmarks <span className="flex items-center justify-center w-8 h-6 rounded-full border border-utility-gray text-sm font-medium group-hover:border-white group-hover:bg-white transition duration-300 group-hover:text-dark-primary">10</span></span>
                      </a></li>
                  </ul>

                  {/* Mobile Search */}
                  <form action="#" className="flex flex-col gap-3">
                      <div className="relative">
                          <input type="text" className="h-12 rounded-lg border border-utility-gray py-2.5 pr-4 pl-11 placeholder:text-text-placeholder text-text-primary text-lg w-full focus:outline-none focus:border-white transition duration-300" placeholder="Search"/>
                          <img src="/images/search.svg" alt="Search Icon" className="absolute top-1/2 -translate-y-1/2 left-4"/>
                      </div>
                      <button type="submit" className="flex items-center justify-center gap-1.5 h-12 rounded-lg border border-utility-gray py-3 px-4 cursor-pointer hover:border-white hover:bg-white transition duration-300 group w-full">
                          <img src="/images/user.svg" alt="User"/><p className="text-lg text-text-secondary font-semibold group-hover:text-dark-primary transition duration-300">Sign in</p>
                      </button>
                  </form>
              </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
