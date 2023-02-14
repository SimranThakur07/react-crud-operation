import { Box, Button } from '@mui/material'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
const navigate = useNavigate()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleLogin = (e) =>{
  e.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      navigate('/home')
    })
    .catch((error) => {
      alert(error)
    });
}

const handlesignupClick = () => {
  navigate('/signup')
}

  return (
    <>
    <div className="login">
      <Box
      height= "100%"
      width= "50%"
      backgroundColor= "#1beabd" 
      padding= "0 1rem"
      >
        <Box
         display= 'flex'
         justifyContent= 'end'
         margin= '0.5rem 1rem'

        >
          <Button
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
           onClick={handlesignupClick}
          sx={{
            backgroundColor: "#108e73",
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
          to= '/'
          >
          Sign in</Link>
          <Link
          to='/signup'
          >Sign up</Link>
         </Box>
         <Box
         display= 'flex'
         flexDirection= 'column'
         padding= '0 1rem'
         >
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
          onClick={handleLogin}
          sx={{
            backgroundColor: "#10abff",
                color: "#fff",
                padding: "0.5rem 2rem",
                fontWeight: "700",
                borderRadius: "20px",
        }}
          >Sign in</Button>
          <Link
          to='/signup'
          >
           New user? Create Account
          </Link>
          </div>
         </Box>
        </Box>
      </Box>
      <Box
      height= "100%"
      width= "50%"
      backgroundColor= "#10abff"
      >
      </Box>
    </div>
    </>
  )
}

export default Login