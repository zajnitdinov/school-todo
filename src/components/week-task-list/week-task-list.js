import React from 'react';
import {DatePicker} from "antd";
import {connect} from "react-redux";
import WeekTaskListItem from "../week-task-list-item";

const {WeekPicker} = DatePicker;

const WeekTaskList = (props) => {
    return (
        <React.Fragment>
            <WeekPicker disabled={props.loading} style={{marginLeft: '10px'}}/>
            <WeekTaskListItem {...props}/>
        </React.Fragment>
    );
};

const mapStateToProps = ({items: {data, loading} }) => {
    return {
        data, loading
    }
};

export default connect(mapStateToProps)(WeekTaskList);