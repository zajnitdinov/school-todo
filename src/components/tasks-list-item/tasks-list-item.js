import React, {Component} from 'react';
import {List} from "antd";
import {connect} from "react-redux";

import Item from "../list-item";

const style = {
    margin: '10px'
};

class TasksListItem extends Component {
    state = {
        data: []
    };

    render() {
        const {loading, data} = this.props;
        return (
            <List
                bordered='true'
                size='large'
                style={style}
                loading={loading}
                dataSource={data}
                renderItem=
                    {(item) => <Item {...item}/>}
            >
            </List>
        );
    }
}

const mapStateToProps = ({items : {data, loading}, content: {label}}) => {
    return {
        label, data, loading
    }
};



export default connect(mapStateToProps)(TasksListItem);