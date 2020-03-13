import React from 'react';
import {Input} from "antd";

import {addItem} from "../../actions";
import {connect} from "react-redux";

const AddNewItem = ({addItem}) => {
    const onPressEnter = (e) => {
        addItem(e.target.value)
    };

    return (
        <Input style={{ position: "absolute", bottom: '10px', boxSizing: 'border-box', left: '0px'}}
               onPressEnter={onPressEnter}
               placeholder='Добавить задачу'
               size='large'/>
    );
};

const mapDispatchToProps = {
    addItem
};

export default connect(null, mapDispatchToProps)(AddNewItem);