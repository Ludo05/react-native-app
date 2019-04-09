import React, {Component} from 'react'
import { View, StyleSheet, Text, Button, Platform, Image} from 'react-native';
import {Header} from "../sections/Header";
import styles from 'styled-components';
import {Menu} from "../sections/Menu";

const Views = styles.View`
    background-color: ${Platform.OS === 'android' ? 'blue' : 'white'}
    border: solid 2px black
`;

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: false
        }
    }
    static navigationOptions = {
        header: null
    };

    changeState = () => {
        this.setState(prevState => ({text: !prevState.text}))
    };
    render(){
        const {text} = this.state;
        let m = text ? 'This is true' : 'This is false';
        const {navigate} = this.props.navigation;

        return(
            <Views style={{flex: 1}}>
                <Header message={'Log in Please'}/>
                <Image style={{flex: 7}} source={require('../images/Gon.png')}/>
                <Text style={{flex: 3}}>HOME FILEEEEE</Text>
                <Text style={{flex: 3}}>{m}</Text>
                <Menu navigate = {navigate}/>
                <Button title='Click Me' onPress={this.changeState}/>
            </Views>
        )
    }


}