/* 
The action describes what happened and it's the reducers job
to return the new state based on that action
*/
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            title: "Otra Noche Sin Ti",
            duration: 3.48,
            src: "https://i.ytimg.com/vi/qrTiyVEW8gc/maxresdefault.jpg"
        },
        {
            title: "Come Through",
            duration: 3.34,
            src: "https://www.songmeaningsandfacts.com/wp-content/uploads/2021/04/Come-Through-by-H.E.R..jpg"
        },
        {
            title: "Mystery Lady",
            duration: 3.48,
            src: "https://i.ytimg.com/vi/Ury84ZOdccw/hqdefault.jpg"
        },
        {
            title: "Mood Swings",
            duration: 3.33,
            src: "https://i.ytimg.com/vi/UqO4dd3Ea9Q/maxresdefault.jpg"
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