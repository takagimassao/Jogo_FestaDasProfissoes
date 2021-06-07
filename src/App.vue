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
  outline: none;
}

html {
  font-family: "Poppins", sans-serif;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.25rem;
  font-weight: 300;
  margin: 0;
  padding: 0;
}

//page title
h1 {
  font-size: 3rem;
  font-weight: 300;
}
//section title
h2 {
  font-size: 2.5rem;
  font-weight: 300;
}
//subtitle on basicHeader component
h3 {
  font-size: 2rem;
  font-weight: 300;
}
//job title
h4 {
  font-size: 1.75rem;
  font-weight: 700;
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

button {
  border: none;
}

.btn--secondary {
  display: block;
  border: none;
  border-radius: 200px;
  padding: .75rem 4rem;
  font-size: 1rem;
  color: white;
  background-color: var(--blue);
  cursor: pointer;
}
.btn--tertiary {
  display: block;
  border: 2px solid var(--blue);
  border-radius: 200px;
  padding: .75rem 4rem;
  font-size: 1rem;
  color: var(--blue);
  background-color: white;
  cursor: pointer;
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
  cursor: pointer;
}
.container-fluid {
  min-height: 100vh;
  padding: 0;
  background-color: var(--dark-blue);
  background-image: url('assets/img/page-background.svg');
}

textarea {
  border-radius: 32px;
  padding: 1rem 2rem;
  height: 100%;
  width: 100%;
  border-color: var(--grey);
  font-size: 1rem;
}


.job-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.job-list .section-content__profession-card {
  margin: 1.3rem 2rem;
}

.job-list .sortable-ghost{
  flex: 0 0 25%;
}
.centered {
  margin: 0 auto;
}

</style>