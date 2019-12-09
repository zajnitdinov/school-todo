import content from "./content";
import items from './items';
import info from "./info";
import admin from './admin';

const reducer = (state, action) => {
    return {
        admin: admin(state, action),
        content: content(state, action),
        items: items(state, action),
        info: info(state,action)
    }
};

export default reducer;