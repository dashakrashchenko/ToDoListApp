import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import TextInputComponent from './TextInputComponent';
import FlatListComponent from './FlatListComponent';
import TaskCompleteCheckBox from './TaskCompleteCheckBox';
import DeleteTaskButton from './DeleteTask';
import { SafeAreaView } from 'react-native';
import gradients from '../gradients.json';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.json = JSON.parse(JSON.stringify(gradients));
        this.tasks = [];
        this.state = { textInputString: '', taskholder: [] };
    }
    AddItem = () => {
        this.tasks.push(this.state.textInputString);
        this.setState({ taskholder: [...this.tasks] })
        this.setState({ textInputString: '' })
    }

    onDelete(item) {
        var index = this.tasks.indexOf(item);
        this.tasks.splice(index, 1);
        this.setState({ taskholder: [...this.tasks] });
    }

    renderItem = ({ item }) => {
        return (
            <View style={{ margin: 10 }}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={this.json[1].color} style={styles.gradientContainer}>
                    <TaskCompleteCheckBox style={{ width: "10%" }} />
                    <Text style={{ width: "65%", fontFamily: "Lora", fontSize: 20 }}>{item}</Text>
                    <DeleteTaskButton style={{ width: "25%" }} onClick={() => this.onDelete(item)} />
                </LinearGradient>
            </View>
        );
    }

    render() {
        return (

            <SafeAreaView style={{ flex: 3 }}>
                <View style={styles.headerContainer}>
                    <Header
                        centerComponent={{ text: 'TODO list', style: { fontFamily: "Montserrat", fontSize: 28, fontStyle: "italic", fontWeight: "bold", color: "white", } }}
                        backgroundColor={"black"}
                        opacity={0.9}
                    // statusBarProps={{ barStyle: 'light-content' }}
                    />
                </View>
                <View style={{ backgroundColor: "#fff", flex: 9, opacity: 0.85 }}>
                    <FlatListComponent
                        taskholder={this.state.taskholder}
                        keyGenerate={(index) => index.toString()}
                        RenderItem={this.renderItem}
                    />
                </View>
                <View style={styles.container}>
                    <TextInputComponent
                        onChangeText={(task) => this.setState({ textInputString: task })}
                        currenttextInputString={this.state.textInputString}
                        addItem={this.AddItem}
                    />
                </View>

            </SafeAreaView>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#030307",
        opacity: 0.9,
        flex: 1,
    },
    gradientContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10,
        height: 80,
    },
    headerContainer: {
        flex: 1,
        flexDirection: "column",
        alignContent: "space-between",
    },

})

