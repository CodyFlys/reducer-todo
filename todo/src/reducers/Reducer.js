export const initialState = {
    todos: [
        {
        task: 'Fork Project',
        completed: false,
        id: 1
        },
        {
        task: 'Create New Branch',
        completed: false,
        id: 2
        }
    ]
}

const toggleItem = (id, todoList) => {
    const newList = todoList.map(item => {
      if(item.id === id){
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    })
    return newList
  }

  const removeItems = (todoList) => {
      const notComplete = todoList.filter(item => {
          return item.completed === false;
      })
      return notComplete
  }

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TASK":
            const newItem = {
              task: action.payload,
              completed: false,
              id: Date.now()
            }
            return {
              ...state,
              todos: [...state.todos, newItem]
            };

        case "TOGGLE_COMPLETED":
            return {
                todos: toggleItem(action.payload, state.todos)
            }

        case "REMOVE_COMPLETED":
            return {
                todos: removeItems(state.todos)
            }

        default:
            return state;
    }
}