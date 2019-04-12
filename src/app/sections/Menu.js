import React, {Component} from 'react'
import {View, Alert, StyleSheet} from 'react-native';
import {Button} from "../Components/Button";
export class Menu extends Component{
    OnPress = () => {
        Alert.alert("You tapped Me");
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <Button
                        buttonName='LESSON'
                        buttonStyle={styles.buttonStyles}
                        onPress={this.OnPress}
                        textStyle={styles.buttonText}
                    />
                    <Button
                        buttonName='REGISTER'
                        buttonStyle={styles.buttonStyles}
                        onPress={this.OnPress}
                        textStyle={styles.buttonText}
                    />
                </View>

                <View style={styles.buttonRow}>
                    <Button
                        buttonName='BLOG'
                        buttonStyle={styles.buttonStyles}
                        onPress={this.OnPress}
                        textStyle={styles.buttonText}
                    />
                    <Button
                        buttonName='CONTACT'
                        buttonStyle={styles.buttonStyles}
                        onPress={() => this.props.navigate('ContactRT')}
                        textStyle={styles.buttonText}
                    />
                </View>

                <View style={styles.buttonRow}>
                    <Button
                        buttonName='QUIZ'
                        buttonStyle={styles.buttonStyles}
                        onPress={() => this.props.navigate('QuizRT')}
                        textStyle={styles.buttonText}
                    />
                    <Button
                        buttonName='ABOUT'
                        buttonStyle={styles.buttonStyles}
                        onPress={this.OnPress}
                        textStyle={styles.buttonText}
                    />
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