import React, {Component} from 'react';
import {DatePicker} from "antd";
import {connect} from "react-redux";
import WeekTaskListItem from "../week-task-list-item";

const {WeekPicker} = DatePicker;

class WeekTaskList extends Component {
    state = {
        data: this.props.data,
    };

    handleChange = (date, dateString) => {
        const now = new Date(date);
        const startWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
        const endWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay() + 7);
        this.updateData(startWeek, endWeek);
    };

    updateData = (startWeek, endWeek) => {
        const {data} = this.props;
        const newData = data.filter(({date}) => date >= startWeek && date <= endWeek);
        console.log(newData);
        this.setState({
            data: newData
        })
    };

    render(){
        return (
            <React.Fragment>
                <WeekPicker onChange={this.handleChange} disabled={this.props.loading} style={{marginLeft: '10px'}}/>
                <WeekTaskListItem data={this.state.data} loading={this.props.loading}/>
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