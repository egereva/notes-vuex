<template>
    <!-- new note -->
    <div class="new-note">
        <label>Title</label>
        <input v-model="note.title" type="text">
        <label>Priority</label>
        <div class="priorities">
            <label  v-for="(priority, index) in priorities" :key="index">
                <input type="radio" :value="priority.value" v-model="currentPriority" @change="selectPriority"> {{priority.title}}
            </label>
        </div>
        <label>Description</label>
        <textarea v-model="note.descr"></textarea>
        <button class="btn btnPrimary" @click="addNote">New note</button>
    </div>
</template>

<script>
    export default {
        props: {
            note: {
                type: Object,
                required: true
            },
            priorities: {
                type: Array,
                required: true
            }
        },
        data() {
            return {
                currentPriority: 'standard'
            }
        },
        methods: {
            addNote () {
                this.$emit('addNote', this.note)
                this.currentPriority = 'standard'
            },
            selectPriority () {
                this.note.priority = this.currentPriority
            }
        }
    }
</script>

<style lang="scss">
    .new-note {
        text-align: center;
    }

    input[type='radio'] {
        width: auto;
    }

    .priorities {
        display: flex;
        justify-content: center;
        padding: 15px 0;
        label {
            display: inline-block;
            margin: 0 15px;
            cursor: pointer;
        }
    }

</style>
