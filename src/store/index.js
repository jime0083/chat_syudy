import { createStore } from 'vuex';

export default createStore({
        state:{
            messages:[],//チャットメッセージ一覧
        },

        mutations:{
            addMessage(state,newMessage){
                state.messages.push({id:Date.now(),text:newMessage});
            },
        },

        actions:{
            sendMessage({commit},messageText){
                commit('addMessage',messageText);
            },
        },

        getters:{
            allMessages:state=>state.messages,
        }
    });
