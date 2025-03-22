<template>
    <ul>
        <MessageItem v-for="message in messages" :key="message.id" :message="message" />
    </ul>
</template>

<script>
import MessageItem from "./MessageItem.vue";

export default{
    components:{MessageItem},
    props:{
        messages:Array,//親コンポーネントからメッセージを受け取る
    }
}
</script>