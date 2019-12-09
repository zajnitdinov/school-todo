import React from 'react';
import {Layout} from "antd";
import {connect} from "react-redux";
import "antd/dist/antd.css";

import Menu from "../common/menu";
import Info from "../common/info";
import TasksContent from "../user/content";

const {Sider, Content: AntContent} = Layout;

const App = () => {
    return(
        <Layout style={{height: '100vh'}}>
            <Sider theme='light'>
                <Menu/>
            </Sider>
            <AntContent style={{position: 'relative'}}>
                <TasksContent/>
            </AntContent>
            <Info/>
        </Layout>
    )

};

const mapStateToProps = ({content: {label}}) => {
    return { label }
};

export default connect(mapStateToProps)(App);