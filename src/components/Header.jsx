import React from 'react';
import BgImgMobile from "../assets/bg-sidebar-mobile.svg";
import BgImgDesktop from "../assets/bg-sidebar-desktop.svg"; // Use a different name for the desktop image

const Header = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${BgImgMobile})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px', // Adjust height as needed  
            }}>
                <div>
                    <div className=' flex-row flex justify-center  items-center pt-12 space-x-6 text-white md:flex-col '>
                        <div className='border rounded-[50%] text-center w-[35px] h-[35px] '><p>1</p></div>
                        <div className='border rounded-[50%] text-center w-[35px] h-[35px] '><p>3</p></div>
                        <div className='border rounded-[50%] text-center w-[35px] h-[35px] '><p>3</p></div>
                        <div className='border rounded-[50%] text-center w-[35px] h-[35px] '><p>4</p></div>
                    </div>
                </div>
            </div>
            <div className='bg-blue-50 w-full h-[350px] '>
            </div> 
            <div>
                <button className='bg-blue-950  mt-6 ml-[270px] text-white w-[100px] h-[50px] rounded '>Next Step</button>
            </div>
        </div>

    );
}

export default Header;
