<template>
    <main>
        <div class="overlay">
        <h1>Parerea ta conteaza . Tu faci diferenta !</h1>
        <p>Carnetul profesorului va vizeaza punctul vostru de vedere incercand sa faca o diferenta si sa va imbunatateasca viata scolara .</p>  
        <li><a @click="logout()">logout</a></li>
        </div>
    </main>
    <section>
        <div>
            <h2>Cu ce scop exista acest proiect?</h2>
            <p>Scopul nostru este de a va face auziti , evidentiind problemele cu care fiecare elev se confrunta , dar in acelasi timp de a aduce in atentia profesorilor dificultatile de intelegere ale unui elev.</p>
        </div>
        <img src="../assets/SectionPhoto@2x.png" alt="">
    </section>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'HomeView',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }

};
</script>

<style lang="scss" scoped>
main {
    background: url("../assets/Hero_Image.jpg") no-repeat center /cover;
    height: 85vh;
    position: relative;
    color: #fff;
    z-index: 1;
}

.overlay {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:rgba(62, 62, 62, 0.5);
    background: url(data:;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAABl0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuNUmK/OAAAAATSURBVBhXY2RgYNgHxGAAYuwDAA78AjwwRoQYAAAAAElFTkSuQmCC) repeat scroll transparent\9; /* ie fallback png background image */
    z-index:1;
    color:white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.overlay h1 {
    font-size: 56px;
    font-weight: 900;
}

.overlay p {
    font-size: 18px;
    font-weight: 600;
    margin-top: 28px;
}

section {
    background: #00B695;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75vh;
    padding: 0 140px;
    color: #fff;
    h2 {
        font-size: 48px;
    }
    p {
        font-size: 16px;
    }
}

section img {
    max-height: 50vh;
}

section div {
    max-width: 30vw;
}

</style>