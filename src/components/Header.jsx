import BgImgMobile from "../assets/bg-sidebar-mobile.svg";
import BgImgDesktop from "../assets/bg-sidebar-desktop.svg";

const Header = () => {
    return (
        <div>
            <div 
                className="h-[200px] md:h-[600px] md:w-[300px] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${BgImgMobile})`
                }}
            >
                <div className="hidden  md:block" style={{
                    backgroundImage: `url(${BgImgDesktop})`
                }} />
                <div>
                    <div className='flex-row flex justify-center items-center pt-12 space-x-6 text-white md:flex-col'>
                        <div className='border rounded-[50%] text-center w-[35px] h-[35px] '><p>1</p></div>
                        <div className='border rounded-[50%] text-center w-[35px] h-[35px] '><p>3</p></div>
                        <div className='border rounded-[50%] text-center w-[35px] h-[35px] '><p>3</p></div>
                        <div className='border rounded-[50%] text-center w-[35px] h-[35px] '><p>4</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

