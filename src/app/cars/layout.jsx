import Footer from '@/components/shared/Footer';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            {children} 
            <Footer/>
        </div>
    );
};

export default layout;