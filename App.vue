<template>
  <div id="app" class="app">
    <section>
      <h1>GeekPlux</h1>
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
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #app {
    overflow: hidden;
    background: #111;
    font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue","Hiragino Sans GB",Arial,sans-serif;
  }

  h1 {
    position: absolute;
    font-size: 48px;
    font-weight: bold;
    margin: 0;
    color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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
    width: 140px;
    height: 140px;
    left: -70px;
    top: -70px;
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
