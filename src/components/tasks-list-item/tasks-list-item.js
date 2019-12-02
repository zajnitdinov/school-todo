import React, {Component} from 'react';
import {List} from "antd";
import {connect} from "react-redux";

import Item from "../list-item";
import withService from "../hoc/with-service";
import {fetchItems} from "../../actions";
import compose from "../../utils/compose";

const style = {
    margin: '10px'
};

class TasksListItem extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        return (
            <div>
                <List
                    bordered='true'
                    size='large'
                    style={style}
                    loading={this.props.loading}
                    dataSource={this.props.data}
                    renderItem=
                        {(item) => <Item id={item.id} checked={item.checked}>{item.title}</Item>}
                >
                </List>
            </div>
        );
    }
}

const mapStateToProps = ({items : {data, loading}}) => {
    return {
        data: data,
        loading: loading
    }
};

const mapDispatchToProps = (dispatch, {service}) => {
    return {
        fetchItems: fetchItems(service, dispatch)
    }
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(TasksListItem);