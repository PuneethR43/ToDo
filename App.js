import React from 'react'
import { View, StyleSheet, FlatList,Text } from 'react-native'
import { v4 as uuidv4 } from 'uuid'
import AddTask from './components/AddTask'
import Home from './components/Home'
import List from './components/List'

class App extends React.Component{

constructor(){
  super()
  this.state={
    tasks:[ 
      {id:uuidv4(), name:'assignments'},
      {id:uuidv4(), name:'shopping'},
      {id:uuidv4(), name:'swimming'},
      {id:uuidv4(), name:'watch movie'}
    ]
  }
}
  remove = (id) => {
    this.setState((prevState) => {
      return{
        tasks: prevState.tasks.filter((ele) => ele.id != id)
      }
    })
  }

  add = (text) => {
    this.setState((prevState) => {
      return{
        tasks: prevState.tasks.concat([{id:uuidv4(), name:text}])
      }
    })
  }

  render(){
    return(
      <View>
        <Home/>
        <FlatList 
          data={this.state.tasks}
          renderItem={({ item }) => (
            <List item = {item} remove = {this.remove} />
          )}
        />
        <View style={styles.addTask}>
        <AddTask add = {this.add} />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  app:{
    flex: 1,
    paddingTop:60
  },
 addTask:{
   paddingTop:5
 }
})
export default App