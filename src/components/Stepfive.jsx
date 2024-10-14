
import Lastimport from "../assets/icon-thank-you.svg"

const Stepfive = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12   bg-white rounded-xl p-4 '>
            <img src={Lastimport}
                alt="thanks-img"
                className='w-[70px]' />
            <p className='text-3xl mt-10 text-blue-950 font-bold'>
                Thank you!
            </p>
            <p className='w-[330px] text-center text-gray-500 mt-6 text-lg  '>
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
            </p>
        </div>
    )
}

export default Stepfive