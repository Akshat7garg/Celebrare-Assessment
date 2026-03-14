export const favouritesReducer = (state, action) => {
    switch (action.type) {
        case "Add_Fav":
            return [...state, action.payload];

        case "Remove_Fav":
            return state.filter((photo) => (photo.id != action.payload));

        default:
            return state;
    };
}