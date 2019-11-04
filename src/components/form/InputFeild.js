import React, {Component} from 'React';
import propTypes  from 'prop-types';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    Animated,
    Easing
} from 'react-native';
import colors from '../../styles/colors';

export default class InputFeild extends Component{

    constructor(props){
        super(props)
        this.state ={
            scalecheckmarkvalue: new Animated.Value(0)
        }
    }

    scalCheckMark(value){
        Animated.timing(
            this.state.scalecheckmarkvalue,
            {
                toValue:value,
                duration:200,
                easing:Easing.easeOutBack
            }
        ).start();
    }

    render(){
        const  { autofocus,showCheckMark,onChangeText,labeltext,labeltextsize,labelcolor,textcolor,borderBottomColor,inputType,customStyle } = this.props;

        const fontSize = labeltextsize || 14;
        const color = labelcolor || colors.white;
        const inputcolor = textcolor || colors.black;
        const borderBottomcolor = borderBottomColor || 'transparent';
        const keyboardType = inputType === 'email' ? 'email-address' : 'default';

        const {scalecheckmarkvalue} = this.state;

        const iconScale = scalecheckmarkvalue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.01, 1.6, 1],
          });
      
          const scaleValue = showCheckMark ? 1 : 0;
          this.scalCheckMark(scaleValue);

        return(
                <View style={[customStyle,Styles.Wrapper]}>         
                    <Text style={[ {color,fontSize} ,Styles.label]}> {labeltext} </Text>

                    <Animated.View style={[{transform: [{ scale: iconScale }] },Styles.checkwrapper]}>
                            <Icon 
                            name="check"
                            color={colors.white}
                            size={20}
                            />
                    </Animated.View>
                    <TextInput  onChangeText={onChangeText}  
                    secureTextEntry={(inputType == 'password')} 
                    autoCorrect={false}
                    autoFocus={autofocus}
                    style={[{color:inputcolor,borderBottomColor:borderBottomcolor},Styles.inputSyle]}
                    keyboardType={keyboardType}
                    />
                </View>
        );
    }
}

InputFeild.propTypes = {
    labeltext:propTypes.string.isRequired,
    fontSize:propTypes.number,
    labelcolor:propTypes.string,
    textcolor:propTypes.string,
    borderBottomColor:propTypes.string,
    customStyle:propTypes.object,
    onChangeText:propTypes.func

}

const Styles = StyleSheet.create({
    Wrapper:{
        display:'flex',
        flex:1,
    },
    label:{
        fontWeight:'700',
        marginBottom:10
    },
    inputSyle:{
        borderBottomColor:colors.white,
        borderBottomWidth:1
    },
    checkwrapper:{
            position:'absolute',
            bottom:20,
            right:0
    }

});
