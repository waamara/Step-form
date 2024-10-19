const Stepone = ({ formData, setFormData, errors }) => {
  return (
    <div className='m-12 bg-white rounded-xl p-4'>
      <p className='font-bold text-2xl mb-2 text-blue-950'>Personal info</p>
      <p className='text-gray-400 w-[250px]'>Please provide your name, email address, and phone number.</p>
      <form action="" className='mt-4'>
        <div className='mt-4'>
          <p className='text-blue-900'>Name</p>
          <input
            type="text"
            placeholder='e.g. Stephen King'
            className='border w-[300px] h-[45px] p-2 rounded-md'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className='text-red-500'>{errors.name}</p>} {/* Error Message */}
        </div>
        <div className='mt-4'>
          <p className='text-blue-900'>Email Address</p>
          <input
            type="email"
            placeholder='e.g. stephenking@lorem.com'
            className='border w-[300px] h-[45px] p-2 rounded-md'
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className='text-red-500'>{errors.email}</p>} {/* Error Message */}
        </div>
        <div className='mt-4'>
          <p className='text-blue-900'>Phone Number</p>
          <input
            type="tel"
            placeholder='e.g. +1 234 567 890'
            className='border w-[300px] h-[45px] p-2 rounded-md'
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          {errors.phone && <p className='text-red-500'>{errors.phone}</p>} {/* Error Message */}
        </div>
      </form>
    </div>
  );
};

export default Stepone;
