import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'

import { increment } from '../actions/counterActions'

import DefaultBtn from '../components/common/DefaultBtn'

import { HomeStyles } from '../styles/'

class Home extends Component {
    render() {
        const { count, increment } = this.props;
        const { container, welcome } = HomeStyles;

        return (
            <View style={container}>
                <Text style={welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={welcome}>
                    { count }
                </Text>
                <DefaultBtn onPress={increment} content='Click Me' />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { count } = state.counter;
    return {
        count: count
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: bindActionCreators(increment, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
