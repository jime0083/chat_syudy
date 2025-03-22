<template>
    <div>
        <input v-model="newMessage" placeholder="メッセージを入力">
        <button @click="sendMessage">送信</button>
    </div>
</template>

<script>
export default{
    data(){
        return{
            newMessage:"",//入力されたメッセージを保持
        };
    },

    methods:{
        sendMessage(){
            if (this.newMessage.trim() !=="") {
                this.$emit("sendMessage",this.newMessage);//親コンポーネントにメッセージを送信
                this.newMessage="";
            }
        },
    },
};
</script>