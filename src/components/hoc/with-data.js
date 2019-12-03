import React, { Component} from "react";
import {connect} from "react-redux";
import {fetchItems} from "../../actions";
import {Spin} from "antd";
import Service from "../../services/service";
import compose from "../../utils/compose";

const withData = (View) => {
    return class extends Component {

        componentDidMount() {
            this.props.getData();
        };

        render(){
            const { data } = this.props;

            if (this.props.loading) return <Spin/>;

            return <View {...this.props} data={data}/>
        }
    }
};

const mapStateToProps = ({items: {data, loading}}) => {
    return {data, loading};
};

const mapDispatchToProps = (dispatch) =>  {
    return {
        getData: fetchItems(Service, dispatch)
    };

};

export default compose(connect(mapStateToProps, mapDispatchToProps))(withData);