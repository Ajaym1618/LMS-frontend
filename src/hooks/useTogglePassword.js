import { useState } from 'react';
import { IoEyeOutline,IoEyeOffOutline  } from "react-icons/io5";

const usePasswordToggle = () => {
    const [visible, setVisible] = useState("false");

    const Icon = visible ? <IoEyeOffOutline className='text-xl' onClick={()=>setVisible(visibility=> !visibility)}/> : <IoEyeOutline className='text-xl' onClick={()=>setVisible(visibility=> !visibility)}/>

    const PasswordType = visible ? "password" : "text"

    return [PasswordType, Icon]

}

export default usePasswordToggle;