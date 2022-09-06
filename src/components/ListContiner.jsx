import React from 'react'
import Emptylist from './Emptylist'

const ListContiner = ({ todos, removeTodo, count, completeTodo, checedCount, allDeletFunc }) => {

    return (
        <div>
            <div className="listContainer" >
                


                {todos.map((to) => (


                    <div className='todoList' key={to.id}>
                        <div className='flexTo'>
                            <div className={to.complete ? "fa-solid fa-circle-check" : 'checBox'} onClick={() => {
                                completeTodo(to.id)

                            }

                            } ></div>
                            <h2 className={to.complete ? 'h2' : 'h1'}>{to.value}</h2>
                        </div>
                        <i className="fa-solid fa-trash-can" onClick={() => {
                            removeTodo(to.id)
                        }}></i>

                    </div>



                ))}
                    {!count && <Emptylist/>}








               

            </div>
            <p className='p-count'>
                    Ümumi  {count} tapsiriq   <span className='sp1'> Hazir: {checedCount} tapsiriq  </span> <span className='sp2' onClick={allDeletFunc}>Hamsini sil</span>
                </p>
        </div>
    )
}

export default ListContiner