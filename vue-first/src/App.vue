<template>
    <nav>
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
        |
        <router-link to="/databinding">Data Binding</router-link>
        |
        <router-link to="/nested">Nested Component</router-link>
        |
        <router-link to="/slot">Slot</router-link>
        |
        <router-link to="/optionCalculator">Option Calculator</router-link>
        |
        <router-link to="/compositionCalculator">Composition Calculator</router-link>
    </nav>
    <router-view/>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
<script>
</script>
