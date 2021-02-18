<template>
  <section id="LogIn">
        <h1>Sign In</h1>

        <form @submit.prevent>
            <div>
                <label for="ID">ID:</label> <br>
                <input v-model.trim ="loginForm.email" type="text" name="ID" id="ID" required placeholder="ID-ul dumneavostra...">
            </div>
            <div>
                <label for="ID">Parola:</label> <br>
                <input v-model.trim="loginForm.password" type="password" name="password" id="password" required placeholder="Parola dumneavostra...">
            </div>
            <div id="CheckRemember">
                <input type="checkbox" name="StaySigned" id="StaySigned"> 
                <label for="StaySigned">Keep Me Signed In</label>
            </div>
            <button @click="login()" class="button">Log In</button>
        </form>
    </section>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            loginForm: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            this.$store.dispatch('login',{
                email: this.loginForm.email,
                password: this.loginForm.password
            })
        }
    }
};
</script>

<style lang="scss" scoped>

#LogIn {
    background: #42b983;
    max-width: 20vw;
    height: 35vh;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #3E3E3E;
}

#LogIn h1 {
    font-size: 48px;
}

#LogIn form {
    margin-top: 2em;
}

#LogIn label {
    display: inline-block;
}

#LogIn input {
    margin-bottom: 1em;
    width: 250px;
    height: 24px;
}

#CheckRemember input{
    height: 15px;
    width: 15px;
}

.button {
    background-color: #9500B6;
    border: none;
    color: white;
    padding: 12px 32px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5%;
  }

</style>