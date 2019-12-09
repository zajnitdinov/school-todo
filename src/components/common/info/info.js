import React from 'react';
import {Drawer, Typography} from "antd";
import {connect} from 'react-redux'
import {siderInfo} from "../../../actions";

const {Title} = Typography;

const Info = ({item, closeSider}) => {
    const {visible, title, description} = item;
    const propsForDrawer = {
        visible: visible,
        closable: true,
        maskClosable: true,
        width: '500px',
        keyboard: true,
        onClose: closeSider
    };
    return (
        <Drawer {...propsForDrawer} >
            <Title>
                {title}
            </Title>
            {description}
        </Drawer>
    );
};

const mapStateToProps = ({ info }) => {
    return {
        item: info
    }
};

const mapDispatchToProps = {
    closeSider: () => siderInfo(0)
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);