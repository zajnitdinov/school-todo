import React from 'react';
import {Button, Menu as AntMenu} from "antd";
import {connect} from "react-redux";

import {editLabel} from "../../actions";

const Menu = ({editLabel}) => {
    return (
        <AntMenu defaultSelectedKeys={['1']}>
            <AntMenu.Item key='1' onClick={() => editLabel('Сегодня')}> Сегодня </AntMenu.Item>
            <AntMenu.Item onClick={() => editLabel('Завтра')}> Завтра </AntMenu.Item>
            <AntMenu.Item onClick={() => editLabel('Неделя')}> Неделя </AntMenu.Item>
            <AntMenu.Item onClick={() => editLabel('Месяц')}> Месяц </AntMenu.Item>
            <AntMenu.Item style={{position: 'absolute', bottom: '20px'}}>
                <Button type='danger'
                        ghost
                        icon='setting'
                        size='small'>Панель управления</Button>
            </AntMenu.Item>
        </AntMenu>
    );
};

const mapDispatchToProps = {
    editLabel: (label) => editLabel(label)
};

export default connect(null, mapDispatchToProps)(Menu);