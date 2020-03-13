import React, {Component} from 'react';
import {Button, Menu as AntMenu} from "antd";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {editLabel, changeAdminAccess} from "../../actions";

class Menu extends Component {
    componentDidUpdate(prevProps) {
        const {admin, editLabel} = this.props;
        if (prevProps.admin !== admin && admin === true){
            editLabel('Все задачи')
        }
        if (prevProps.admin !== admin && admin === false){
            editLabel('Сегодня')
        }
    };

    render() {
        const {admin, changeAdminAccess, editLabel} = this.props;
        const menuItems = admin ? ['Все задачи', 'Сотрудники', 'Мероприятия'] : ['Сегодня', 'Завтра', 'Неделя', 'Месяц'];
        const renderItems = () => menuItems.map((item, idx) => <AntMenu.Item key={idx} onClick={() => editLabel(item)}> {item} </AntMenu.Item>);
        const buttonName = admin ? 'Вернуться' : 'Панель управления'
        return (
            <AntMenu defaultSelectedKeys={['0']}>
                {renderItems()}
                <AntMenu.Item style={{position: 'absolute', bottom: '20px'}}>
                    <Link to='/admin'>
                        <Button type='danger'
                                onClick={changeAdminAccess}
                                ghost
                                icon='setting'
                                size='small'>{buttonName}</Button>
                    </Link>
                </AntMenu.Item>
            </AntMenu>
        );
    }

};

const mapDispatchToProps = {
    changeAdminAccess,
    editLabel: (label) => editLabel(label)
};

const mapStateToProps = ({admin}) => {
    return {admin};
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);