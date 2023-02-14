import React from 'react'
import {Box} from '@mui/material';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';


const Navbar = () => {
const navigate = useNavigate()

const handleLogout = () =>{
  const auth = getAuth();
  signOut(auth).then(() => {
    navigate('/')
  })
}

  return (
   <>
   <Box
   width="100vw"
   height="10vh"
   display='flex'
    alignItems="center"
    justifyContent="space-between"
    padding="0 2rem"
   >
        <h1
        >LOGO</h1>
     <div className="navbar">
       <NavLink
       to= '/home'
       className={({ isActive }) => (isActive ? 'active' : 'inactive')}
       >
        Home
       </NavLink>
       <NavLink
       to= '/about'
       className={({ isActive }) => (isActive ? 'active' : 'inactive')}
       >
        About
       </NavLink>
       <NavLink
       to= '/contact'
       className={({ isActive }) => (isActive ? 'active' : 'inactive')}
       >
        Contact
       </NavLink>
       </div>
        <Box>
            <Button
            onClick={handleLogout}
            sx={{
                backgroundColor: "#80D0B4",
                    color: "#fff",
                    padding: "0.5rem 2rem",
                    fontWeight: "700",
                    borderRadius: "20px"
            }}
            >Logout</Button>
        </Box>
   </Box>
   </>
  )
}

export default Navbar