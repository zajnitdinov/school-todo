const editLabel = (label) => {
    return {
        type: 'EDIT_LABEL',
        payload: label
    }
};

const siderInfo = (id) => {
    return {
        type: 'SIDER_INFO',
        payload: id
    }
};

const itemsRequested = () => {
    return {
        type: 'FETCH_ITEMS_REQUESTED'
    }
};

const itemsLoaded = items => {
    return {
        type: 'FETCH_ITEMS_SUCCESS',
        payload: items
    }
};

const toggleDoneItem = id => {
    return {
        type: 'TOGGLE_DONE_ITEM',
        payload: id
    }
};

const fetchItems = (service, dispatch) => () => {
    dispatch(itemsRequested());
    service.getItems()
        .then(data => dispatch(itemsLoaded(data)));
};

export { editLabel, siderInfo, fetchItems, toggleDoneItem };