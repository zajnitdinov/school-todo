import React from 'react';
import {Layout} from "antd";
import {connect} from "react-redux";
import "antd/dist/antd.css";

import LeftMenu from "../left-menu";
import Info from "../info";
import TasksContent from "../tasks-content";

const {Sider, Content} = Layout;

const App = () => {
    return(
        <Layout style={{height: '100vh'}}>
            <Sider theme='light'>
                <LeftMenu/>
            </Sider>
            <Content className='spinner'>
                <TasksContent/>
            </Content>
            <Info/>
        </Layout>
    )

};

const mapStateToProps = ({content: {label}}) => {
    return { label }
};

export default connect(mapStateToProps)(App);