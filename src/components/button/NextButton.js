import React , {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import propTypes from 'prop-types';
import colors from '../../styles/colors';
import { PropTypes } from 'prop-types';

export default class NextButton extends Component{


    

    render(){

     
        const { handleNextButton , disabled} = this.props;
        const opacitystyle =  disabled ? 0.2 : 0.6

        return(
                <TouchableHighlight 
                onPress={handleNextButton} 
                style={[{opacity:opacitystyle},Styles.Button]}
                disabled={disabled}
                >
                    <Icon 
                   
                    name='angle-right'
                    color={colors.green01}
                    size={32}
                    style={StyleSheet.icon}   
                    />
                </TouchableHighlight>
        );
    }
}

NextButton.propTypes = {
    disabled: PropTypes.bool,
    handleNextButton: PropTypes.func,
  };

const Styles = StyleSheet.create({
    Button:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        height:60,
        width:60,
        backgroundColor:colors.white
    },
    icon:{
        marginRight:-2,
        marginTop:-2
    }
})