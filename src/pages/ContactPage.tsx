import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MessageComponent } from '../components/MessageComponent';
import { OpenSocialComponent } from '../components/OpenSocialComponent';

const RInstagrama = "https://z-p15.www.instagram.com/accounts/login/";
const RGit = "https://github.com/login/";
const RFacebook = "https://es-la.facebook.com/";

export const ContactPage = () => {
  return (
    <View style={ styles.container }>
      <OpenSocialComponent url={RInstagrama} iname="logo-instagram" men="Intagram"></OpenSocialComponent>
   
      {/* <Text style={ styles.text }>Instagram</Text> */}
      <OpenSocialComponent url={RFacebook} iname="logo-facebook" men="Facebook"></OpenSocialComponent>
      {/* <Text style={ styles.text }>Facebook</Text> */}
      <OpenSocialComponent url={RGit} iname="logo-octocat" men="GitHub"></OpenSocialComponent>
      {/* <Text style={ styles.text }>GitHub</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'white',
    // flexDirection: 'row'
   }
});