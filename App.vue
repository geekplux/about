<template>
  <div id="app" class="app">
    <section class="title">
      <div class="intro">
        <h1 class="name">GeekPlux</h1>
        <p class="profession">
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
      <ul class="links">
        <li><a href="http://geekplux.com/archives">Blog</a></li>
        <li><a href="http://geekplux.com/wiki">Wiki</a></li>
        <li><a href="https://github.com/geekplux">GitHub</a></li>
        <li><a href="https://www.instagram.com/geekplux">Instagram</a></li>
        <li><a href="https://twitter.com/geekplux">Twitter</a></li>
        <li><a href="http://geekplux.com/about">About</a></li>
        <li><a href="">Project (Coming soon)</a></li>
      </ul>
      <h2>Doing cool stuff on Web</h2>
      <p>
        I’m Xiang Gao, a freelance full-stack web developer and also a graduate student interested in Data Visualization. I try to always find new ways to create some novel or cool things through programming, and I hope you'll love some of my works/experiments.
      </p>
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
    font-family: "Open Sans", -apple-system,BlinkMacSystemFont,"Helvetica Neue","Hiragino Sans GB",Arial,sans-serif;
    box-shadow: 0 1px 20px #000;
  }

  .intro {
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
    animation: 2s fadeInDown;
  }
  .intro p {
    opacity: 0;
    font-size: 20px;
    animation: 2s 1s fadeInUp forwards;
  }


  .bio {
    height: 95vh;
    color: #262626;
    position: relative;
    padding: 0 10%;
  }

  .bio h2 {
    margin-top: 40vh;
    font-size: 64px;
    font-weight: bold;
    line-height: 1.2;
    word-break: break-word;
  }
  .bio p {
    font-size: 24px;
    font-family: 'Noto Sans S Chinese', sans-serif;
    font-weight: 300;
  }



  ul {
    padding: 5vh 0 0 0;
  }
  li {
    list-style: none;
    display: inline-block;
    margin: 0 20px;
  }
  li:first-child {
    margin-left: 0;
  }
  li a {
    color: #939393;
    font-size: 20px;
    font-family: monospace;
    text-decoration: none;
    transition: .5s;
  }
  li:hover a {
    color: #262626;
    font-size: 21px;
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

  @keyframes fadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

</style>
