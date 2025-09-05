import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";



const TodoList = ({task,handleDelete,id}) => {
    const [checked, setChecked]= useState(false)
    const handleCheck = ()=>{
        setChecked(!checked);
    }

   
  return (
    <div className='flex items-center gap-4 my-2 justify-between'>
        <div className='flex items-center space-x-5'>
          <div className='mt-2'>
            <button onClick={handleCheck}>
                {
                    checked ?
                    <FaRegCheckCircle size={20} className='text-green-600'/>
                    
                    :
                    <FaRegCircle size={20}/>
                    
                }
            </button>
            </div>
            
  <h1 className={`${checked? "text-gray-400 opacity-40 line-through " : "text-gray-800"}`}>{task.text}</h1>
            </div>
        <div className='flex space-x-2 justify-self-end'>
        <button onClick={()=>handleDelete(id)} className={`${checked ? 'bg-red-600 px-2 py-1  rounded text-white flex items-center': 'bg-red-600 px-2 py-1 rounded text-white flex items-center'}`} ><MdDelete/>  </button>
        <button  className={`${checked ? 'bg-green-600 px-2 py-1  rounded text-white flex items-center': 'bg-green-600 px-2 py-1 rounded text-white flex items-center'}`} ><GrDocumentUpdate /> </button>
        </div>
</div>
  )
}

export default TodoList