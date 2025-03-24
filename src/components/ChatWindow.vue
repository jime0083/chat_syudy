<template>
    <div class="chat-window">
        <MessageList :messages="messages" />
        <MessageInput @sendMessage="addMessage" />
    </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";
import MessageList from "./MessageList.vue"
import MessageInput from "./MessageInput.vue"

export default{
    components:{MessageList,MessageInput},

    computed:{
        ...mapGetters(['allMessages']),
        messages(){
            return this.allMessages;
        }
    },

    methods:{
        ...mapActions(['sendMessage']),
        addMessage(newMessage){
            this.sendMessage(newMessage);
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
