const info = (state, action) => {
    if (state === undefined) {
        return {
            title: '',
            visible: false,
            description: ''
        }
    }
    switch (action.type) {
        case 'SIDER_INFO':
            const id = action.payload;
            const item = state.items.data[id-1];
            return {
                title: id > 0 ? item.title : '',
                visible: id > 0,
                description: id > 0 ? item.description : ''
            };
        default:
            return state.info;
    }
};

export default info;