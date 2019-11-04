import React, {Component} from 'react';
import PropTypes  from 'prop-types';
import { View , Text ,TouchableHighlight, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

class RoundedButton extends Component{
    render(){
        const {text,textcolor,background,icon,handleOnPress} = this.props;
        const  backgroundColor = background || 'transparent';
        const color = textcolor || colors.black;
        return(
            <TouchableHighlight onPress={handleOnPress} style={[{backgroundColor},Styles.Wrapper]}>
                <View style={Styles.buttonTextWrapper}>
                    {icon}    
                    <Text style={[{color},Styles.buttonText]}>
                    {text}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

RoundedButton.propTypes  = {
    text:PropTypes.string.isRequired,
    textcolor:PropTypes.string,
    background:PropTypes.string,
    icon:PropTypes.object,
    handleOnPress:PropTypes.func.isRequired
   
}

const Styles = StyleSheet.create({
    Wrapper:{
        display:'flex',
        padding:15,
        borderRadius:40,
        borderWidth:1,
        borderColor:colors.white,
        marginBottom:15,
        alignItems :'center'
    },
    buttonText:{
        fontSize:17,
        textAlign:'center',
        width:'100%',
        textAlign:'center'
    },
    buttonTextWrapper:{
        flexDirection:'row',
        justifyContent:'flex-end'
    }
})

export default RoundedButton;
