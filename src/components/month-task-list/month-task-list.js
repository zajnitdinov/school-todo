import React from 'react';
import {Badge, Calendar, Spin} from "antd";
import './month-task-list.css'
import {connect} from "react-redux";

const MonthTaskList = ({data, loading}) => {
    const dateCellRender = (item) => {
        const now = new Date(item);
        const dataByDay = data.filter(({date}) =>
            date.getDate() === now.getDate() &&
            date.getMonth() === now.getMonth() &&
            date.getFullYear() === now.getFullYear()
        );
        return (
            <ul className="events">
                {dataByDay.map(item => (
                    <li key={item.id}>
                        <Badge status='warning' text={item.title} />
                    </li>
                ))}
            </ul>
        )
    };
    if (loading) {
        return (
            <div style={{textAlign: 'center'}}>
                <Spin />
            </div>
        )
    }
    return (
        <Calendar dateCellRender={dateCellRender}/>
    );
};

const mapStateToProps = ({items: {data, loading}}) => {
    return {data, loading}
};

export default connect(mapStateToProps)(MonthTaskList);