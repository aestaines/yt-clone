import firebase from "firebase";
import auth from '../../firebase'
import { LOAD_PROFILE, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "../actionTypes";


export const login = () => async dispatch => {
    
    try {

        dispatch({
            type: LOGIN_REQUEST,
        })

        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope("https://www.googleapis.com/auth/youtube.readonly");
        provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
        provider.addScope("https://www.googleapis.com/auth/youtubepartner");
        provider.addScope("https://www.googleapis.com/auth/youtube");


        const res = await auth.signInWithPopup(provider)
        console.log("Auth=>",res);

        const accessToken = res.credential.accessToken
        const profile = {
            name : res.additionalUserInfo.profile.name,
            photoUrl : res.additionalUserInfo.profile.picture,
        }

        sessionStorage.setItem("ytc-access-token",accessToken);
        sessionStorage.setItem("ytc-user",JSON.stringify(profile));

        dispatch({
            type : LOGIN_SUCCESS,
            payload : accessToken,
        })

        dispatch({
            type : LOAD_PROFILE,
            payload : profile,
        })

    } catch(e){
        
        console.log(e.message);

        dispatch({
            type : LOGIN_FAILED,
            payload: e.message,
        })

    }
}


export const logout = () => async dispatch => {
    
    await auth.signOut()
    dispatch({
        type : LOGOUT
    })
    
    sessionStorage.removeItem("ytc-access-token")
    sessionStorage.removeItem("ytc-user")


}