import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface MyTitle{
    title: string,
}

export class MessageComponent extends Component < MyTitle > {

    constructor(props: any){
        super(props);   
    }

    render(){
        return(
            <View style={ styles.container }>
                <Text style={ styles.title }> { this.props.title } </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'aqua',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        color: 'black'
    }

});