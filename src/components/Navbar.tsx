import React from "react";
import { Link } from "react-router-dom";

function Navbar(): React.ReactElement {

  return (
    <nav className="border-dashed-spaced text-text-secondary">
      <div className="max-w-[1393px] mx-auto py-5.5 px-6 relative">
          <div className="flex items-center justify-between">
              <Link to="/"><h2 className="text-2xl font-bold text-text-primary">The War Index</h2></Link>
              <div className="flex items-center gap-2">
                  <p className="text-text-tertiary text-sm leading-5">Powered By</p>
                  <img src="/images/micah-logo-dark.svg" className="w-30" alt="Micah Logo Dark"/>
              </div>
          </div>
          <img src="/images/border-plus.svg" alt="Border Plus" className="absolute -left-[7px] -bottom-2 z-10"/>
          <img src="/images/border-plus.svg" alt="Border Plus" className="absolute -right-[7px] -bottom-2 z-10"/>
      </div>
    </nav>
  )
}

export default Navbar
