import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const SellerLogin = () => {
    const {navigate,setIsSeller,isSeller} = useAppContext()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
  return (
    <div>

    </div>
  )
}

export default SellerLogin