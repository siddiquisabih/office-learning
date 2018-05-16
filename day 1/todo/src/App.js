import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import axios from "axios"


class App extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      pass: ''
    }
  }

  getData() {
    console.log(this.state.username)
    console.log(this.state.pass)


    axios.get(`http://10.20.1.125:3000/api/getData/${this.state.username}`)

      .then((res) => {
        alert('success ' + JSON.stringify(res.data[0].userName))
      })
      .catch((err) => {
        alert('error ' + err)

      })



  }


  sendData() {

    var data = {
      userName: this.state.username,
      password: this.state.pass
    }

    axios.post('http://10.20.1.125:3000/api/addUser', data)

      .then((res) => {
        alert('success ' + JSON.stringify(res.data))
      })
      .catch((err) => {
        alert('error ' + err)

      })

  }





  render() {
    return (
      <View >
        <TextInput placeholder='Enter Name' onChangeText={(text) => { this.setState({ username: text }) }} />
        <TextInput placeholder='enter password' onChangeText={(text) => { this.setState({ pass: text }) }} />


        <Button title='Send' onPress={this.sendData.bind(this)} />


        <Text></Text>
        <Button title='Get' onPress={this.getData.bind(this)} />


      </View>
    );
  }
}
export default App

