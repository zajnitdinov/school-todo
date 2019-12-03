import React, {Component} from 'react';
import TasksListItem from "../tasks-list-item/tasks-list-item";
import {Typography} from "antd";
import {connect} from "react-redux";
import WeekListTasks from "../week-list-tasks/week-list-tasks";
import compose from "../../utils/compose";
import withService from "../hoc/with-service";
import {fetchItems} from "../../actions";
import MonthListTasks from "../month-list-tasks";

const {Title} = Typography;

class TasksContent extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    renderContent = () => {
        switch (this.props.label) {
            case 'Сегодня':
                return <TasksListItem />;
            case 'Неделя':
                return <WeekListTasks />;
            case 'Месяц':
                return <MonthListTasks/>
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
)(TasksContent);