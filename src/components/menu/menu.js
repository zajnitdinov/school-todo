import React from 'react';
import {Menu as AntMenu} from "antd";
import {connect} from "react-redux";

import {editLabel} from "../../actions";

const Menu = ({editLabel}) => {
    return (
        <AntMenu>
            <AntMenu.Item onClick={() => editLabel('Сегодня')}> Сегодня </AntMenu.Item>
            <AntMenu.Item onClick={() => editLabel('Завтра')}> Завтра </AntMenu.Item>
            <AntMenu.Item onClick={() => editLabel('Неделя')}> Неделя </AntMenu.Item>
            <AntMenu.Item onClick={() => editLabel('Месяц')}> Месяц </AntMenu.Item>
        </AntMenu>
    );
};

const mapDispatchToProps = {
    editLabel: (label) => editLabel(label)
};

export default connect(null, mapDispatchToProps)(Menu);