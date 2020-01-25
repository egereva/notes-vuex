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
        },
        data() {
            return {
                currentPriority: 'standard'
            }
        },
        computed: {
          note() {
              return this.$store.getters.getNote
          },
          priorities() {
              return this.$store.getters.getPriorities
          }
        },
        methods: {
            addNote () {
                let {title, descr, priority} = this.$store.getters.getNote

                if (title === '') {
                    this.$store.dispatch('setMessage',{mes: 'title can`t be blank!'} )
                    return false
                }

                this.$store.dispatch('addNote',{
                    title,
                    descr,
                    date: new Date(Date.now()).toLocaleString(),
                    priority,
                    selected: false
                })


                this.$store.dispatch('setMessage',{mes: null} )
                this.currentPriority = 'standard'

                this.$store.dispatch('resetNote')
            },
            selectPriority () {
                this.$store.dispatch('setPriority', this.currentPriority)
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
