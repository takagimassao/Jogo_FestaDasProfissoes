<template>
  <div class="container-fluid">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'assets/css/bootstrap-grid.min.css';
@font-face {
      font-family: 'Poppins';
      src: local('Poppins'), url('./assets/fonts/Poppins-Regular.ttf')  format('truetype'),
}

html {
  font-family: "Poppins", sans-serif;
}
body {
  font-size: 1.25rem;
  font-weight: 300;
}
h1 {
  font-size: 3rem;
  font-weight: 300;
}
h2 {
  font-size: 2.5rem;
  font-weight: 300;
}
h3 {
  font-size: 2rem;
  font-weight: 300;
}
h4 {
  font-size: 1.75rem;
  font-weight: 700;
}

</style>