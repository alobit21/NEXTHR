import React from 'react'
import Userdata from '@/components/Userdata'
const Settings = () => {
    const user = {
        Username: 'john_doe',
        Email: 'john@example.com',
        Password: '********',
        Phone: '123-456-7890',
      };
    return(
<div>
<div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
  <div
    className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
      alt="card-image" className="object-cover w-full h-full" />
  </div>
  <div className="p-6">
  <Userdata user={user}/>
  </div>
</div>  
</div>
    )
}

export default Settings;