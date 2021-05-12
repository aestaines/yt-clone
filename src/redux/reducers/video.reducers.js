import {    CHANNEL_VIDEOS_REQUEST, 
            HOME_VIDEOS_FAIL, 
            HOME_VIDEOS_REQUEST, 
            HOME_VIDEOS_SUCCESS, 
            RELATED_VIDEO_FAIL, 
            RELATED_VIDEO_REQUEST, 
            RELATED_VIDEO_SUCCESS, 
            SEARCHED_VIDEO_FAIL, 
            SEARCHED_VIDEO_REQUEST, 
            SEARCHED_VIDEO_SUCCESS, 
            SELECTED_VIDEO_FAIL, 
            SELECTED_VIDEO_REQUEST, 
            SELECTED_VIDEO_SUCCESS, 
            SUBSCRIPTION_CHANNEL_FAIL, 
            SUBSCRIPTION_CHANNEL_REQUEST, 
            SUBSCRIPTION_CHANNEL_SUCCESS,
            CHANNEL_VIDEOS_FAIL, 
            CHANNEL_VIDEOS_SUCCESS,
} from "../actionTypes"

const videoInitialState = {
    videos: [],
    loading : false,
    nextPageToken : null,
    activeCategory : "All"
}

export const homeVideosReducer = ( state = videoInitialState, action) => {
    const {type, payload} = action

    switch (type) {
        case HOME_VIDEOS_SUCCESS :
            console.log(payload);
            return {
                ...state,
                videos : state.activeCategory === payload.category ? [...state.videos, ...payload.videos] : payload.videos,
                // videos : payload.category,
                loading : false,
                nextPageToken : payload.nextPageToken,
                activeCategory : payload.category
            }

        case HOME_VIDEOS_FAIL :
            return {
                ...state,
                loading : false,
                error : payload
             }

        case HOME_VIDEOS_REQUEST :
            return {
                ...state,
                loading : true,
             }

        default: return state;
    }
}


////////////////////////////////

const selectVideoInitialState = {
    loading : true,
    video : null,  
}

export const selectedVideoReducer = (state = selectVideoInitialState, action) => {
    const {payload, type} = action

    switch (type) {
        case SELECTED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true,
            }
            
        case SELECTED_VIDEO_SUCCESS:
            return {
                ...state,
                video: payload,
                loading: false,
            }

        case SELECTED_VIDEO_FAIL:
            return  {
                ...state,
                video: null,
                loading : false,
                error: payload,
            }

        default: return state;
    }

}



const relatedVideoInitialState = {
    loading : true,
    videos : [],  
}
export const relatedVideoReducer = (state = relatedVideoInitialState, action) => {
    const {payload, type} = action

    switch (type) {
        case RELATED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true,
            }
            
        case RELATED_VIDEO_SUCCESS:
            return {
                ...state,
                videos: payload,
                loading: false,
            }

        case RELATED_VIDEO_FAIL:
            return  {
                ...state,
                loading : false,
                error: payload,
            }

        default: return state;
    }

}


const searchedVideoInitialState = {
    loading : true,
    videos : [],  
}
export const searchedVideosReducer = (state = searchedVideoInitialState, action) => {
    const {payload, type} = action

    switch (type) {
        case SEARCHED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true,
            }
            
        case SEARCHED_VIDEO_SUCCESS:
            return {
                ...state,
                videos: payload,
                loading: false,
            }

        case SEARCHED_VIDEO_FAIL:
            return  {
                ...state,
                loading : false,
                error: payload,
            }

        default: return state;
    }

}


const subscriptionChannelnitialState = {
    loading : true,
    videos : [],      
}
export const subscriptionChannelReducer = (state = subscriptionChannelnitialState, action) => {
    
    const {payload, type} = action

    switch (type) {
        case SUBSCRIPTION_CHANNEL_REQUEST:
            return {
                ...state,
                loading: true,
            }
            
        case SUBSCRIPTION_CHANNEL_SUCCESS:
            return {
                ...state,
                videos: payload,
                loading: false,
            }

        case SUBSCRIPTION_CHANNEL_FAIL:
            return  {
                ...state,
                loading : false,
                error: payload,
            }

        default: return state;
    }

}



const channeVideoslnitialState = {
    loading : true,
    videos : [],  
}
export const channelVideoReducer = (state = channeVideoslnitialState, action) => {
    
    const {payload, type} = action

    switch (type) {
        case CHANNEL_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true,
            }
            
        case CHANNEL_VIDEOS_SUCCESS :
            return {
                ...state,
                videos: payload,
                loading: false,
            }

        case CHANNEL_VIDEOS_FAIL:
            return  {
                ...state,
                loading : false,
                error: payload,
            }

        default: return state;
    }

}