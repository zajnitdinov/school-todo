import React from 'react';
import {List} from "antd";
import {connect} from "react-redux";
import Item from "../list-item";

const WeekListTasks = ({data, loading}) => {

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

    return (
        renderItems.map(item => {
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
        })

    );
};

const mapStateToProps = ({items:{data,loading}}) => {
    return {
        data, loading
    }
};

export default connect(mapStateToProps)(WeekListTasks);