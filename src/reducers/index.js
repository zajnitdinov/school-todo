import content from "./content";
import items from './items';
import info from "./info";

const reducer = (state, action) => {
    return {
        content: content(state, action),
        items: items(state, action),
        info: info(state,action)
    }
};

export default reducer;