import React, {Component} from 'react'
import {View, TouchableOpacity, Text, Alert, StyleSheet} from 'react-native';

export class Menu extends Component{
    OnPress = () => {
        Alert.alert("You tapped Me");
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.OnPress}>
                    <Text style={styles.buttonText}>LESSONS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.OnPress}>
                        <Text  style={styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.OnPress}>
                        <Text  style={styles.buttonText}>BLOG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles}  onPress={() => this.props.navigate('ContactRT')}>
                        <Text  style={styles.buttonText}>CONTACT</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.OnPress}>
                        <Text  style={styles.buttonText}>QUIZ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.OnPress}>
                        <Text  style={styles.buttonText}>ABOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#35606a'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'white',
        borderBottomWidth: 1
    },
    buttonStyles: {
        backgroundColor: '#35606a',
        height: '50%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }


})