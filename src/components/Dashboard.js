import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore"
import db from '../firebase'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
import { Delete, Edit } from '@mui/icons-material';
import { ColorRing } from 'react-loader-spinner';
import Navbar from './Navbar';

const Dashboard = () => {
const [input, setInput] = useState("")
const [data, setData] = useState([])


// Add Data to the Database
const addTodo = async (e) => {
  e.preventDefault()
  if(input){
    await addDoc(collection(db, "todos"), {
      input:input
    })
    toast.success("Added Successfully")
    setInput("")
  }
  else {
    toast.error("Error")
  }
  
}

// Read Data
const getData = async () => {
  await getDocs(collection(db, "todos")).then((querySnapShot) => {
    const newData = querySnapShot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setData(newData)
  });
}

// Update Data
const updateData = async (id) => {
  const updata = doc(db, "todos", id)
  await updateDoc(updata, {
   input: input
 })
}

// Delete Data
const handleDelete = async (id) => {
  const newRecord = doc(db, "todos", id);
  await deleteDoc(newRecord)
  toast.success("Deleted Successfully")
}

useEffect(() => {
  getData();
})


  return (
    <>
    <div className="dashboard">
      <Navbar/>
    <ToastContainer position="top-right" />
    <Box
    width="100vw"
    height="100vh"
    display="flex"
    flexWrap="wrap"
    flexDirection="column"
    alignItems="center"
    >
      <Box
      width="50vw"
      height="auto"
      display="flex"
      flexWrap="wrap"
      padding="1rem 2rem"
      flexDirection="column"
      alignItems="center"
      marginTop="3rem"
      >
        <input type="text" placeholder='Enter'
        onChange={(e) => setInput(e.target.value)}
        />
        <Button
        onClick={addTodo}
        sx={{
          backgroundColor: "#80D0B4",
          color: "#fff",
          marginTop: "1rem",
          padding: "0.5rem 2.5rem",
          fontWeight: "700",
          borderRadius: "20px"
        }}
        >Add</Button>
      </Box>
      <Box
      width="50vw"
      height= "auto"
      marginTop= "3rem"
      display= "flex"
      flexWrap="wrap"
      flexDirection="column"
      alignItems="center"
      padding= "1rem 3rem"
      >
        {data.map((doc, id) => (
        <Box
        key={id}
        width= "100%"
        height= "auto"
        display= "flex"
        alignItems="center"
        justifyContent= "space-between"
        backgroundColor= "#80D0B4"
        color= "#fff"
        padding= "0.5rem 0.5rem"
        borderRadius= "10px"
        marginBottom= "0.5rem"
        >
          <span>{doc.input}</span>
          <Box>
          <Button
          onClick={() => updateData(doc.id)}
          >
            <Edit />
          </Button>
          <Button
          onClick={() => handleDelete(doc.id)}
          >
            <Delete/>
          </Button>
          </Box>
        </Box>
          ))}
      </Box>
    </Box>
    </div>
    </>
  )
}

export default Dashboard