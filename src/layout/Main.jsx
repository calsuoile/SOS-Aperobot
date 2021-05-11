import React from 'react';
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"


function Main(props) {

    const { children } = props;
 
    return (
        <div>
            <Header />  
            {children}
            <Footer />
        </div>
    );
}

export default Main;