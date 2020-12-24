import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
 
function Home(){

return(
    <View style={styles.header}>
        <Text style={styles.text}>ToDo</Text>
    </View>
)
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 12,
        backgroundColor: 'darkslateblue'
    },
    text: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center'
    }
})

export default Home