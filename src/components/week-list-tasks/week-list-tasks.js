import React from 'react';
import {List} from "antd";
import {connect} from "react-redux";

const WeekListTasks = ({data}) => {
    const getWeekDay = (date) => {
        switch (date) {
            case 1:
                return 'Понедельник';
            case 2:
                return 'Вторник';
            default:
                return 'test func';
        }

    };
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        title={<a href="https://ant.design">{getWeekDay(item.date.getDay())}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
            )}
        />
    );
};

const mapStateToProps = ({items : {data}}) => {
    return {
        data
    }
};

export default connect(mapStateToProps)(WeekListTasks);