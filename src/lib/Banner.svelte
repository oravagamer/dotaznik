<nav>
  <div class="wrapper">
    <div class="wrapper2">
      <img src="/icon.png" alt="Logo" class="favicon" />
      <h1>Zochova dotaznik</h1>
    </div>
    <a
      href="https://github.com/oravagamer/dotaznik"
      target="_blank"
      rel="noreferrer">Github</a
    >
  </div>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    width: 100%;
    background: rgb(48, 41, 171);
    background: linear-gradient(
      90deg,
      rgba(48, 41, 171, 1) 0%,
      rgba(67, 113, 209, 1) 100%
    );
    border-bottom: 2px solid #000;
    z-index: 1;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
  }
  .wrapper2 {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  h1 {
    font-size: 1.9rem;
    margin: 0;
  }
  .favicon {
    width: 30px;
    height: 30px;
    margin-right: 0.4em;
  }
  a {
    font-size: 1.3rem;
    color: white;
  }
  a:hover {
    color: white;
  }
  a:focus {
    outline-color: #fff;
  }
</style>
