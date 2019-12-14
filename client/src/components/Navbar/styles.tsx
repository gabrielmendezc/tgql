import styled from 'styled-components'

export const ProfilePictureWrapper = styled.div`
  min-width: 30px;
  min-height: 30px;
  background-color: rgba(0, 0, 0, 0.35);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30px;
    height: 30px;
  }
`

export const NavbarAuth = styled.nav`
  margin-bottom: 10px;
  border-bottom: 1px solid rgb(230, 236, 240);

  svg {
    width: 25px;
  }

  ul.upper-nav {
    svg {
      fill: var(--complementary-4);
    }
    display: flex;
    min-height: 55px;
    align-items: center;
    padding: 0 2em;
    justify-content: space-between;

    li {
      display: inline;

      a {
        padding: 7px;
        border-radius: 50%;
        width: 37px;
        display: flex;
        transition: background-color 300ms ease-in-out;
        align-items: center;
        justify-content: center;
        height: 37px;

        &:hover {
          background-color: var(--complementary-3);
        }
      }

      &:first-of-type {
        display: flex;
        align-items: center;

        h1 {
          margin-left: 0.75em;
          font-size: 1.9rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 900;
        }
      }
    }
  }

  ul.lower-nav {
    position: fixed;
    min-height: 55px;
    padding: 0 3em;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    border-top: 1px solid rgb(230, 236, 240);
    align-items: center;
    justify-content: space-between;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        position: relative;
        display: flex;
        align-items: center;
        padding: 7px;
        border-radius: 50%;
        justify-content: center;

        transition: background-color 300ms ease-in-out;

        &:hover {
          background-color: var(--complementary-3);
        }
        svg {
          fill: var(--complementary-4);
        }
        &.active {
          background-color: var(--complementary-3);
        }
      }
    }
  }
`

export const NavbarUnauth = styled.header`
  background-color: transparent;
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: none;
  }

  h1 {
    color: white;
    font-size: 2.4rem;
  }

  @media screen and (min-width: 768px) {
    min-height: 100px;
    justify-content: space-evenly;
    background-color: var(--complementary-1);

    h1 {
      font-size: 3rem;
    }

    form {
      display: flex;
      align-items: center;

      button[type='submit'] {
        padding: 0.85em;
        border-radius: 3px;
        font-size: 1.5rem;
        border: none;
        color: white;
        background: transparent;
        cursor: pointer;
        box-shadow: white 0px 0px 3px 1px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        margin-right: 4em;
      }
    }
  }

  @media screen and (max-width: 830px) {
    form {
      .form-group {
        margin-right: 1em;
      }
    }
  }
`
