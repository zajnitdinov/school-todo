const admin = (state, action) => {
    if (state === undefined){
        return false
    }

    switch (action.type) {
        case 'CHANGE_ADMIN_ACCESS':
            return !state.admin;
        default:
            return state.admin;
    }
};

export default admin;