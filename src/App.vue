<template>
    <router-view/>
</template>

<style lang="scss">
@import 'assets/css/bootstrap-grid.min.css';
@font-face {
      font-family: 'Poppins';
      src: local('Poppins'), url('./assets/fonts/Poppins-Regular.ttf')  format('truetype'),
}

:root {
  --light-green: #5BF0C2;
  --green: #28EBAF;
  --dark-green: #068A61;
  --light-blue: #A7AAF5;
  --blue: #6C63FF;
  --dark-blue: #3B1957;
  --light-grey: #F1F0F2;
  --grey: #A1A1A1;

  --primary-color: var(--green);
  --primary-color-disabled: var(--light-green);
  --secondary-color: var(--blue);
  --secondary-color-disabled: var(--light-blue);
  --dark-color: var(--dark-blue);
  --light-color: var(--light-grey);
}

* {
  box-sizing: border-box;
  vertical-align: top;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Poppins", sans-serif;
}

body {
  font-size: 1.25rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
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
h5 {
  font-size: 1.75rem;
  font-weight: 300;
}

input {
  font-family: 'poppins';
  font-size: 1rem;
  padding: .5rem 1rem;
  border-radius: 2rem;
  border-color: var(--grey);
  background-color: white;
  margin-bottom: 2rem;
}

.container-fluid {
  min-height: 100vh;
  padding: 0;
  background-color: var(--dark-blue);
  background-image: url('assets/img/page-background.svg');
}

.btn--primary {
  text-align: center;
  display: block;
  text-decoration: none;
  color: var(--dark-green);
  border-radius: 200px;
  background-color: var(--primary-color);
  padding: .5rem 2rem;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

</style>