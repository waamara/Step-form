const Stepone = ({ formData, setFormData, errors }) => {
  return (
    <div className='m-12  bg-white rounded-xl p-4 '>
      <p className='font-bold text-2xl mb-2 text-blue-950'>Personal info</p>
      <p className='text-gray-400 w-[250px]'> Please provide your name, email address, and phone number.</p>
      <form action="" className='mt-4'>
        <div className='mt-4'>
          <p className='text-blue-900 '>Name</p>
          <input type="text"
            placeholder='e.g. Stephen King'
            className='border w-[300px] h-[45px] p-2 rounded-md '
          />
        </div>
        <div className='mt-4'>
          <p className='text-blue-900'>email address</p>
          <input type="email"
            placeholder='e.g. stephenking@lorem.com'
            className='border w-[300px] h-[45px] p-2 rounded-md '
          />
        </div>
        <div className='mt-4'>
          <p className='text-blue-900'>Phone Number</p>
          <input type="number"
            placeholder='e.g. +1 234 567 890'
            className='border w-[300px] h-[45px] p-2 rounded-md '
          />
        </div>
      </form>
    </div>
  )
}

export default Stepone