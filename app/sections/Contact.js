import React from 'react';
import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native';
import {Header} from "./Header";

export class Contact extends React.Component {
 static  navigationOptions = {
     header: null
 };

    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            emailInput: '',
            messageInput: ''
        }
    }

    clearState = () => this.setState({nameInput: '', emailInput: '', messageInput: ''})

    submit = () => this.props.navigation.goBack();


    render() {
        console.log(this.state.nameInput);
        return (
            <View style={styles.container}>
                <Header message={'Please Login'}/>
                <TextInput onChangeText={(text) => this.setState({nameInput: text})} style={{flex: 7, borderColor: 'red', backgroundColor: 'red'}}>Hello</TextInput>
                <Text style={{flex: 7}}>Something Else</Text>
                <Button onPress={this.submit} title={'Click Me'}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})