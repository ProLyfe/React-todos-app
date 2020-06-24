import React from 'react';

const Todos = ({todos, supprimerTodo}) => {
    const todoListe = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {supprimerTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left</p>
    )
    return(
        <div className="todos collection">
            {todoListe}
        </div>
    );
};
export default Todos;