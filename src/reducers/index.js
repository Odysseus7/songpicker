/* 
The action describes what happened and it's the reducers job
to return the new state based on that action
*/
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: "Otra Noche Sin Ti",
            duration: 3.48
        },
        {
            title: "Come Through",
            duration: 3.34
        },
        {
            title: "Mystery Lady",
            duration: 3.48
        },
        {
            title: "Mood Swings",
            duration: 3.33
        },
    ]
}

const selectedSongReducer = (selectedSong = "", action) => {
    if(action.type === "SONG_SELECTED") {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer, 
    selectedSong: selectedSongReducer
});