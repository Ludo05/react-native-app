import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {getCharacters} from "../redux/actions";

 export class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            character: []
        }
    }

    componentDidMount() {
        // this.props.getcharacterAction();
        fetch('https://rickandmortyapi.com/api/character')
            .then(results => results.json())
            .then(data => this.setState({character: data.results}))
    }

    render() {
        console.log(this.state.character);
        return (
            <ScrollView>
               {this.state.character.map((c,index) => (
                   <View key={index}>
                       <Image source={{uri: c.image}} style={{width: 50, height: 50}}/>
                       <Text>{c.name}</Text>
                       <Text>{c.id}</Text>
                   </View>
               ))}
            </ScrollView>
        );
    }

}

// const mapStateToProps = (state) => ({
//     character:  state.getCharactersList
// });
//
// const mapDispatchToProps = {
//     getcharacterAction: getCharacters
//
// };
// export default connect(mapStateToProps,mapDispatchToProps)(Quiz);
//
