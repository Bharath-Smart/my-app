import React,{useState} from 'react'
import {FaEdit,FaThumbsDown,FaThumbsUp,FaTrash} from 'react-icons/fa'
import './List.css'

const List = ({items,deleteItem,editItem,likeItem,dislikeItem}) =>{
    const[like,setLike]=useState(0);
    const[dislike,setDislike]=useState(0);
    return (
   <section className='grocery-list'>
       {
           items.map((item)=>{
               const {title,id}=item;
               return <article className='article' key={id}>
                   <p className='text' key={id}>
                       <p><h3 key={id}>Username<span className="normal">:</span></h3>Bharath</p>
                       <h3>Post<span className="normal">:</span></h3>{title}
                   </p>
                   <div className='btn-container'>
                       <button className='edit' onClick={()=>editItem(id)}><FaEdit/></button>
                       <button className='delete' onClick={()=>deleteItem(id)}><FaTrash /></button>
                       <button onClick={()=> {likeItem(id);setLike(like+1)}} className='like'  ><FaThumbsUp/>{like}</button>
                       <button onClick={()=> {dislikeItem(id);setDislike(dislike+1)}} className='dislike' ><FaThumbsDown />{dislike}</button>
                   </div>
               </article>
           })
       }
   </section>
    )
}

export default List