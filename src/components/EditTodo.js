import React, {Fragment, useState} from "react";

const EditTodo = ({todo}) => {

    const [descricao, setDescricao] = useState(todo.descricao);
    
    //Editar Descricao
    const updateDescricao = async e =>{
        e.preventDefault();
        try {
            const body = {descricao};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    }

    return(
        <Fragment>
            
            <button 
                type="button" 
                class="btn btn-primary" 
                data-toggle="modal" 
                data-target={`#id${todo.todo_id}`}>
                Editar
            </button>

            
            <div class="modal" 
            id={`id${todo.todo_id}`} 
            onClick={() => setDescricao(todo.descricao)}>
                
            <div class="modal-dialog">
                <div class="modal-content">

                
                <div class="modal-header">
                    <h4 class="modal-title">Editar Tarefa</h4>
                    <button 
                        type="button" 
                        class="close" 
                        data-dismiss="modal"
                        onClick={() => setDescricao(todo.descricao)}>
                        &times;</button>
                </div>

                
                <div class="modal-body">
                    <input 
                        type='text' 
                        className="form-control"
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        />
                </div>

                
                <div class="modal-footer">
                    <button 
                        type=" button" 
                        class="btn btn-primary" 
                        data-dismiss="modal"
                        onClick={e => updateDescricao(e)}>
                        Editar
                    </button>
                    <button 
                        type="button" 
                        class="btn btn-danger" 
                        data-dismiss="modal"
                        onClick={() => setDescricao(todo.descricao)}>
                        Cancelar
                    </button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditTodo;