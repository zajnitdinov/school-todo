const content = (state, action) => {
    if (state === undefined) {
        return {
            label: ''
        }
    }

    switch (action.type) {
        case 'EDIT_LABEL':
            return {
                label: action.payload
            };
        default:
            return state.content;
    }
};

export default content;