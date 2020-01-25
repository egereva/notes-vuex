<template>
    <!-- note list -->
    <div class="notes" @click="$emit('closeEdit')">
        <div  class="note" :class="[{full: !grid, important: note.priority === 'important', veryImportant: note.priority === 'veryImportant' }]" v-for="(note, index) in notes" :key="index">
            <div class="note-header" :class="{full: !grid}">

            <!-- title edit -->
                <input  class="note-title-edit"
                        ref="titleInput"
                        type="text"
                        @click.stop =""
                        v-show="notes[index].selected && titleEdit"
                        v-model="newTitle"
                        @keyup.13="saveСhanges(index)"
                        @keyup.27="deleteСhanges(index)" >

                <p @click.stop ="" v-show="!notes[index].selected || !titleEdit" @click="editString(index, note.title )">{{ note.title }}</p>
                <p style="cursor: pointer;" @click="removeNote(index)">x</p>
            </div>
            <div class="note-body">

                <!-- description edit -->
                <textarea
                        class="note-descr-edit"
                        ref="descrInput"
                        type="text"
                        @click.stop =""
                        v-show="notes[index].selected && descriptionEdit"
                        v-model="newDescription"
                        @keyup.13="saveСhanges(index)"
                        @keyup.27="deleteСhanges(index)"></textarea>

                <p @click.stop ="" v-show="!notes[index].selected || !descriptionEdit" @click="editString(index, note.descr)">{{ note.descr }}</p>
                <span>{{ note.date }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default  {
        props: {
            grid: {
                type: Boolean,
                required: true
            }

        },
        data () {
          return {
            newTitle: '',
            newDescription: '',
            titleEdit: false,
            descriptionEdit: false
          }
        },
        mounted() {
        },
        computed: {
            notes () {
                return this.$store.getters.getNotesFilter
            }
        },
        methods: {
            removeNote(index) {
                this.$store.dispatch('removeNote', index)
            },
            editString(index, string) {
              this.$store.dispatch('editString', index)

              if (string === this.notes[index].title ) {
                  this.titleEdit = true
                  this.descriptionEdit = false

                  this.newTitle = this.notes[index].title

                  this.$nextTick(function(){
                      this.$refs.titleInput[index].focus()
                  });
              } else {
                  this.titleEdit = false
                  this.descriptionEdit = true

                  this.newDescription = this.notes[index].descr

                  this.$nextTick(function(){
                      this.$refs.descrInput[index].focus()
                  });
              }
            },
            saveСhanges(index) {
                this.$store.dispatch('saveСhanges', {index: index, newTitle: this.newTitle, newDescription: this.newDescription, titleEdit: this.titleEdit })

                if(this.titleEdit) {
                    this.newTitle = ''
                }else {
                    this.newDescription= ''
                    }
            },
            deleteСhanges(index) {
                this.$store.dispatch('deleteСhanges', index)

                this.newTitle = ''
                this.newDescription= ''

            },
            closeEdit() {
                this.$store.dispatch('closeEdit')
            }


        },

    }
</script>

<style lang="scss">
    .notes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 40px 0;
    }

    .note {
        width: 48%;
        padding: 18px 20px;
        margin-bottom: 20px;
        background: #fff;
        transition: all .25s cubic-bezier(.02,.01,.47,1);
        box-shadow: 0 30px 30px rgba(0,0,0,0.2);
        &:hover {
            box-shadow: 0 30px 30px rgba(0,0,0,0.4);
            transform: translate(0, -6px);
            transition-delay: 0s !important;
        }
        &.full {
            width: 100%;
            text-align: center;
        }
        &.important {
            outline: 2px solid #ffe12d;
        }
        &.veryImportant {
            outline: 2px solid red;
        }
    }

    .note-header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            font-size: 32px;
        }

        p {
            color: #402caf;
            font-size: 22px;
        }
        svg {
            margin-right: 12px;
            color: #999999;
            &.active {
                color: #402caf;
            }
            &:last-child {
                margin-right: 0;
            }
        }
        &.full {
            justify-content: center;
            p {
                margin-right: 16px;
                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    .note-body {
        p {
            margin: 20px 0;
        }

        span {
            font-size: 14px;
            color: #999999;
        }
    }

    .note-title-edit {
        width: 80%;
        height: 30px;
        margin-bottom: 0;
    }

    .note-descr-edit {
        padding: 20px;
        margin: 15px 0;
    }

</style>
