<!--
 * @Author: wangtengteng
 * @Date: 2020-10-29 18:03:59
 * @LastEditTime: 2020-11-02 17:43:20
 * @FillPath: Do not edit
-->
<template>
    <div class="edit-div"
         v-html="innerText"
         :contenteditable="canEdit"
         @focus="isLocked = true"
         @blur="isLocked = false"
         @input="changeText">
    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        name: 'editDiv',
        props: {
            value: {
                type: String,
                default: ''
            },
            canEdit: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                innerText: this.value,
                isLocked: false
            }
        },
        watch: {
            'value'(){
                if (!this.isLocked || !this.innerText) {
                    this.innerText = this.value;
                }
            }
        },
        methods: {
            changeText(){
                this.$emit('input', this.$el.innerHTML);
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .edit-div {
        width: 100%;
        min-height: 500px;
        padding: 20px;
        overflow: auto;
        word-break: break-all;
        outline: none;
        user-select: text;
        white-space: pre-wrap;
        text-align: left;
        &[contenteditable=true]{
            user-modify: read-write-plaintext-only;
            &:empty:before {
                content: attr(placeholder);
                display: block;
                color: #ccc;
            }
        }
    }
</style>
