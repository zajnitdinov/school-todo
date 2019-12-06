import React from 'react';
import {Layout} from "antd";
import {connect} from "react-redux";
import "antd/dist/antd.css";

import LeftMenu from "../menu";
import Info from "../info";
import TasksContent from "../content";

const {Sider, Content: AntContent} = Layout;

const App = () => {
    return(
        <Layout style={{height: '100vh'}}>
            <Sider theme='light'>
                <LeftMenu/>
            </Sider>
            <AntContent className='spinner'>
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