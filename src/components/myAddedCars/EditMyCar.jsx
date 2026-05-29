import React from 'react';
import { RiEditLine } from 'react-icons/ri';

const EditMyCar = () => {
    return (
        <div>
                             <button
                               onClick={() => setEditCar(car)}
                               className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#F8F5F0] border border-[#E0D9D0] hover:border-[#C0392B] hover:text-[#C0392B] text-[#1A1A1A] text-sm font-medium transition-all duration-200"
                             >
                               <RiEditLine size={16} />
                               Edit Car
                             </button> 
        </div>
    );
};

export default EditMyCar;