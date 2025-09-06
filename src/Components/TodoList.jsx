import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import Modal from 'react-modal';
Modal.setAppElement('#root');

const TodoList = ({task,handleDelete,id,handleChange}) => {
    const [checked, setChecked]= useState(false)
    const handleCheck = ()=>{
        setChecked(!checked);
    }

    const [openModal ,setOpenModal]=useState(false);

    const handleUpdate = ()=>{
      setOpenModal(true)
    }
  return (
    <div className='flex items-center gap-4 my-2 justify-between'>
        <div className='flex items-center space-x-5'>
          <div className='mt-2'>
            <button onClick={handleCheck}>
                {
                    checked ?
                    <FaRegCheckCircle size={25} className='text-green-600'/>
                    
                    :
                    <FaRegCircle size={25}/>
                    
                }
            </button>
            </div>
            
  <h1 className={`${checked? "text-gray-400 opacity-40 line-through " : "text-gray-800"}`}>{task.text}</h1>
            </div>
        <div className='flex space-x-2 justify-self-end'>
        <button onClick={()=>handleDelete(id)} className={`${checked ? 'bg-red-600 px-2 py-1  rounded text-white flex items-center': 'bg-red-600 px-2 py-1 rounded text-white flex items-center'}`} ><MdDelete/>  </button>
        <button onClick={handleUpdate}  className={`${checked ? 'bg-green-600 px-2 py-1  rounded text-white flex items-center': 'bg-green-600 px-2 py-1 rounded text-white flex items-center'}`} ><GrDocumentUpdate /> </button>
        </div>


      <Modal className={'flex flex-col rounded shadow-lg ml-[510px] mt-40 w-60 h-76  bg-gray-300'} isOpen={openModal}>
        <div className='flex justify-between px-4 pt-4'>
          <h1>Update Task</h1>
          <button onClick={()=>setOpenModal(false)} className='bg-red-600 rounded-2xl text-white font-bold px-2'>X</button>
        </div>
        <div className='mt-10 ml-4'>
          <input onClick={(e)=>e.target.value} className='bg-gray-600 px-2 py-1 w-50 rounded text-white border-0 outline-0' type="text"/>
          <div className='flex space-x-3 mt-4'>
          <button onClick={()=>handleChange(id)} className='bg-green-500 text-white rounded px-2'>Save</button>
          <button className='bg-gray-700 text-white px-2 rounded' onClick={()=>setOpenModal(false)}>Cancel</button>
          </div>
        </div>
        
      </Modal>
</div>
  )
}

export default TodoList