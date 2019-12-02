import React from 'react';
import TasksListItem from "../tasks-list-item/tasks-list-item";
import {Typography} from "antd";
import {connect} from "react-redux";
import WeekListTasks from "../week-list-tasks/week-list-tasks";

const {Title} = Typography;

const TasksContent = ({label}) => {
    return (
        <React.Fragment>
            <Title>{label}</Title>
            <TasksListItem />
            <WeekListTasks/>
        </React.Fragment>
    );
};

const mapStateToProps = ({content}) => {
    return {
        label: content.label
    }
};

export default connect(mapStateToProps)(TasksContent);