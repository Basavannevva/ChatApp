import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import AddUserStyle from "../styles/AddUserStyle"
import { StackNavigator, NavigationActions } from "react-navigation";
import firebase from 'firebase';
export const ResetLogin = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({ routeName: "Home" })]
});

class SignUp extends Component {

    static navigationOptions = {
        title: 'SIGN UP',
    };

    state = {
        password: "",
        email: "",
        DisplayName: "",
        loading: false,
        result: '',
        PhoneNumber: "",
    };

    handlePassword = text => {
        this.setState({ password: text });
    };

    handleEmail = text => {
        this.setState({ email: text });
    };


    handleDisplayName = text => {
        this.setState({ DisplayName: text });
    };

    handlePhoneNumber = text => {
        this.setState({ PhoneNumber: text });
    };


    SignUpUser = () => {

        this.setState({ loading: true });
        let email = this.state.email;
        let password = this.state.password;

        //firebase signUp for the new User using Email and Password
        firebase.auth()
            .createUserWithEmailAndPassword(email, password).then(result => this.creatteUserInDb(result))
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
                this.setState({ loading: false });
            });
    }

    //Once SignUp is done create table 'User' with user details
    creatteUserInDb(result) {
        var { navigate } = this.props.navigation;
        let userMobilePath = "/user/" + result.uid;
        return firebase.database().ref(userMobilePath).set({
            PhoneNo: this.state.PhoneNumber,
            DisplayName: this.state.DisplayName,
            Email: this.state.email,
            UID: result.uid
        }).then((result) => { this.props.navigation.dispatch(ResetLogin); })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);

            });
    }

    //Sign up button action
    renderSignUpBtn() {
        if (this.state.loading) {
            return (
                <View
                    style={AddUserStyle.Buttonstyle}>
                    <ActivityIndicator />
                </View>
            );
        } else {
            return (
                <TouchableOpacity
                    style={AddUserStyle.Buttonstyle}
                    onPress={this.SignUpUser.bind(this)}
                    underlayColor="red">
                    <Text style={AddUserStyle.textstyle}>Sign Up</Text>
                </TouchableOpacity>
            );
        }
    }


    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={AddUserStyle.container}>

                <Text style={AddUserStyle.textHeaderstyle}>SignUp Details</Text>
                <TextInput
                    style={AddUserStyle.InputStyle}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#74787f"
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={this.handleEmail}
                />
                <TextInput
                    style={AddUserStyle.InputStyle}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#74787f"
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={this.handlePassword}
                />

                <TextInput
                    style={AddUserStyle.InputStyle}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#74787f"
                    autoCapitalize="none"
                    placeholder="Display Name"
                    onChangeText={this.handleDisplayName}
                />

                <TextInput
                    style={AddUserStyle.InputStyle}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#74787f"
                    autoCapitalize="none"
                    placeholder="Phone Number"
                    onChangeText={this.handlePhoneNumber}
                />

                {this.renderSignUpBtn()}
            </View>
        );
    }
}

export default SignUp;
