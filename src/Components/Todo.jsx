import React, { useEffect, useRef, useState } from 'react'
import TodoList from './TodoList'


const Todo = () => {
      const [Data , setData]= useState([])

      const InputRef = useRef()

    
      const textRef = ()=>{
        if(InputRef.current.value===''){
          return alert('please fill input')
        }else{
          const textt = InputRef.current.value;
          
          const newData = {
          id: Data.length+1,
          text:textt,
          checked:false
        } 
    
        setData((prev)=>[...prev , newData])
        InputRef.current.value='';
      }  }
    const deleteHandle = (id)=>{
      setData((prev)=>{
        return prev.filter((todo)=>todo.id !== id)
      })
    }
  return (
    <div className='bg-white shadow-lg rounded place-self-center  w-11/12 max-w-md flex flex-col min-h-[500px] p-7 '>
    <h1 className='text-3xl font-bold text-center pb-4'>📃Todo List</h1>
    <div className='flex space-x-2 place-self-center'>
        <input  ref={InputRef} type="text" className='bg-gray-300 px-2 py-1 rounded text-white border-0 outline-0 md:w-76' placeholder='Add Your tasks .....' />
        <button className='bg-cyan-600 px-2 py-2 rounded text-white '  onClick={textRef}>Add+</button>
    </div>

    {/* tasks List*/}
    
        {Data.map((task,index)=>(
          <div key={index} className='ml-4'>
        <TodoList task={task} id={task.id}  handleDelete={deleteHandle}/>            
    </div>

        ))
        }
    </div>
)
}

export default Todo