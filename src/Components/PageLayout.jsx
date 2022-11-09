import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const PageLayout = ({ children, navBg }) => {
    return (
        <div className="flex flex-col overflow-hidden w-screen h-[100vh]">
            <Nav />
            <main className="flex-grow overflow-auto">
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default PageLayout;
