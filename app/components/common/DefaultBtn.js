import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const DefaultBtn = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Text>{ props.content }</Text>
        </TouchableOpacity>
    );
}

export default DefaultBtn
