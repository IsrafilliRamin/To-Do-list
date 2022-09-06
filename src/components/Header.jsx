import React, { useEffect } from 'react'
import { useState } from 'react'
import img from '../img/TODO.png'
import ListContiner from './ListContiner'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Emptylist from './Emptylist';




var count = Number(localStorage.getItem('count'))
var checedCount = Number(localStorage.getItem('checedCount'))


    

// getItem Local 
const getLocalItem = () => {
    let list = localStorage.getItem('List')
    if (list) {
        return JSON.parse(localStorage.getItem("List"))
    } else {
        return [];
    }
}

 
const Header = () => {
    const nullList = document.querySelector('.bosList') //nullliste catdim
    const [todos, setTodos] = useState(getLocalItem());
    const [inpValue, setInpValue] = useState('');

    if(count < 0){
        count = 0
        checedCount = 0
    }
       
    /* initial value */
    function additem() {

        if (!inpValue) {
            toast.warning("List bosdur daxil edin")
            nullList.style.display = 'block'


            return;
        }
        const item = {
            id: Math.floor(Math.random() * 1000),
            value: inpValue,
            complete: false,
           
        }
        toast.success("list elave olundu")
        setTodos(oldTodos => [...oldTodos, item])
        setInpValue("")
        count = count + 1
        
    }


    /* remove list start */
    const removeTodo = (id) => {
        let updateTodo = [...todos].filter((item) => item.id !== id)
        toast.error("List silindi")
        count = count - 1
        todos.map((todo) => {
            if (todo.complete === true && todo.id === id) {
                checedCount = checedCount - 1
            }
            if (count === 0 && checedCount === 0) {
                !count && <Emptylist/>
            }
           return todo
        })

        setTodos(updateTodo)

    }

    /* remove list end */

    /* complete list start */
    let completeTodo = (id) => {

        let updateTodo = todos.map((todo) => {
            if (todo.id === id) {
                todo.complete = !todo.complete

                if (todo.complete === true) {
                    toast.success("List tamamlandi")
                    checedCount = checedCount + 1
                } if (todo.complete === false) {
                    toast.warning('List gozlemede')
                    checedCount = checedCount - 1
                }
            }

            return todo
        })

        setTodos(updateTodo)
    }

    /* comlete list end */

    /* All delet function start */
    const allDeletFunc = () => {
        setTodos([])
        count = 0
        checedCount = 0
        toast.dark("List sifirlandi")
        !count && <Emptylist/>

    }
    /* All delet function end */


    /* localStorage setItem */
    useEffect(() => {
        
        localStorage.setItem("List", JSON.stringify(todos));
        localStorage.setItem('count', count)
        localStorage.setItem('checedCount', checedCount)
    }, [todos])





   
    

   

    return (
        <div className='header'>
            <div className='Container'>
                <img src={img} alt="" />

                <form className='form'>
                    <input className='inp' type="text" value={inpValue} placeholder='Tapsirigi daxil edin' onChange={e => setInpValue(e.target.value)} />
                    <button className='btn' onClick={(e) => {  
                        e.preventDefault()
                        additem()
                        !count && <Emptylist/> 
                    }
                    }><i className="fa-solid fa-plus"></i></button>

                </form>

                <ListContiner todos={todos} removeTodo={removeTodo} count={count} completeTodo={completeTodo} checedCount={checedCount} allDeletFunc={allDeletFunc} />



            </div>
            
        </div>
    )
    
}

export default Header