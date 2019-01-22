import React, { Component } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';


export default class TaskCompleteCheckBox extends Component {
    constructor(props) {
        super(props);
        this.tasks = [];
        this.state = { isDone: false, };
    }


    render() {
        return (
            <View>
                <CheckBox
                    containerStyle={{ backgroundColor: "transparent", borderWidth: 0, width: 50, marginRight: 0 }}
                    iconType='feather'
                    checkedIcon='check-circle'
                    uncheckedIcon='circle'
                    checkedColor="white"
                    uncheckedColor="white"
                    checked={this.state.isDone}
                    onPress={() => this.setState({ isDone: !this.state.isDone })}
                />
            </View>
        );
    }
}

