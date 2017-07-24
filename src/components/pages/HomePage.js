import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const HomePage = ({home}) => <div className="homeContainer">{home.title}</div>;

const mapStateToProps = (state, ownProps) => {
    return {
        home: state.home
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    };
};

HomePage.propTypes = {
    home: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage);

