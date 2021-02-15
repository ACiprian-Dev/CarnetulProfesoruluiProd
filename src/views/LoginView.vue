<template>
  <section id="LogIn">
        <h1>Sign In</h1>

        <form action="" method="POST">
            <label for="ID">ID:</label> <br>
            <input type="text" name="ID" id="ID" placeholder="ID-ul dumneavostra..."> <br>
            <label for="ID">Parola:</label> <br>
            <input type="password" name="password" id="password" required placeholder="Parola dumneavostra..."> <br>
            <input type="checkbox" name="StaySigned" id="StaySigned"> 
            <label for="StaySigned">Keep Me Signed In</label> <br>
            <input type="submit" value="Sign In">
        </form>
    </section>
</template>

<script>
export default {
    name: 'LoginView'
};
</script>

<style lang="scss" scoped>

#LogIn {
    margin: 12em 0 0 24em;
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

}

input[type=submit] {
    background-color: #00B695;
    border: none;
    color: white;
    padding: 12px 32px;
    text-decoration: none;
    cursor: pointer;
  }

</style>