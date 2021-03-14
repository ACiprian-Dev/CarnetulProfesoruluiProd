<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
            <h1 @click="$emit('close')">x</h1>
          <div class="modal-header">
            <slot name="header">
              <h2>{{prof.numePrenume}}</h2>
              <h2>{{elev.clasa}}</h2>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
                <div>
                    <label for="severitate">severitate</label>
                    <input v-model="reviewData.severitate" type="number" name="severitate" id="severitate" min="1" max="5">
                </div>
                <div>
                    <label for="adaptabilitate">adaptabilitate</label>
                    <input v-model="reviewData.adaptabilitate" type="number" name="adaptabilitate" id="adaptabilitate" min="1" max="5">
                </div>
                <div>
                    <label for="comunicare">comunicare</label>
                    <input v-model="reviewData.comunicare" type="number" name="comunicare" id="comunicare" min="1" max="5">
                </div>
                <div>
                    <label for="empatie">empatie</label>
                    <input v-model="reviewData.empatie" type="number" name="empatie" id="empatie" min="1" max="5">
                </div>
                <div>
                    <label for="seriozitate">seriozitate</label>
                    <input v-model="reviewData.seriozitate" type="number" name="seriozitate" id="seriozitate" min="1" max="5">
                </div>
                <div>
                    <label for="abuz">abuz</label>
                    <input v-model="reviewData.abuz" type="number" name="abuz" id="abuz" min="1" max="5">
                </div>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="sendReview()">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

import {reviewsCollection} from "../firebase"

export default {
    props: ['prof','elev'],
    data() {
        return {
            reviewData: {
                sender: this.elev.numePrenume,
                receiver: this.prof.numePrenume,
                severitate: 0,
                adaptabilitate: 0,
                comunicare: 0,
                empatie: 0,
                seriozitate: 0,
                abuz: 0
            }
        }
    },
    methods: {
        async sendReview() {
            await reviewsCollection.add({
                sender: this.reviewData.sender,
                receiver: this.reviewData.receiver,
                severitate: parseInt(this.reviewData.severitate),
                adaptabilitate: parseInt(this.reviewData.adaptabilitate),
                comunicare: parseInt(this.reviewData.comunicare),
                empatie: parseInt(this.reviewData.empatie),
                seriozitate: parseInt(this.reviewData.seriozitate),
                abuz: parseInt(this.reviewData.abuz)
            })
            this.$emit('close')
        }
    }
}
</script>


<style lang="scss" scoped>

h1 {
    float: right;
}

h1:hover {
    cursor: pointer;
}

h2 {
    color: black;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  display: block;
  margin-top: 1rem;
}
</style>