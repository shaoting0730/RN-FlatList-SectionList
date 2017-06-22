/**
 * Created by shaotingzhou on 2017/6/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    SectionList,
    Dimensions
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

    renderItem = (item) => {
        return (
            <View style={{height:60,justifyContent:'center',marginLeft:15}}>
                <Text>{item.item.name}</Text>
            </View>
        )
    }

    sectionComp = (item) => {
        return (
            <View style={{height:30,backgroundColor:'#DEDEDE',justifyContent:'center',alignItems:'center'}}>
                <Text>{item.section.title}</Text>
            </View>
        )
    }

    render() {
        return (
                <SectionList
                    style={{width:width-80}}
                    renderSectionHeader={(item)=>this.sectionComp(item)}
                    renderItem={(item)=>this.renderItem(item)}
                    ItemSeparatorComponent = {()=>{return(<View style={{height:1,backgroundColor:'black'}}/>)}}
                    sections={this.state.sectionData}
                />
        );
    }
}