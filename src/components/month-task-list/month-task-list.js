import React from 'react';
import {Badge, Calendar, Spin} from "antd";
import './month-task-list.css'
import {connect} from "react-redux";

const MonthTaskList = ({data, loading}) => {
    const dateCellRender = (item) => {
        const now = new Date(item);
        const dataByDay = data.filter(el => el.date.getDate() === now.getDate() && el.date.getMonth() === now.getMonth());
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