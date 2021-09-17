import React from "react";
import PropTypes from 'prop-types';

function Form({handler, currentNum}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        // The handler is passing a prop to the parent component (dispatch action)
        // we use a callback a cb function to get the previous value of state
        // return a new state without mutating the previous state with the spread opperator 
        // could also use concat to not mutate. push mutates = bad. 
        // event.target.todo matches the name="todo"
        handler((prev) => [...prev, event.target.todo.value]
        );
        // event.target.reset();
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
}

export default Form;