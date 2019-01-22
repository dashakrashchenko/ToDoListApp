import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default TexInputComponent = (props) => {
    return (
        <View style={styles.inputContainer}>

            <TextInput
                style={styles.textInputContainer}
                onChangeText={props.onChangeText}
                value={props.currenttextInputString}
                clearButtonMode='always'
                placeholder='Enter your task...'
                placeholderTextColor='white'>
            </TextInput>


            <View style={styles.buttonWrapper}>
                <Button style={styles.buttonContainer}
                    title="Add task"
                    onPress={props.addItem}
                    color="black"
                //
                />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        backgroundColor: "#000",
        flexDirection: "row",
        alignContent: "center",
        padding: 15,
    },
    textInputContainer: {
        flex: 7,
        color: "#fff",
        fontFamily: "Lora",
    },
    buttonContainer: {
        color: "#000",
    },
    buttonWrapper:
    {
        flex: 3,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
})
