import React,{Component}  from 'react';
import {Text,View,TouchableOpacity,
    StyleSheet,
    Easing,
    Animated
} from 'react-native';
import colors from '../styles/colors';
import {PropTypes} from 'prop-types';

import Icon from 'react-native-vector-icons/dist/FontAwesome';


export default class Notification extends Component{

    constructor(props) {
        super(props);
        this.state = {
            positionvalue: new Animated.Value(-60)
        }
        this.CloseNotification = this.CloseNotification.bind(this)
        this.AnimatedFuncition = this.AnimatedFuncition.bind(this)
     
    }

    CloseNotification(){
        this.props.handleCloseNotification()
    }

    AnimatedFuncition(value){
        const { positionvalue } = this.state;
        Animated.timing(
          positionvalue,
          {
              toValue:value,
              duration:300,
              velocity:3,
              tension:2,
              friction:8,
              easing:Easing.easeOutBack

          }  
        ).start();
    }

    render(){

        const  { type,firstline,secline,ShowNotification } = this.props;

        ShowNotification ? this.AnimatedFuncition(0) : this.AnimatedFuncition(-60);
        
        
        const { positionvalue } = this.state;

      
    
  

        return(
            <Animated.View style={[{ marginBottom : positionvalue} , Styles.wrapper]}>
                <View style={Styles.contentNotification}>
                    <Text style={Styles.errortext}>{type}</Text>
                    <Text style={Styles.errorMessage}>{firstline}</Text>
                    <Text style={Styles.errorMessage}>{secline}</Text>
                </View>
                <TouchableOpacity style={Styles.CloseButton}
                onPress={this.CloseNotification.bind(this)}
                >
                    <Icon 
                        name='times'
                        size={20}
                        color='grey'
                    />
                </TouchableOpacity>
            </Animated.View> 
        );
    }

}

Notification.propTypes = {
        ShowNotification:PropTypes.bool.isRequired,
        type:PropTypes.string,
        firstline:PropTypes.string,
        secline:PropTypes.string,
        handleCloseNotification:PropTypes.func
}
const Styles = StyleSheet.create({
    wrapper:{
        width:'100%',
        height:60,
        padding:10,
        backgroundColor:colors.white
    },
    contentNotification:{
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems:'flex-start'
    },
    errortext:{
        color:'red',
        fontSize:14,
        marginRight:5,
        marginBottom:2
    },
    errorMessage:{
        marginBottom:2,
        fontSize:12
    },
    CloseButton:{
        right:10,
        top:10,
        position:'absolute'
    }
})

