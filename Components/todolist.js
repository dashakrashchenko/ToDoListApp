import React, { Component } from 'react';
import { Text, View, TextInput, Button, FlatList } from 'react-native';

export default class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.tasks = [];
        this.state = { textInputString: '', taskholder: [] };
    }

    AddItem = () => {
        this.tasks.push(this.state.textInputString);
        this.setState({ taskholder: [...this.tasks] })
        this.setState({ textInputString: '' })
    }

    render() {
        return (
            <View>
                <TextInput style={{ height: 70, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(task) => this.setState({ textInputString: task })}
                    value={this.state.textInputString}
                    clearButtonMode='always'
                    placeholder='Enter your task'
                />
                <Button
                    title="Add task"
                    onPress={this.AddItem}
                />
                <FlatList
                    data={this.state.taskholder}
                    keyExtractor={(index) => index.toString()}
                    renderItem={({ item }) =>
                        <Text>{item}</Text>}
                />
            </View>
        );
    }
}