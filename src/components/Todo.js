import React, {useState} from "react";
import "./todo.css"

const Todo = ({item, onUpdate, onDelete}) => {
     const [edit, setEdit] = useState(false)

    function FormEdit() {
        const [newValue, setNewValue] = useState(item.title)
        function handleSubmit(e) {
            e.preventDefault();

        }



    function handleChange(e) {
         const value= e.target.value;
         setNewValue(value)



    }
    //Funcion para actualizar tareas
    function handleClickUpdate(e) {
        onUpdate(item.id, newValue);
        setEdit(false)
    }

         return(
             <form className={"todoUpdateForm"} onSubmit={handleSubmit}>
                 <input type={"text"} className={"todoInputUp"} value={newValue} onChange={handleChange}/>
                 <button className={"buttonU"} onClick={handleClickUpdate}>update</button>
             </form>
         );
    }

    function TodoElement() {
         return(
             <div className={"todoInfo"}>
                 <span className={"itemTitle"}>{item.title}</span>
                  <button className={"buttonE"} onClick={() => setEdit(true)}>Edit</button>
                 <button className={"buttonD"} onClick={(e) => onDelete(item.id)}
                 >Delete</button>
             </div>
         )
    }
   return <div className={"todo"}>{edit ? <FormEdit/> : <TodoElement/>}</div>







}

export default Todo;