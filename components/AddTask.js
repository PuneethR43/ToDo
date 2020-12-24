import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Entypo'

class AddTask extends React.Component{
    constructor(props){
        super(props)
        this.state={
            text: ''
        }
    }

    handleChange = (textValue) => {
        this.setState({text:textValue})
    }

    handleAdd = () => {
        this.props.add(this.state.text)
        this.setState({text:''})
    }

render(){
    return(
        <View >
            <TextInput 
                placeholder='Add Task'
                onChangeText={this.handleChange} 
                value = {this.state.text}
            />
            {/* <TouchableOpacity onPress={()=>this.props.add(this.state.text)}>  */}
            <TouchableOpacity onPress={this.handleAdd}>
                <Text style={styles.button}>
                    Add <Icon 
                            name="add-to-list" 
                            style={{fontSize:15}}
                        />
                </Text>
                
            </TouchableOpacity>
        </View>
    )
    }
}
const styles = StyleSheet.create({
    button: {
        padding: 12,
        backgroundColor: '#AAD4C8',
        margin: 5,
        borderRadius: 20,
        width: 80
    },
    btnTxt: {
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        height: 60,
        padding: 8,
        fontSize: 20,
    }
})

export default AddTask