
import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
    Animated,
    Dimensions,
    Image
} from 'react-native';


import Svg ,{Rect ,Stop  ,RadialGradient ,Defs} from "react-native-svg"
const {width ,height}=Dimensions.get("window");

 const product_data=[
    {
        id:"1",
        title:"TMA-2 HD Wireless",
        subTite:"Wireless" ,
        description:"The ultimate listening experience. Highly detailed and precise sound representation, wirelessly transmitted ",
        price:"25$",
        bg:"#16cdc1",
        urlimg:"https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-hd-wireless-IigQOPQt-large.png"

    },
    {
        id:"2",
        title:"TMA-2 HD Wireless 2",
        subTite:"Wireless 2" ,
        description:"The ultimate listening experience. Highly detailed and precise sound representation, wirelessly transmitted ",
        price:"20$",
        bg:"purple",
        urlimg:"https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-hd-DnUVYeYY-large.png"

    },
    {
        id:"3",
        title:"TMA-2 HD Wireless",
        subTite:"Wireless" ,
        description:"The ultimate listening experience. Highly detailed and precise sound representation, wirelessly transmitted ",
        price:"25$",
        bg:"red",
        urlimg:"https://6f836c397566f8a68572-e2de800189bc8603e0746245fbc4e3cb.ssl.cf3.rackcdn.com/tma-2-move-kua6P7RY-large.png"

    }
  
]




export default class App extends Component {
  _scrollX =new Animated.Value(0)
  renderItem =(item ,i)=>{
    return(
      <View key={item.id} style={[styles.container ,styles.item]}>
      <Image 
      style={styles.image}
       source={{uri: item.urlimg}} />
     <View style={styles.metacontainer}>
      <Text style={[styles.font ,styles.title]}>{item.title}</Text>
      <Text style={[styles.font ,styles.subTite]} >{item.subTite}</Text>
      <Text style={[styles.font ,styles.description]} >{item.description}</Text>
       <Text style={[styles.font , styles.price]}>{item.price}</Text>
     </View>
     {this.renderRadiusGradient(item.bg)}
      </View>
    )

  }


  renderRadiusGradient =(color) =>{
    return(
      <View style={styles.svgContainer}>
      <Svg height={height} 
      width={width} 
      style={styles.bgRadialGradient} >
      <Defs>
      <RadialGradient 
        id="grad"
       cx="50%"
      cy="35%"
      r="60%"
      gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0%" stopColor="#fff" stopOpacity="1" />
      <Stop offset="100%" stopColor={color} stopOpacity="1" />
</RadialGradient >
      </Defs>
       <Rect
    x="0"
    y="0"
    width={width}
    height={height}
    fill={`url(#grad)`} 
    fillOpacity=".9"
  />
      
      </Svg>
      </View>
    )
  }
  render() {
    return (
      <View>
       <Animated.ScrollView 
       pagingEnabled
       scrollEventThrottle={16}
       horizontal
       onScroll={Animated.event(
         [{nativeEvent:{contentOffset :{x:this._scrollX}}}],
         {useNativeDriver: true}
       )}
       contentContainerStyle={styles.ScrollViewContainer}
       >
       {
         product_data.map((item ,i)=>this.renderItem(item, i)
         )
       }
       </Animated.ScrollView>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  ScrollViewContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  }
  ,container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  item:{
    width,
    height,
    alignItems:"center"

  }
  ,
  metacontainer:{
    alignItems:"center",
    justifyContent:"flex-end",
    backgroundColor:"transparent",
    padding:15
  }
  ,title:{
        fontSize:36,
        fontWeight:"900"
  },
  subTite:{
    fontSize:20,
        fontWeight:"900"

  },
  description:{
    fontSize:14,
       marginVertical: 15,
       textAlign:"center"

  },
  price:{
      fontSize:42,
      fontWeight:"400"
  },
  font:{
    color:"#222"

  },
  image:{
    height:height*.65,
    width:width*.85,
    resizeMode:"contain"

  },
  svgContainer:{
position:"absolute",
top:0,
left:0,
zIndex:-1
  }
})