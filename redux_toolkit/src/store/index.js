import {configureStore,createSlice} from "@reduxjs/toolkit";
const songsSlice = createSlice({
    name:'song',
    initialState:[],
    reducers:{
        addSong(state,action){
        state.push(action.payload)
        },
        removeSong(state,action){
       //
        }
    }
})
const store = configureStore({
    reducer: {
        songs:songsSlice.reducer
    }
})
const startingState = store.getState();
console.log(JSON.stringify(startingState));
//{"songs":[]}

store.dispatch({
    type:"song/addSong",
    payload:"New song!!!"
})
const finalState =store.getState();
console.log(JSON.stringify(finalState))
//{"songs":["New song!!!"]}