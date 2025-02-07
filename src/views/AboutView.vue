<template>
  <header>
    <nav><router-link to="/">Home</router-link></nav>
  </header>
  <div class="about">
    <h1>About Page</h1>
    <p>Welcome to the About page of this application.</p>
  </div>
</template>

<style scoped>
.about {
  text-align: center;
  margin-top: 20px;
}
header {
  text-align: center;
  padding: 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
}
nav a {
  text-decoration: none;
  margin: 0 10px;
  color: #007bff;
}
nav a:hover {
  text-decoration: underline;
}
</style>
