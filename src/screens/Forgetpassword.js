import React , {Component} from 'react';
import {View,Text,KeyboardAvoidingView,StyleSheet,ScrollView } from 'react-native';
import colors from '../styles/colors';
import InputFeild from '../components/form/InputFeild';
import NextButton  from '../components/button/NextButton'
import Notification  from '../components/Notification'
import Loader  from '../components/Loader'

export default class Forgetpassword extends Component{

    constructor(props){
            super(props)

            this.state ={
                formValid:true,
                visibleLoader:false,
                validEmail:false,
                emailAddress:''
            }

            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.goTOnextStep = this.goTOnextStep.bind(this);
            this.handleCloseNotification = this.handleCloseNotification.bind(this);
    }

    handleCloseNotification(){
        this.setState({
            formValid:true
        })
    }
    handleEmailChange(email){

        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
            this.setState({
                emailAddress:email
            })

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
                        })
                }
            }
    }

    goTOnextStep(){
        this.setState({
            visibleLoader:true
        });

        setTimeout(()=>{
            if(this.state.emailAddress == 'wrong@email.com'){
                this.setState({
                    formValid:false,
                    visibleLoader:false
                })
            }else{
                this.setState({
                    formValid:true,
                    visibleLoader:false
                })
            }
        },2000)
    }
    render(){

        const { visibleLoader , formValid , validEmail } = this.state;

        const backgroundColor = formValid ? colors.green01 : colors.darkOrange;

        const ShowNotification = formValid ? false : true;

        return(
            <KeyboardAvoidingView 
            style={[{backgroundColor:backgroundColor},style.wrapper]}
            behavior="height"
            >
                    <ScrollView  style={style.Formstyle}>
                            <Text style={style.Forgetpasswordstyle} >Forget Your  Password</Text>
                            <Text style={style.Forgetpasswordsub} >Enter Your Email Find Your Account</Text>
                            <InputFeild 
                             autofocus={true} 
                             onChangeText={this.handleEmailChange} 
                             customStyle={{marginBottom:10}} 
                             labelcolor={colors.white} 
                             borderBottomColor={colors.white}
                             labeltextsize = {14} 
                             labeltext="Email"
                             textcolor={colors.black}
                             showCheckMark={validEmail}
                            />

                    </ScrollView>
                    <View style={style.nextbuttonWraper}>
                        <NextButton 
                             handleNextButton={this.goTOnextStep}
                             disabled={!validEmail}
                        /> 
                    </View>
                    <View>
                            <Notification 
                            ShowNotification={ShowNotification}
                            type='error'
                            firstline='No Account Exist requested Email Address'
                            secline='test'
                            handleCloseNotification={this.handleCloseNotification}
                            />
                    </View>

                    <Loader modalVisible={visibleLoader} animationType='fade' />
            </KeyboardAvoidingView>
        )
    }
}

const style = StyleSheet.create({

    wrapper:{
        display:'flex',
        flex:1
    },
    Formstyle:{

        marginTop:90,
        paddingLeft:20,
        paddingRight:20,
        flex:1
    },
    Forgetpasswordstyle:{
        fontSize:20,
        fontWeight:'300',
        color:colors.white
    },
    Forgetpasswordsub:{
        fontSize:16,
        fontWeight:'600',
        color:colors.white,
        marginTop:20
    },
    nextbuttonWraper:{
        alignItems:'flex-end',
        right:20,
        bottom:20
    }

});
