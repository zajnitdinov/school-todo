import React from 'react';
import {List, DatePicker, Spin} from "antd";
import {connect} from "react-redux";
import Item from "../list-item";

const {WeekPicker} = DatePicker;

const WeekListTasksItems = ({ data, loading }) => {

    const getItemWeekday = (data, day) => {
        return data.filter(item => item.date.getDay() === day);
    };

    const renderItems = [
        {
            weekday: 'Понедельник',
            items: getItemWeekday(data, 1)
        }, {
            weekday: 'Вторник',
            items: getItemWeekday(data, 2)
        }, {
            weekday: 'Среда',
            items: getItemWeekday(data, 3)
        }, {
            weekday: 'Четверг',
            items: getItemWeekday(data, 4)
        }, {
            weekday: 'Пятница',
            items: getItemWeekday(data, 5)
        }, {
            weekday: 'Суббота',
            items: getItemWeekday(data, 6)
        }, {
            weekday: 'Воскресенье',
            items: getItemWeekday(data, 7)
        }
    ];

    if (loading) {
        return (
            <div style={{textAlign: 'center'}}>
                <Spin size='large' />
            </div>
        )
    } else {
        return (
            renderItems.map(item => {
                if (item.items.length > 0){
                    return (
                        <List itemLayout="horizontal"
                              key={item.weekday}
                              bordered
                              style = {{margin: '10px'}}
                              header={<b>{item.weekday}</b>}
                              loading={loading}
                              dataSource={item.items}
                              renderItem=
                                  {(item) => <Item {...item}/>}
                        />
                    )
                }
            })
        )
    }
};

const WeekListTasks = (props) => {
    console.log(props);
    return (
        <React.Fragment class>
            <WeekPicker disabled={props.loading} style={{marginLeft: '10px'}}/>
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