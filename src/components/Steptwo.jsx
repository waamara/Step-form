import { useState } from 'react';
import ImgA from "../assets/icon-arcade.svg";
import ImgB from "../assets/icon-advanced.svg";
import ImgC from "../assets/icon-pro.svg"; 

const Steptwo = ({ formData, setFormData, errors }) => {
    const [selectedPlan, setSelectedPlan] = useState(formData.plan); 

    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        setFormData({ ...formData, plan });
    };

    return (
        <div className='m-12 bg-white rounded-xl p-4'>
            <p className='font-bold text-3xl mb-2 text-blue-950'>Select your plan</p>
            <p className='text-gray-400 w-[250px] text-lg'>You have the option of monthly or yearly billing.</p>

            <div 
                className={`w-[320px] h-[70px] border flex flex-row p-3 rounded-xl mt-8 ${selectedPlan === "arcade" ? "bg-blue-100" : ""}`} 
                onClick={() => handlePlanSelect("arcade")}
            >
                <div className='mt-1'>
                    <img src={ImgA} alt="arcade" />
                </div>
                <div className='flex flex-col ml-4 lg:flex-row'>
                    <p className='text-blue-950 text-xl font-semibold'>Arcade</p>
                    <p className='text-gray-500'>$9/mo</p>
                </div>
            </div>

            <div 
                className={`w-[320px] h-[70px] border flex flex-row p-3 rounded-xl mt-8 ${selectedPlan === "advanced" ? "bg-blue-100" : ""}`} 
                onClick={() => handlePlanSelect("advanced")}
            >
                <div className='mt-1'>
                    <img src={ImgB} alt="advanced" />
                </div>
                <div className='flex flex-col ml-4 lg:flex-row'>
                    <p className='text-blue-950 text-xl font-semibold'>Advanced</p>
                    <p className='text-gray-500'>$12/mo</p>
                </div>
            </div>

            <div 
                className={`w-[320px] h-[70px] border flex flex-row p-3 rounded-xl mt-8 ${selectedPlan === "pro" ? "bg-blue-100" : ""}`} 
                onClick={() => handlePlanSelect("pro")}
            >
                <div className='mt-1'>
                    <img src={ImgC} alt="pro" />
                </div>
                <div className='flex flex-col ml-4 lg:flex-row'>
                    <p className='text-blue-950 text-xl font-semibold'>Pro</p>
                    <p className='text-gray-500'>$15/mo</p>
                </div>
            </div>  
            <div className='bg-slate-800 w-12 h-[30px]'>
            </div>
            

            {errors.plan && <p className='text-red-500'>{errors.plan}</p>} {/* Error Message */}
        </div>
    );
}

export default Steptwo;
