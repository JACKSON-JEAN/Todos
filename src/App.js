import './index.css'
import React,{useState} from 'react';
import {FaPlus, FaTrash, FaEdit } from "react-icons/fa";

function App() {
  const[itemName, setItemName]=useState('')
  const[items, setItems]=useState([])


  const handleSubmit=(e)=>{
    e.preventDefault()
    if(itemName){
      const newItem={id:new Date().getTime().toString(), itemName}
      setItems((items)=>{
        return[...items, newItem]
      })
      setItemName('')
    }else{
      alert('pliz fill the input')
    }
    
  }

  const handleDelete=(id)=>{
    const filteredItems=items.filter(item=>item.id !==id)
    setItems(filteredItems)
  }

  

  return (<>
    <div className="wrapper">
      <div className="container">
        <h4>My Todo!</h4>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input type="text" placeholder='Add item...' className='add-tem' onChange={(e)=>setItemName(e.target.value)} value={itemName}/>
            <button className="search-icon">
              <FaPlus className='icon'/>
            </button>
          </div>
        </form>
        <section className="main">
          {
            items.map((item)=>{
              const{id, itemName}=item

              return <div className="item" key={id}>
                <p>{itemName}</p>
                <div className="item-icons">
                  {/* <button className='edit'><FaEdit/></button> */}
                  <button className='delete' onClick={()=>handleDelete(id)}><FaTrash/></button>
                  
                </div>
              </div>
            })
          }
        </section>
      </div>
    </div>
  </>);
}

export default App;
