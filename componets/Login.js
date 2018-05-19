import React from 'react';
import { 
    Text,
    TextInput,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { StackNavigator } from "react-navigation";
class Login extends React.Component {

    constructor(props){
        super(props);
    this.state = { 
        username : '',
        password : ''
     }

    }
    
    componentDidMount()
    {
        this._loadInitialState().done();
    }

    _loadInitialState = async() => {
        var value = await AsyncStorage.getItem('user');
        if(value !== null){
            this.props.navigation.navigate('profile');
        }
    }
    render() {

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}> - Login - </Text>
                    
                    <TextInput placeholder='username'
                    style={styles.textInput}
                    onChangeText={(username) => {this.setState({username})}}
                    underlineColorAndroid='transparent'/>

                    <TextInput placeholder='Password'
                    style={styles.textInput}
                    onChangeText={(username) => {this.setState({username})}}
                    underlineColorAndroid='transparent'/>

                    <TouchableOpacity
                    style={styles.btn}
                    onPress={this.login}>
                        <Text>Log in</Text>
                    </TouchableOpacity>
                        
                </View>
            </KeyboardAvoidingView>
             
        );
    }
    login = () => {
        //alert(this.state.username);
        this.props.navigation.navigate('Dashboard');
    }
}

const styles = StyleSheet.create({
    wrapper : {
        flex : 1
    },
    container : {
        flex : 1,
        alignItems :'center',
        justifyContent : 'center',
        backgroundColor :'#2896d3',
        paddingLeft: 40,
        paddingRight:40
    },
    header : {
        fontSize : 24,
        marginBottom : 60,
        color : '#fff',
        fontWeight : 'bold'
    },
    textInput:{
        alignSelf : 'stretch',
        padding : 16,
        marginBottom : 20,
        backgroundColor : '#fff'
    },
    btn : {
        alignSelf : 'stretch',
        backgroundColor : '#01c853',
        padding: 20,
        alignItems : 'center'
    }
})

export default Login;