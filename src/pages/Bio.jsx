import React, { useState } from 'react';
import { HeaderCopy, SidebarCopy } from '../components';
import About from '../components/About';
import Contact from '../components/Contact';
import Projects from '../components/Projects';





function Bio() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-screen lg:h-screen overflow-hidden ">
        {/* Sidebar */}
        <SidebarCopy
          sidebarOpen={sidebarOpen}
          setSidebarOpen={ setSidebarOpen }
        />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-hidden overflow-x-hidden dark:bg-stone-700">
          {/*  Site header */}
          <HeaderCopy
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}           
          />
          <main>
            <div className="px-1 sm:px-1 lg:px-2 py-2 w-full max-w-9xl mx-auto ">
              <About />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Bio;
