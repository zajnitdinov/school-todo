import React from 'react';
import {Badge, Calendar} from "antd";
import './month-list-tasks.css'
import {connect} from "react-redux";

const MonthListTasks = ({data}) => {
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

    return (
        <Calendar dateCellRender={dateCellRender}/>
    );
};

const mapStateToProps = ({items: {data}}) => {
    return {data}
};

export default connect(mapStateToProps)(MonthListTasks);