import service from "../services/service";

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
    service.getAllItems()
        .then(data => dispatch(itemsLoaded(data)));
};

const addItem = item => {
    service.addItem(item);
};

const changeAdminAccess = () => {
    return {
        type: 'CHANGE_ADMIN_ACCESS'
    }
};

export {addItem, fetchItems, toggleDoneItem, siderInfo, editLabel, changeAdminAccess};