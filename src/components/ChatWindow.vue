<template>
    <div class="chat-window">
        <MessageList :messages="messages" />
        <MessageInput @sendMessage="addMessage" />
    </div>
</template>

<script>
import MessageList from "./MessageList.vue"
import MessageInput from "./MessageInput.vue"

export default{
    components:{
        MessageList,
        MessageInput,
    },

    data(){
        return{
            messages:[],//メッセージ一覧を保持するデータ
        };
    },

    methods:{
        addMessage(newMessage){
            this.messages.push({id:Date.now(),text:newMessage});
        },
    },
};
</script>

<style>
.chat-window{
    border: 1px solid #ddd;
    padding: 10px;
    width: 400px;
}
</style>
