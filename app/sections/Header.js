import React from 'react';
import { Text, View, StyleSheet, Platform} from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    toggleUser = () => {
        this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn
        }));
    }
    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View style={styles.headerStyle}>
            <Text onClick={this.toggleUser} style={styles.headText}>{display}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: Platform.OS === 'ios' ? 'white' : 'black',
        fontSize: 20
    },
    headerStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: 'grey',
        flex: 1
    }
});
