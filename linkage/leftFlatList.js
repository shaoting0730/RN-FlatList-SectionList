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
    ActivityIndicator,
    DeviceEventEmitter,
    ScrollView
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
            cell:0  //默认选中第一行
        };
    }
    render() {
        return (
            <FlatList
                ref='FlatList'
                style={{width:80}}
                data = {this.state.dataAry} //数据源
                renderItem = {(item) => this.renderRow(item)} //每一行render
                ItemSeparatorComponent = {()=>{return(<View style={{height:1,backgroundColor:'cyan'}}/>)}} //分隔线
                keyExtractor={this.keyExtractor}  //使用json中的title动态绑定key
            />
        );
    }
    //使用json中的title动态绑定key
    keyExtractor(item: Object, index: number) {
        return item.title
    }
    //每一行render
    renderRow =(item) =>{
        return(
            <TouchableOpacity onPress={()=>this.cellAction(item)}>
                <View style={{height:60,flexDirection:'row',alignItems:'center'}}>
                    <View style={{height:50,width:5,backgroundColor: item.index == this.state.cell ? 'red' : 'rgba(0,0,0,0)'}}/>
                    <Text style={{marginLeft:20}}>{item.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    //点击某行
    cellAction =(item)=>{
        this.setState({
            cell:item.index
        })
        DeviceEventEmitter.emit('SelectedRow',item.index); //发监听
        // this.refs.FlatList.scrollToIndex({animated: true, index: 2})
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
