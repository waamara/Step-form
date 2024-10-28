import { useState } from "react"
const Stepthree = () => {
    const [Checked, setChecked] = useState(false);
    const Handlecheck = () => {
        setChecked(prevChecked => !prevChecked)
    }
    return (
        <div className='m-12 bg-white rounded-xl p-4 '>
            <p className='font-bold text-3xl mb-2 text-blue-950'>Pick add-ons</p>
            <p className='text-gray-400 w-[250px] text-lg'> Add-ons help enhance your gaming experience. </p>
            <div
                className={`w-[350px] h-[70px] border flex flex-row justify-between items-center  p-3 rounded-xl mt-8 ${Checked ? 'bg-blue-400' : 'bg-white'} `}
                onClick={Handlecheck}
            >
                <div
                    className='mt-1'
                >
                    <input
                        type="checkbox"
                        checked={Checked}
                        className='w-[20px] h-[20px] '
                        onChange={Handlecheck}
                    />
                </div>
                <div className='flex flex-col ml-4 lg:flex-row'>
                    <p className='text-blue-950 text-xl font-semibold'> Online service </p>
                    <p className='text-gray-500'>Access to multiplayer games</p>
                </div>
                <div>
                    <p className='text-indigo-800 font-semibold'>+$1/mo</p>
                </div>
            </div>
            <div className={`w-[350px] h-[70px] border flex flex-row justify-between items-center  p-3 rounded-xl mt-8 ${Checked ? 'bg-blue-400' : 'bg-white'} `}
            onClick={Handlecheck}
            > 
                <div className='mt-1'>
                    <input
                        type="checkbox"
                        checked={Checked}
                        className='w-[20px] h-[20px] '
                        onChange={Handlecheck}
                    />
                </div>
                <div className='flex flex-col ml-4 lg:flex-row'>
                    <p className='text-blue-950 text-xl font-semibold'>  Larger storage  </p>
                    <p className='text-gray-500'>Extra 1TB of cloud save </p>
                </div>
                <div>
                    <p className='text-indigo-800 font-semibold'>+$2/mo</p>
                </div>
            </div>
            <div className='w-[350px] h-[70px] border flex flex-row justify-between items-center  p-3 rounded-xl mt-8 '>
                <div className='mt-1'>
                    <input type="checkbox" className='w-[20px] h-[20px] font-black ' />
                </div>
                <div className='flex flex-col ml-4 lg:flex-row'>
                    <p className='text-blue-950 text-xl font-semibold'> Customizable Profile </p>
                    <p className='text-gray-500'> Custom theme on your profile </p>
                </div>
                <div>
                    <p className='text-indigo-800 font-semibold'>+$2/mo</p>
                </div>
            </div>
        </div>
    )
}

export default Stepthree