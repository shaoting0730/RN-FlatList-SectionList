/**
 * Created by shaotingzhou on 2017/6/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    SectionList,
    Dimensions,
    DeviceEventEmitter,
    ScrollView
} from 'react-native';
var {width,height} = Dimensions.get('window');
var sectionData = []
export default class RightSectionList extends Component {
    // 构造
    constructor(props) {
        super(props);
        sectionData = this.props.data.food_spu_tags
        this.state = {
            sectionData:sectionData
        };
    }
    //行
    renderItem = (item) => {
        return (
            <View style={{height:60,justifyContent:'center',marginLeft:15}}>
                <Text>{item.item.name}</Text>
            </View>
        )
    }
    //头
    sectionComp = (section) => {
        return (
            <View style={{height:60,backgroundColor:'#DEDEDE',justifyContent:'center',alignItems:'center'}}>
                <Text >{section.section.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <SectionList
                ref='sectionList'
                style={{width:width-80}}
                renderSectionHeader={(section)=>this.sectionComp(section)} //头
                renderItem={(item)=>this.renderItem(item)} //行
                ItemSeparatorComponent = {()=>{return(<View style={{height:1,backgroundColor:'black'}}/>)}}//分隔线
                sections={this.state.sectionData} //数据
            />

        );
    }

    componentDidMount() {
        //收到监听
        this.listener = DeviceEventEmitter.addListener('SelectedRow',(e)=>{
            // console.log(e + 1) // 左边点击了第几行
            // console.log(sectionData) // 数据源
            // console.log(sectionData[e])
            // console.log(sectionData[e].data.length)
// SectionList实现scrollToIndex需要修改VirtualizedSectionList和SectionList源码
            if(e > 0){
                //计算出前面有几行
                var count = 0
                for(var i = 0; i < e; i++){
                    count += sectionData[i].data.length +1
                }
                this.refs.sectionList.scrollToIndex({animated: true, index: count})
            }else {
                this.refs.sectionList.scrollToIndex({animated: true, index: 0})  //如果左边点击第一行,右边则回到第一行
            }


        });
    }

    componentWillUnmount(){
        // 移除监听
        this.listener.remove();
    }
}