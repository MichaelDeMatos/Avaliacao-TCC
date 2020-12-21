<template>
  <header>
    <nav class="navbar is-fixed is-white" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" style="cursor: auto;">
            <picture>
              <source srcset="https://portal.ifma.edu.br/wp-content/uploads/2015/09/ifma_novo.jpg" type="image/jpg" />
              <img src="https://portal.ifma.edu.br/wp-content/uploads/2015/09/ifma_novo.jpg" alt />
            </picture>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>

<style scoped>
.navbar.is-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  opacity: .96;
}

.navbar {
  background-color: #fff;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  z-index: 30;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.navbar .container {
  height: 100%;
}
.navbar .container {
  display: flex;
  align-items: center;
}

.navbar .navbar-brand {
  flex-grow: 1;
  flex-shrink: 0;
}

.navbar .navbar-item {
  display: flex;
  align-items: center;
}

.navbar .navbar-menu {
  height: 100%;
  display: flex;
  flex-flow: row;
}

.navbar .navbar-menu .navbar-item {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-weight: 400;
  text-decoration: none;
}
.navbar
  .navbar-menu
  .navbar-item
  .button:not(.is-primary):not(.is-secundary):not(.is-bookmark) {
  color: #444;
  font-weight: 400;
  box-shadow: none;
  border-color: transparent;
}
.button {
  padding-left: 1rem;
  padding-right: 1rem;
  border-width: 1px;
  border-style: solid;
  font-size: 0.875rem;
}
.button {
  display: flex;
  align-items: center;
  width: auto;
  text-decoration: none;
  font-weight: bolder;
  border-radius: 0.25rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  outline: 0;
  cursor: pointer;
}

.button span,
.button strong {
  margin: auto;
  text-align: center;
}
strong {
  color: inherit;
  font-weight: bolder;
}

.container {
  width: 100%;
}
.container {
  max-width: 72rem;
  margin-left: auto;
  margin-right: auto;
}

a:hover {
  color: #fff;
  text-decoration: none;
}

a,
a:hover {
  cursor: pointer;
}
a {
  display: inline-block;
  background-color: transparent;
  color: #f05e5c;
  text-decoration: underline;
  font-weight: bolder;
}

.navbar .navbar-brand img {
  width: 3.85rem;
  height: auto;
}

img {
  height: auto;
  max-width: 100%;
}
</style>
