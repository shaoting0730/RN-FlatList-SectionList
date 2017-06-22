/**
 * Created by shaotingzhou on 2017/6/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    Dimensions,
    RefreshControl,
    FlatList,
    ActivityIndicator
} from 'react-native';
var {width,height} = Dimensions.get('window');
var dataAry = []

export default class LeftFlatList extends Component{
    // 构造
    constructor(props) {
        super(props);
        dataAry = this.props.data.food_spu_tags
        this.state = {
            dataAry: dataAry,
        };
    }
    render() {
        return (
            <FlatList
                style={{width:80}}
                data = {this.state.dataAry}
                renderItem = {(item) => this.renderRow(item)}
                ItemSeparatorComponent = {()=>{return(<View style={{height:1,backgroundColor:'cyan'}}/>)}}
                keyExtractor={this.keyExtractor}
            />
        );
    }
    keyExtractor(item: Object, index: number) {
        return item.title
    }
    //listView的renderRow
    renderRow =(item) =>{
        return(
            <View style={{height:60,flexDirection:'row',alignItems:'center'}}>
                 <View style={{height:50,width:5,backgroundColor:'yellow'}}/>
                 <Text style={{marginLeft:20}}>{item.item.title}</Text>
            </View>
        )
    }

};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});
