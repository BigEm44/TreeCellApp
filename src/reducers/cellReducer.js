import { v4 as uuidv4 } from 'uuid';

export const cellReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CELL':
      return [
        ...state,
        {
          title: action.cell.title,
          id: uuidv4()
        }
      ];
    case 'REMOVE_CELL':
      return state.filter(cell => cell.id !== action.id);
    default:
      return state;
  }
};
