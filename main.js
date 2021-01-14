:root {
    --gray-color: rgb(216, 214, 214);
    --yellow-color: rgb(248, 243, 90);
    --padding-micro: 8px;
    --padding-small: 12px;
    --padding-medium: 24px;
  }
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--padding-small) var(--padding-medium);
    background-color: var(--yellow-color);
  }
  .navbar__logo {
    font-size: 30px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
  .navbar__menuAndIcon {
    display: flex;
    align-items: center;
    color: var(--gray-color);
  }
  .navbar__menu {
    list-style: none;
    padding-left: 0;
    display: flex;
    font-size: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
  .navbar__menu li {
    padding: var(--padding-micro) var(--padding-small);
  }
  .navbar__menu li:hover {
    background-color: white;
    border-radius: 5px;
    transform: translateY(130px);
    transition: all 800ms cubic-bezier(0.08, 0.2, 1, -0.71);
  }
  .navbar__icons {
    display: flex;
    list-style: none;
    padding-left: var(--padding-medium);
  }
  .navbar__icons li {
    padding: 0 var(--padding-micro);
    font-size: xx-large;
  }
  .navbar__icons li:hover {
    color: black;
  }
  .navbar__toggleBtn {
    display: none;
    position: absolute;
    right: 30px;
    font-size: x-large;
  }
  .section {
    font-weight: bold;
    font-size: 100px;
    display: flex;
    flex-direction: column;
    padding: 150px 0 0 30px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
  }
  .yellow {
    color: var(--yellow-color);
  }
  @media screen and (max-width: 768px) {
    .navbar {
      flex-direction: column;
      align-items: flex-start;
      padding: var(--padding-medium);
    }
    .navbar__menuAndIcon {
      display: none;
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
    }
    .navbar__menu {
      flex-direction: column;
    }
    .navbar__menu li {
      text-align: right;
    }
    .navbar__menu li:hover {
      background-color: var(--yellow-color);
      transform: translateX(-100px);
    }
    .navbar__toggleBtn {
      display: block;
    }
    .navbar__toggleBtn:hover {
      color: var(--gray-color);
    }
    .navbar__menuAndIcon.active,
    .navbar__menuAndIcon.active {
      display: flex;
    }
    .section {
      font-size: 72px;
    }
    .navbar__logo {
      font-size: 28px;
    }
    .navbar__menu {
      font-size: 20px;
    }
  }