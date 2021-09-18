import React from "react";
import PropTypes from 'prop-types';

function Form({handler, currentNum}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = event.target.todo.value;
        // The handler is passing a prop to the parent component (dispatch action)
        // we use a callback a cb function to get the previous value of state
        // return a new state without mutating the previous state with the spread opperator 
        // could also use concat to not mutate. push mutates = bad. 
       
         // This reset will happen before the new state is updated.
    // Again, React state update is asynchronous.
        event.target.reset();
        handler((prev) => [...prev, newTodo]
        );
    };

    return (
     <form onSubmit={handleSubmit}>
       <label htmlFor="todo">
         Add item to todo list:
       </label>
       <input id="todo" type="text" name="todo"/>
       <button type="submit" className="p-4 rounded-sm text-white bg-green-500 ml-2">
         Add {currentNum}
       </button>
     </form>
    );
}

Form.propTypes = {
    handler: PropTypes.func.isRequired,
    currentNum: PropTypes.number.isRequired,
};

Form.defaultProps = {
  currentNum: 1,
};


export default Form;