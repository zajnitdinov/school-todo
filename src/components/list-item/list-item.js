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
        const {checked, toggleDone, openInfo, id, title} = this.props;
        return (
            <List.Item>
                <Checkbox checked={checked} onClick={() => toggleDone(id)}/>
                <span style={this.style}
                      onClick={() => openInfo(id)}>
                    {title}
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