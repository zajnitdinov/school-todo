import React, {Component} from 'react';
import {DatePicker} from "antd";
import {connect} from "react-redux";
import WeekTaskListItem from "../week-task-list-item";
import locale from 'antd/es/date-picker/locale/ru_RU';
import moment from "moment";
import 'moment/locale/ru';

const {WeekPicker} = DatePicker;

class WeekTaskList extends Component {
    state = {
        data: [],
    };

    componentDidMount() {
        this.updateData(moment([]));
    };

    updateData = (selectedDate) => {
        const {data} = this.props;
        const newData = data.filter(({date}) =>
            moment(date) >= moment(selectedDate).startOf('week')
            && moment(date) <= moment(selectedDate).endOf('week'));

        this.setState({
            data: newData,
        });
    };

    render() {
        const {data} = this.state;
        const {loading} = this.props;
        return (
            <React.Fragment>
                <WeekPicker locale={locale}
                            defaultValue={moment([])}
                            onChange={this.updateData}
                            disabled={loading}
                            format={'W-я неделя'}
                            style={{marginLeft: '10px'}}/>
                <WeekTaskListItem data={data}
                                  loading={loading}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({items: {data, loading}}) => {
    return {
        data, loading
    }
};

export default connect(mapStateToProps)(WeekTaskList);