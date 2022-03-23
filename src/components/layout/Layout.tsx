import React from "react";
import Header from "./header/Header";
import Footer from './footer/Footer';

interface ChildrenType {
    children: React.ReactNode
}


const Layout: React.FC<ChildrenType> = ({children}) => {
    console.log(window)

    return (
        <div className="min-h-screen h-full max-w-[1600px] relative">
            <Header />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout;