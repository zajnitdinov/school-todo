import React, {Component} from 'react';
import TasksListItem from "../task-list-item/task-list-item";
import {Typography} from "antd";
import {connect} from "react-redux";

import WeekListTasks from "../user/week-task-list/week-task-list";
import MonthListTasks from "../user/month-task-list";

import compose from "../../utils/compose";
import withService from "../hoc/with-service";
import {fetchItems} from "../../actions";

const {Title} = Typography;

class Content extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    componentDidUpdate(prevProps) {
        if (this.props.label !== prevProps.label){
            this.props.fetchItems();
        }
    }

    renderContent = () => {
        switch (this.props.label) {
            case 'Сегодня':
                return <TasksListItem />;
            case 'Неделя':
                return <WeekListTasks />;
            case 'Месяц':
                return <MonthListTasks/>;
            case 'Сотрудники':
                return <div>Добавить сотрудников</div>;
            case 'Мероприятия':
                return <div>Добавить мероприятия</div>;
            default:
                return <TasksListItem />;
        }
    };

    render() {
        const {label} = this.props;
        return (
            <React.Fragment>
                <Title>{label}</Title>
                {this.renderContent()}
            </React.Fragment>
        );
    }

}

const mapStateToProps = ({content}) => {
    return {
        label: content.label
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
)(Content);