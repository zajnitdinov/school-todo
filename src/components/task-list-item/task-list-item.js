import React, {Component} from 'react';
import {List} from "antd";
import {connect} from "react-redux";

import Item from "../task-list";
import AddNewItem from "../add-new-item";

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
            case 'Все задачи':
                return data;
            default:
                return data;
        }
    };

    renderInput = () => {
        if (this.props.admin) {
            return <AddNewItem/>
        }
    };

    render() {
        const {loading} = this.props;
        return (
            <div>
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
                {this.renderInput()}
            </div>
        );
    }
}

const mapStateToProps = ({
    items : {data, loading},
    content: {label},
    admin
}) => {
    return {
        label, data, loading, admin
    }
};



export default connect(mapStateToProps)(TaskListItem);