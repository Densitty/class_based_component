import React, { useState, useReducer } from "react";

import Modal from "./Modal";
import { data } from "./../data";

import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const UseReducer = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal getModalClosed={closeModal} modalContent={state.modalContent} />
      )}
      <form action="" onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            name="name"
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add person</button>
      </form>
      {state.people.map((person) => {
        return (
          <div className="item" key={person.id}>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseReducer;

/* const initialState = { count: 0 };
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button
        className="btn"
        onClick={() => dispatch({ type: "INCREMENT", amount: 1 })}
      >
        Add 1
      </button>
      <button
        className="btn"
        onClick={() => dispatch({ type: "DECREMENT", amount: 1 })}
      >
        Subtract 1
      </button>
    </div>
  );
};

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + action.amount,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      count: state.count - action.amount,
    };
  }
}; */
