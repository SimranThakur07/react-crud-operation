import { Box, Button } from '@mui/material'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'

const Signup = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSignup = (e) =>{
    e.preventDefault()
    const auth = getAuth()
    if(email && password) {
      createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        navigate('/Home')
        toast.success("Sign up Successfully")
    })
    } else {
      toast.error("Fill valid details")
    }
   
  }

  const handlesigninClick = () => {
    navigate('/')
  }

  return (
   <>
   <div className="signup">
      <ToastContainer position="top-right"/>
      <Box
      height= "100%"
      width= "50%"
      backgroundColor= "#1beabd"
      >
      </Box>
      <Box
      height= "100%"
      width= "50%"
      backgroundColor= "#10abff"
      padding= "0 1rem"
      >
        <Box
         display= 'flex'
         justifyContent= 'end'
         margin= '0.5rem 1rem'

        >
          <Button
          onClick={handlesigninClick}
         sx={{
          backgroundColor: '#045e8f',
          color: '#fff',
          padding: '0.5rem 1rem',
          fontSize: '12px',
          fontWeight: 'bold',
          borderRadius: '18px 0 0 18px'
         }}
          >Sign in</Button>
          <Button
          sx={{
            backgroundColor: "#1beabd",
            color: '#fff',
            padding: '0.5rem 1rem',
            fontSize: '12px',
           fontWeight: 'bold',
           borderRadius: '0 18px 18px 0'
           }}
          >Sign up</Button>
        </Box>
        <Box
        width= '100%'
        height= 'auto'
          marginTop= '5rem'
           display= 'flex'
           flexDirection= 'column'
           alignItems= 'flex-start'
           padding= '1rem 2rem'
        >
         <Box
         display= 'flex'
         alignItems= 'center'
         >
          <Link
          to='/'
          >Sign in</Link>
          <Link
          to='/signup'
          >Sign up</Link>
         </Box>
         <Box
         display= 'flex'
         flexDirection= 'column'
         padding= '0 1rem'
         >
          <input type="text" placeholder='Enter Your Name'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />
          <input type="email" placeholder='Enter Your Email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input type="password" placeholder='Enter your Password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
          <div className="button">
          <Button
          onClick={handleSignup}
          sx={{
            backgroundColor: "#80D0B4",
                color: "#fff",
                padding: "0.5rem 2rem",
                fontWeight: "700",
                borderRadius: "20px",
        }}
          >Sign up</Button>
          <Link to='/'>
            I'm allready a member
          </Link>
          </div>
         </Box>
        </Box>
      </Box>
    </div>
   </>
  )
}

export default Signup