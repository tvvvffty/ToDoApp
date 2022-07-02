import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Task = (props, completedTask, taskItems) => {
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View>
                    <Ionicons name='ios-checkbox' style={styles.checkbox}/>
                </View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View>
                <Ionicons name='ios-trash-bin-sharp' style={styles.trash}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexwrap: 'wrap',
    },
    check: {
      paddingTop: 1,
      paddingLeft: 1,
      fontSize: 23,
    },
    checkbox: {
        fontSize: 25,
        width: 24, 
        height: 24, 
        borderRadius: 5,
        marginRight: 15,
        color: '#93C5FD',
    },
    itemText: {
        maxWidth: '80%',
    },
    trash: {
        fontSize: 26,
        color: '#ff0000',
    }

    
});

export default Task;