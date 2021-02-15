<template>
  <main>
        <div class="overlay">
        <h1>Parerea ta conteaza . Tu faci diferenta !</h1>
        <p>Carnetul profesorului va vizeaza punctul vostru de vedere incercand sa faca o diferenta si sa va imbunatateasca viata scolara .</p>
        </div>
    </main>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
main {
    background: url("../assets/Hero_Image.jpg") no-repeat center /cover;
    height: 100vh;
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
</style>