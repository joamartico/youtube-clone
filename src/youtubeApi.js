import axios from 'axios';

const API_KEY = "AIzaSyCWN1PWFzr_EaFsg7gkt6DStQ1Mqp8t7DI"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:
    {
        part:'snippet',
        maxResults:10,
        key: API_KEY
        // token: "ya29.a0AfH6SMAhUUsYFCEJCd_SVjfrgqFJsqJIwmdrgM9mMXny70iQ7XcdYPzq6sS06orUYpEZZkpV06PhshRinX6ozosE7C_ou8q-lDe9Tngh0r9WT-jNwjnEVFLEIs9wUXFv8Zw6A7MBmO9uQTF2zb2WBPIVGvA5YbNYRE0",
        // client_id: "956922473029-utrnjdnla00jskem5aphug1fosupf4lk.apps.googleusercontent.com"


        // SECRETO DEL CLIENTE OAUTH: xyOu4nqdR0qxA_S34AdTmDF-
        //ID DEL CLIENTE OAUTH: 956922473029-utrnjdnla00jskem5aphug1fosupf4lk.apps.googleusercontent.com

    }
})