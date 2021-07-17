import React,{useState,useEffect} from 'react'
import List from'./List';
import Alert from './Alert';

const getLocalStorage=()=>{
  let myList=localStorage.getItem('list');
  if(myList){
    return JSON.parse(myList);
  }
  else{
    return [];
  }
}


const Dashboard = () => {


  const [name ,setName]=useState('');
  const[isEditing,SetIsEditing]=useState(false);
  const [list,setList]=useState(getLocalStorage());
  const[editId,setEditId]=useState(null);
  const[alert,setAlert]=useState({show:false,msg:'',type:''});
  // console.log(alert.show)
  const onSubmitForm=(e)=>{
    e.preventDefault();
   if(!name){
showAlert(true,'danger','please type the post')
   }
   else if(name && isEditing){
  setList(list.map((item)=>{
    if(item.id===editId){
return {...item,title:name}
    }
    return item;
  }))
  showAlert(true,'success','edited successfully')
  setName('');
  SetIsEditing(false);
  setEditId(null);
   }
   else{
    showAlert(true,'success','post added successfully')
     const newItem={id:new Date().getTime().toString(),title:name};
     setList([...list,newItem]);
     setName('');
   }
  }
const clearList=()=>{
  showAlert(true,'danger','no posts to show');
  setList([]);
}

  const showAlert=(show=false,type="",msg="")=>{
setAlert({show,type,msg});
  }

  const deleteItem=(id)=>{
    showAlert(true,'danger','post deleted');
setList(list.filter((item)=>item.id!==id));
  }
  const likeItem=(id)=>{
    showAlert(true,'success','post liked');
  }
  const dislikeItem=(id)=>{
    showAlert(true,'danger','post disliked');
  }
  const editItem=(id)=>{
let itemEdit=list.find((item)=> item.id===id);
SetIsEditing(true);
setEditId(itemEdit.id);
setName(itemEdit.title);
  }
  useEffect(() => {
  localStorage.setItem('list',JSON.stringify(list));
  }, [list])
  return (
   <section className='section-center'>

     <form className='form' onSubmit={onSubmitForm}>
    {
      alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>
    }
        <h1>Dashboard</h1>
        <input type='text' value={name}
        placeholder='Type your post...'
        onChange={(e)=>setName(e.target.value)}/>
        <button className='btn'>{isEditing ?'Edit':'Share'}</button>  
     </form>
     {
       list.length>0 && <div className='grocery-container'>
       <List items={list} deleteItem={deleteItem} editItem={editItem} likeItem={likeItem} dislikeItem={dislikeItem} />
       <button className='btn-clear' onClick={clearList}>Delete posts</button>
     </div>
     }
     
   </section>
  );
}
export default Dashboard;
