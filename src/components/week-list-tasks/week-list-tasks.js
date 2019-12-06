import React from 'react';
import {DatePicker} from "antd";
import {connect} from "react-redux";

import WeekListTasksItems from "../week-list-tasks-items";

const {WeekPicker} = DatePicker;

const WeekListTasks = (props) => {
    return (
        <React.Fragment class>
            <WeekPicker disabled={props.loading} format={'YYYY/MM'} onChange={(date, dateString) => console.log(date, dateString)} style={{marginLeft: '10px'}}/>
            <WeekListTasksItems {...props}/>
        </React.Fragment>
    );
};

const mapStateToProps = ({items:{data, loading}}) => {
    return {
        data, loading
    }
};

export default connect(mapStateToProps)(WeekListTasks);