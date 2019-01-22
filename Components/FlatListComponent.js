import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';


export default FlatListComponent = (props) => {
    return (

        <View>
            <ScrollView>
                <FlatList
                    data={props.taskholder}
                    refreshing={false}
                    keyExtractor={props.keyGenerate}
                    renderItem={props.RenderItem}
                >
                </FlatList>
            </ScrollView>
        </View>
    );
}


