import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark-primary pt-10">
      <div className="max-w-[1393px] mx-auto border-t border-bg-active pt-20 pb-12 px-4.5">
          <div className="flex items-center justify-between">
              <div className="flex-col gap-1 flex"><p className="text-sm text-bg-active">Powered by</p><img
                  className="w-30" alt="Micah" src="/images/micah.svg"/>
              </div>
              <p className="text-2xl text-text-primary font-semibold">
                  The War Index
              </p>
          </div>
      </div>
    </footer>
  );
}

export default Footer;

