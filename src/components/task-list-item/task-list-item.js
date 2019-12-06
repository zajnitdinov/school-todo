import React, {Component} from 'react';
import {List} from "antd";
import {connect} from "react-redux";

import Item from "../task-list";

const style = {
    margin: '10px'
};

class TaskListItem extends Component {
    getItemsByDate = () => {
        const {data, label} = this.props;
        const now = new Date();
        const equalDate = (item, now) => (
            item.date.getDate() === now.getDate() &&
            item.date.getMonth() === now.getMonth() &&
            item.date.getFullYear() === now.getFullYear()
        );
        switch (label) {
            case 'Сегодня':
                return data.filter(item => equalDate(item, now));
            case 'Завтра':
                now.setDate(now.getDate() + 1);
                return data.filter(item => equalDate(item, now));
            default:
                return data;
        }
    };
    render() {
        const {loading} = this.props;
        return (
            <List
                bordered='true'
                size='large'
                style={style}
                loading={loading}
                dataSource={this.getItemsByDate()}
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



export default connect(mapStateToProps)(TaskListItem);