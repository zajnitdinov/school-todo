const items = (state, action) => {
    if (state === undefined) {
        return {
            data: [],
            loading: false
        }
    }

    switch (action.type) {
        case 'ADD_ITEM':
            const newData = state.items.data.push(action.payload);
            return {
                loading: true,
                data: newData
            };
        case 'FETCH_ITEMS_SUCCESS':
            return{
                data: action.payload,
                loading: false
            };
        case 'FETCH_ITEMS_REQUESTED':
            return {
                data: [],
                loading: true
            };
        case 'TOGGLE_DONE_ITEM':
            const id = action.payload-1;
            const item = state.items.data[id];
            const newItem = {
                ...item,
                checked: !item.checked
            };
            return {
                ...state.items,
                data:[
                    ...state.items.data.slice(0, id),
                    newItem,
                    ...state.items.data.slice(id+1)
                ]
            };
        default:
            return state.items;
    }
};

export default items;