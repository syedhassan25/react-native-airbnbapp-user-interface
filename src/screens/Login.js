import React,{Component} from 'react';
import PropTypes  from 'prop-types';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {View,Text,KeyboardAvoidingView,ScrollView,StyleSheet}  from 'react-native';
import colors  from '../styles/colors';
import InputFeild from '../components/form/InputFeild';
import NextButton from '../components/button/NextButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../redux/actions'



class Login extends Component{

    constructor(props){
            super(props)
          this.state = {
              formValid:true,
              visibleloader:false,
              validEmail:false,
              emailAddress:'',
              validPassword:false
          }  

          this.handleCloseNotification = this.handleCloseNotification.bind(this);
          this.handleEmailChange = this.handleEmailChange.bind(this);
          this.handleNextButton = this.handleNextButton.bind(this);
          this.handlePasswordChange = this.handlePasswordChange.bind(this);
          this.handleToggleButton = this.handleToggleButton.bind(this);
    }


    handleToggleButton(){
        const { validEmail,validPassword} = this.state;
        if(validEmail && validPassword){
            return false;
        }
        return true;
    }

    handlePasswordChange(password){

        if(!this.state.validPassword){
                if(password.length > 4){
                        this.setState({validPassword:true})
                }
        }else if(password.length <= 4){
                this.setState({validPassword:false})
        }

    }
    handleEmailChange(email){
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        this.setState({ emailAddress: email });
        if(!this.state.validEmail){
                if(emailCheckRegex.test(email)){
                        this.setState({
                            validEmail:true
                        })
                }
        }else{
            if(!emailCheckRegex.test(email)){
                this.setState({
                    validEmail:false
                });
            }
        }

    }

    handleCloseNotification(){
        this.setState({
            formValid:true
        })
        // alert('Closing Notication')
    }



    handleNextButton(){
        
        this.setState({
            visibleloader:true
        })
        setTimeout(() => {

            const { emailAddress } = this.state;

            if(this.props.login(emailAddress,'')){
                this.setState({
                    formValid:true,
                    visibleloader:false
                })
            }else{
                this.setState({
                    formValid:false,
                    visibleloader:false
                })
            }

            // if(this.state.emailAddress === 'ss@gmail.com' && this.state.validPassword){

            //     alert("Succesfully")
            //         this.setState({
            //             formValid:true,
            //             visibleloader:false
            //         })
            // }else{
            //         this.setState({
            //             formValid:false,
            //             visibleloader:false
            //         })
            // }

        },2000)
        

    }
    render(){

        const { formValid ,visibleloader,validEmail,validPassword } = this.state;
        const ShowNotification = formValid ? false : true;

        
            console.log(this.props.LoggedInStatus);
        return(
          <KeyboardAvoidingView style={Styles.Wrapper}   behavior="height">
                <View style={Styles.ScrollViewWrapper}>
                        <ScrollView style={Styles.ScrollView}>
                      
                                    <Text  style={Styles.LoginHeader} >Log In</Text>
                                    <InputFeild autofocus={true} showCheckMark={validEmail} onChangeText={this.handleEmailChange} customStyle={{marginBottom:10}} labelcolor={colors.white} borderBottomColor={colors.white} labeltextsize = {14} textcolor={colors.black} labeltext="User name / Email" />
                                    <InputFeild  showCheckMark={validPassword} onChangeText={this.handlePasswordChange}  customStyle={{marginBottom:10}} inputType="password" labelcolor={colors.white} borderBottomColor={colors.white} labeltextsize = {14} textcolor={colors.black} labeltext="Password" />
                  
                        </ScrollView>
                        <View style={Styles.NextButton}>
                          <NextButton handleNextButton={this.handleNextButton}
                           disabled={this.handleToggleButton()}
                          />
                       </View>

                      <View style={ShowNotification ? {marginTop:10} : {} }>
                          <Notification
                            handleCloseNotification={this.handleCloseNotification}
                            ShowNotification={ShowNotification}
                            type="Error" firstline="These credentials don't Look Right" secline="Please Try Again"
                         />
                      </View>
                      <Loader modalVisible={visibleloader} animationType='fade' />
                      
                </View>
             
           </KeyboardAvoidingView>
        );
     }

}



const Styles = StyleSheet.create({
    Wrapper:{
        display:'flex',
        flex:1,
        backgroundColor:colors.green01
    },
    ScrollViewWrapper:{
        marginTop:70,
        flex:1
    },
    ScrollView:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
        flex:1
    },
    LoginHeader:{
        fontSize:20,
        flex:1,
        fontWeight:'300',
        color:colors.white,
        marginBottom:20
    },
    NextButton:{
        alignItems:'flex-end',
        right:20,
        bottom:10
    }
})

const mapStateToProps = (state) => {
 
    return(
        {
            LoggedInStatus: state.LoggedInStatus
        }
    )

}
mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);