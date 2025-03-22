<template>
    <li>{{ message.text }}</li>
</template>

<script>
export default{
    props:{
        message:Object,//親コンポーネントから1つメッセージを受け取る
    },
};
</script>