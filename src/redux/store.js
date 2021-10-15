import Reducer from "./reducer";
import { createStore } from "redux";

const initialState = {
  category: "original",
  monsterInfo: {
    cover: "",
    description: [],
  },
};

const store = createStore(Reducer, initialState);

export default store;
