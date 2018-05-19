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
class Dashboard extends React.Component {
    state = {  }
    render() {
        return (
            <View style={styles.container}>
                <Text>Bienvenido a Dashboard</Text>
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems :'center'
    }    
})

export default Dashboard;