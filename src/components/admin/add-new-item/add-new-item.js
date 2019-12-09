import React from 'react';
import {Input} from "antd";

const AddNewItem = () => {
    return (
        <Input style={{ position: "absolute", bottom: '10px', boxSizing: 'border-box', left: '0px'}}
               placeholder='Добавить задачу'
               size='large'/>
    );
};

export default AddNewItem;