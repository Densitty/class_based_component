export const reducer = (state, action) => {
  // a state is returned in a reducer
  switch (action.type) {
    case "ADD_ITEM":
      const newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "item added",
      };
    case "NO_VALUE":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "please enter a value",
      };
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: !state.isModalOpen };
    case "REMOVE_ITEM":
      const personId = state.people.findIndex((person) => {
        return person.id === action.payload;
      });
      console.log(personId);
      const persons = [...state.people];
      persons.splice(personId, 1);
      return { ...state, people: persons };
    default:
      throw new Error("no matching action type");
  }
  // if (action.type === "ADD_ITEM") {
  //   const newPeople = [...state.people, action.payload];
  //   return {
  //     ...state,
  //     people: newPeople,
  //     isModalOpen: true,
  //     modalContent: "item added",
  //   };
  // }
  // if (action.type === "NO_VALUE") {
  //   return {
  //     ...state,
  //     isModalOpen: true,
  //     modalContent: "please enter a value",
  //   };
  // }

  // if (action.type === "CLOSE_MODAL") {
  //   return { ...state, isModalOpen: !state.isModalOpen };
  // }

  // if (action.type === "REMOVE_ITEM") {
  //   const personId = state.people.findIndex((person) => {
  //     return person.id === action.payload;
  //   });
  //   console.log(personId);
  //   const persons = [...state.people];
  //   persons.splice(personId, 1);
  //   return { ...state, people: persons };
  // }
  // throw new Error("no matching action type");
};
