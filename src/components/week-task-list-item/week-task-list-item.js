import {Empty, List, Spin} from "antd";
import Item from "../task-list";
import React from "react";

const WeekTaskListItem = ({data, loading}) =>{
    const renderLists = () => {
        return(items.map(renderList))
    };

    const renderList = (item) => {
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
    };

    const getItemWeekday = (data, day) => data.filter(item => item.date.getDay() === day);

    const items = [
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
    }

    if (data.length > 0) {
        return (
            renderLists()
        )
    }

    return <Empty />
};

export default WeekTaskListItem;