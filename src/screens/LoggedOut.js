import React , {Component} from 'react';
import {View,Text,Image,StyleSheet,TouchableHighlight,ScrollView} from 'react-native';
import colors  from '../styles/colors';
import RoundedButton from '../components/button/RoundedButton';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class LoggedOut extends Component{

    onFacebookPress(){
        alert('Facebook Press');
    }

    onCreateAccount(){
            alert('Create Account')
    }
    onmoreButtonPress(){
        alert('more Button Press')
    }
    render(){
        return(
            
                <View style={styles.Wrapper}>
                        <View style={styles.welcomeWrapper}>
                        <Image style={styles.logo} source={require('../img/airbnb-logo.png')} />
                        <Text style={styles.welcomeText}>Welcome To Our App</Text>
                        <RoundedButton 
                        text="Continue With facebook"
                        textcolor={colors.green01}
                        background={colors.white}  
                        icon={<Icon name='facebook' size={20} style={styles.facebookbuttonIcon} />}
                        handleOnPress={this.onFacebookPress}
                        />
                        <RoundedButton 
                        text="Create Account"
                        textcolor={colors.white}
                        background={colors.green01}  
                        handleOnPress={this.onCreateAccount}
                        />
                        <TouchableHighlight onPress={this.onmoreButtonPress} style={styles.Moreoptionbutton}>
                                <Text style={StyleSheet.Moreoptionbuttontext}>More Option</Text>
                        </TouchableHighlight>

                       
                        <View style={styles.termsAndConditions}>
                        <Text style={styles.termsText}>
                          By tapping Continue, Create Account or More
                        </Text>
                        <Text style={styles.termsText}>
                          {' options,'}
                        </Text>
                        <Text style={styles.termsText}>
                          {"I agree to Airbnb's "}
                        </Text>
                        <TouchableHighlight style={styles.linkButton}>
                          <Text style={styles.termsText}>
                            Terms of Service
                          </Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>
                          ,
                        </Text>
                        <TouchableHighlight style={styles.linkButton}>
                          <Text style={styles.termsText}>
                            Payments Terms of Service
                          </Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>
                          ,
                        </Text>
                        <TouchableHighlight style={styles.linkButton}>
                          <Text style={styles.termsText}>
                            Privacy Policy
                          </Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>
                          , and
                        </Text>
                        <TouchableHighlight style={styles.linkButton}>
                          <Text style={styles.termsText}>
                            Nondiscrimination Policy
                          </Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>
                          .
                        </Text>
                      </View>
                        </View>
                </View>
                
        );
    }
}

const styles = StyleSheet.create({
    Wrapper:{
        flex:1,
        display:'flex',
        backgroundColor: colors.green01,
    },
    welcomeText:{
        fontSize:30,
        color: colors.white,
        marginBottom:40,
        marginTop:50
    },
    welcomeWrapper:{
        flex:1,
        display:'flex',
        fontWeight:'300',
        padding:20,

    },
    logo:{
        height:50,
        width:50,
        marginTop:50,
        marginBottom:40,
    },
    facebookbuttonIcon:{
        color:colors.green01,
        position:'relative',
        left:20,
        zIndex:8 
    },
    Moreoptionbutton:{
        marginTop:10
    },
    Moreoptionbuttontext:{
        color:colors.white,
        fontSize:16
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30,
      },
      termsText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: '600',
      },
      linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
      },

});

export default LoggedOut;