import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';


export default DeleteTaskButton = (props) => {

    return (
        <View>
            <Button icon={{ name: 'trash-2', type: 'feather', size: 25 }} onPress={() => props.onClick()} backgroundColor="transparent" />
        </View>
    );
}