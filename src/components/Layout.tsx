import React from 'react';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps): React.ReactElement {
    return (
        <div className="bg-bg-dark-primary min-h-screen">
            <div className="max-w-[1240px] mx-auto relative border-dashed-spaced-vertical-both text-text-secondary">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}

export default Layout;

