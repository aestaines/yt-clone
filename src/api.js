import axios from 'axios';

// console.log("ENV",process.env.REACT_APP_YT_API_KEY);

const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params : {
        // key : "AIzaSyC51jEkAzhn1oeTVkSo8rDyTow0vPq95Ys" //aestaines2@gmail.com
        // key: "AIzaSyC_BvZC_3i3X1w2Dw8V22shEJM3oE1jsec"
        
        key: "AIzaSyBBUg252MthuhDrQIieQ38PXn1rnLmFgq0", //"AIzaSyBI4zOb7SkvL0XMU1LxxAYrZs8i5fnXnIw"
        

    }
})


export default request;