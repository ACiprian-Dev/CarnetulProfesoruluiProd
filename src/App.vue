<template>
      <header :style="{ position: $route.path !== '/' ? 'relative' : 'fixed',
                        background: $route.path !== '/' ? '#242222' : ''} ">
        
        <div id="Logo">
            <img src="./assets/logo.png" alt="">  
            <router-link to="/"><h2>Carnetul Profesorului</h2></router-link>
        </div>
        <template v-if="isElev">
        <nav>
            <ul>
                <li><router-link to="/ProfesoriView">Profesori</router-link></li>
                <!-- <li><a href="">Despre</a></li>
                <li><a href="">Contact</a></li> -->
            </ul>
        </nav>
       
            <div id="search-bar"> 
                <input type="text" placeholder="Search..">
                <img src="./assets/Search_Icon.svg" alt="">
            </div>
            <!-- <router-link to="/Login" id="LogIn_link">LogIn</router-link> -->
        </template>
        <template v-else>
            <nav>
            <ul>
                <li><router-link to="/ProfesoriView">Profesori</router-link></li>
                <!-- <li><a href="">Despre</a></li>
                <li><a href="">Contact</a></li> -->
            </ul>
        </nav>
       
            <div id="search-bar"> 
                <input type="text" placeholder="Search..">
                <img src="./assets/Search_Icon.svg" alt="">
            </div>
            <router-link to="/Login" id="LogIn_link">LogIn</router-link>
        </template>
    </header>
    
  <router-view/>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
        return {
            isElev: false,
            isProfesor: false,
        }
    },
    methods: {
        logout() {

        }
    },
    computed: {
        ...mapState(['userProfile'])
        
    },
    updated() {
        console.log(this.userProfile)
        if(this.userProfile.userType == "elev") {
            this.isElev = true;
        }
        if(this.userProfile.userType == "profesor") {
            this.isProfesor = true;
        }
    }
}

</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    font-family: Raleway;
}

router-link, a {
    text-decoration: none;
    color: #000000;
    opacity: .9;
    font-size: 16px;
    color: #fff;
}

header {
    //position: fixed;
    height: 15vh;
    display: flex;
    align-items: center;
    z-index: 2;
    color: #fff;
    width: 100%;
}

#LogIn_link {
    margin-right: 8em;
}

nav {
    display: flex;
    margin-left: 1.5em;
}

nav ul {
    list-style-type: none;
    display: flex;
}

nav li {
    padding: 0 .75em;
}

#Logo {
    margin-left: 140px;
    display: flex;
    align-items: center;
}

#Logo img {
    height: 75px;
}



#search-bar {
    width: 150px;
    margin: 0 1em 0 auto;
    border-radius: 12px;
    display: flex;
}

#search-bar input {
    background-color: #fff;
    width: 100%;
  border: 3px solid #ffffff;
  border-right: none;
  padding: 5px;
  height: 20px;
  border-radius: 2em 0 0 2em;
  outline: none;
  color: #9DBFAF;
}

#search-bar img {
    background: #fff;
  border: 3px solid  #ffffff; border-width: 3px 3px 3px 0px;
  text-align: center;
  color: #fff;
  border-radius: 0 2em 2em 0;
  cursor: pointer;
}

a {
    &.router-link-exact-active {
    color: #42b983;
  }
}

h2 {
    font-size: 24px;
    color: #fff;
}

</style>
