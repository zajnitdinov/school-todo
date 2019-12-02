import React, {Component} from 'react';
import {List, Checkbox} from "antd";
import {connect} from 'react-redux';

import {siderInfo, toggleDoneItem} from "../../actions";

class ListItem extends Component {
    style = {
        width: '100%',
        marginLeft: '10px'
    };
    render() {
        return (
            <List.Item>
                <Checkbox checked={this.props.checked} onClick={() => this.props.toggleDone(this.props.id)}/>
                <span style={this.style}
                      onClick={() => this.props.openInfo(this.props.id)}>
                    {this.props.children}
                </span>
            </List.Item>
        );
    }
}

const mapDispatchToProps = {
    openInfo: (id) => siderInfo(id),
    toggleDone: (id) => toggleDoneItem(id)
};

export default connect(null, mapDispatchToProps)(ListItem);