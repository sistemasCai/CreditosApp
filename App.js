import React from 'react';
import { StyleSheet, Text,TextInput, View,Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      text: '',
      tex1 : ''
    };
  }

  login = function(){
      console.log();
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={{paddingHorizontal : 50, height: 40, borderWidth: 1}}
        onChangeText={(text) => this.setState({text : text})}
        value={this.state.text}
        placeholder="Escribe tu correo"
      />

      <TextInput
        style={{ paddingHorizontal : 50,height: 40,borderWidth: 1}}
        onChangeText={(tex1) => this.setState({tex1: tex1})}
        value={this.state.tex1}
        placeholder="Escribe tu password"
        keyboardType="visible-password"
      />
        <Button
            onPress={()=>{console.log(this.state.text)}}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Login"
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonLogin : {
        padding:16
  }
});
