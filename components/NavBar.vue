<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <nuxt-link class="nav-link" to="/"> Home <span class="sr-only">(current)</span></nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/users"> Users</nuxt-link>

        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/posts"> Posts</nuxt-link>
        </li>

      </ul>
    </div>
  </nav>
</template>
