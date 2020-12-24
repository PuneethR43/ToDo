import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'
// import Icon from 'react-native-vector-icons/dist/FontAwesome'

function List(props){
    return(
        <TouchableOpacity style={styles.list}>
            <View style={styles.listItem}>
                <Text style={styles.listItemText}>
                    {props.item.name}
                </Text>
                <Icon 
                    name = "remove-circle" 
                    style={styles.icon} 
                    onPress = {() => props.remove(props.item.id)} 
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list: {
        padding: 15,
        borderBottomWidth: 1,
        backgroundColor: '#f8f8f8'
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 20
    },
    icon: {
        fontSize: 25,
        color: 'brown'
    }
})

export default List