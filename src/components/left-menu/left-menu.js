import React from 'react';
import {Menu} from "antd";
import {connect} from "react-redux";

import {editLabel} from "../../actions";

const LeftMenu = ({editLabel}) => {
    return (
        <Menu>
            <Menu.Item onClick={() => editLabel('Сегодня')}> Сегодня </Menu.Item>
            <Menu.Item onClick={() => editLabel('Завтра')}> Завтра </Menu.Item>
            <Menu.Item onClick={() => editLabel('Неделя')}> Неделя </Menu.Item>
            <Menu.Item onClick={() => editLabel('Месяц')}> Месяц </Menu.Item>
        </Menu>
    );
};

const mapDispatchToProps = {
    editLabel: (label) => editLabel(label)
};

export default connect(null, mapDispatchToProps)(LeftMenu);