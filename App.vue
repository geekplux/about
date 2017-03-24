<template>
  <div id="app" class="app">
    <section class="title">
      <div class="name">
        <h1>GeekPlux</h1>
        <p>
          Developer
        </p>
      </div>
      <div class='hole'>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </section>
    <section class="bio">
      <h2>
        A full-stack developer, and now interested in the Data Visualization.
      </h2>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    width: 100%;
    background-color: #eee;
  }

  .title {
    height: 95vh;
    overflow: hidden;
    background-image: -webkit-linear-gradient(45deg, #111 20%, #222 100%);
    font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue","Hiragino Sans GB",Arial,sans-serif;
    box-shadow: 0 1px 20px #000;
  }

  .name {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
  }

  h1 {
    font-size: 48px;
    font-weight: bold;
    margin: 0;
  }
  .name p {
    font-size: 20px;
  }


  .bio {
    height: 95vh;
    color: #262626;
    position: relative;
  }

  .bio h2 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    width: 80%;
    font-size: 66px;
    font-weight: bold;
    line-height: 1.2;
  }


  .hole {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
  }

  i {
    display: block;
    position: absolute;
    width: 250px;
    height: 250px;
    left: -125px;
    top: -125px;
    border-radius: 140px;
    opacity: 0;
    animation-name: scale;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  i:nth-child(1) {
    animation-delay: 0.3s;
  }

  i:nth-child(2) {
    animation-delay: 0.6s;
  }

  i:nth-child(3) {
    animation-delay: 0.9s;
  }

  i:nth-child(4) {
    animation-delay: 1.2s;
  }

  i:nth-child(5) {
    animation-delay: 1.5s;
  }

  i:nth-child(6) {
    animation-delay: 1.8s;
  }

  i:nth-child(7) {
    animation-delay: 2.1s;
  }

  i:nth-child(8) {
    animation-delay: 2.4s;
  }

  i:nth-child(9) {
    animation-delay: 2.7s;
  }

  i:nth-child(10) {
    animation-delay: 3s;
  }

  @keyframes scale {
    0% {
      transform: scale(2);
      opacity: 0;
      box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.5);
    }
    50% {
      transform: scale(1) translate(0px, -5px);
      opacity: 1;
      box-shadow: 0px 8px 20px rgba(255, 255, 255, 0.5);
    }
    100% {
      transform: scale(0.1) translate(0px, 5px);
      opacity: 0;
      box-shadow: 0px 10px 20px rgba(255, 255, 255, 0);
    }
  }
</style>
