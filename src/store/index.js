import { createStore } from "redux";

const initialState = {
    list: [
      {
        name: "take a shower",
        done: true,
      },
      {
        name: "have a breakfast",
        done: false,
      },
    ],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_ITEM':
            const updated = action.payload;
            return {
                list: state.list.map((item) => {
                    if(item.name !== updated.name) return item;
                    return updated;
                }),
            };
        default:
            return state;
    }
};

const store = createStore(reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;