import React from 'react';
import ItemTodo from './ItemTodo';

function ListTodo(props){
		return (
			<ul className="todo-list">
				{
					props.list.map(
						(item, index) => <ItemTodo
															index={index}
															key={item.id}
															text={item.text}
															done={item.done}
															save={props.save}
															remove={props.remove} />
					)
				}
			</ul>
		);
}

export default ListTodo;
