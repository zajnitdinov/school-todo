import React, {Component} from 'react';
import {DatePicker} from "antd";
import {connect} from "react-redux";
import WeekTaskListItem from "../week-task-list-item";

const {WeekPicker} = DatePicker;

class WeekTaskList extends Component {
    state = {
        data: this.props.data,
        loading: this.props.loading
    };

    handleChange = (date, dateString) => {
        console.log(date, dateString);
    };

    render(){
        return (
            <React.Fragment>
                <WeekPicker onChange={this.handleChange} disabled={this.props.loading} style={{marginLeft: '10px'}}/>
                <WeekTaskListItem {...this.props}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({items: {data, loading} }) => {
    return {
        data, loading
    }
};

export default connect(mapStateToProps)(WeekTaskList);