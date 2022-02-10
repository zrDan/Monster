export default function Reducer(state, action) {
  // const categoryState = state.category;

  switch (action.type) {
    case "SET_CATEGORY_STATE":
      return { ...state, category: action.payload };

    case "SET_MONSTER_INFO":
      let newCover = action.payload.cover;
      let newDescription = action.payload.description;
      return {
        ...state,
        monsterInfo: { cover: newCover, description: newDescription },
      };

    default:
      return { ...state };
  }
}
