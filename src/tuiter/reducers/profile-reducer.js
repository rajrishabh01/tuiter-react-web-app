import { createSlice } from "@reduxjs/toolkit"


const profile = {
    "firstName": 'Abed',
    "lastName": 'Nadir',
    "handle": '@anadir',
    "profilePicture": 'aladdin.png',
    "bannerPicture": 'bannerpurple.jpeg',
    "bio": 'Film maker, Meta references, Chicken Fry enthusiast. Retuits and likes are not endorsements.',
    "website": 'youtube.com/webdevtv',
    "location": 'Greendale, CO',
    "dateOfBirth": '5/12/1988',
    "dateJoined": '4/2001',
    "followingCount": 440,
    "followersCount": 293,
    "noOfTweets":2313

}

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers:{
        editUser(state, action){
            return action.payload;
        },
    }

});

export const {editUser} = profileSlice.actions;
export default profileSlice.reducer;