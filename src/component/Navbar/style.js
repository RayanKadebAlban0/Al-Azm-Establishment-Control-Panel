import styled from "styled-components";

export const Styles = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1000;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  height: 70px;
  padding: 0 25px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  direction: rtl; 

  width: 100%;
  box-sizing: border-box;

  .class-ul {
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
  }

  .part1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }

  .class_logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;

    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      color: #222222;
      margin: 0;
      white-space: nowrap;
    }

    .class_img_logo img {
      width: 65px;
      height: 65px;
      /* border-radius: 50%; */
      object-fit: cover;
      border: none;
    }
  }

  .class_search {
    width: 290px;
    height: 40px;
    border-radius: 25px;
    background-color: #ffffff; 
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 10px 0 10px;
    border: 1px solid #000000;
    margin: 50px;

    .class_search_input {
      outline: none;
      border: none;
      background: transparent;
      width: 100%;
      padding: 0 10px;
      font-size: 0.88rem;
      color: #333;
      direction: rtl;

      &::placeholder {
        color: #888888;
      }
    }

    .class_search_icon {
      font-size: 1.2rem;
      color: #000000;
    }

    .class_search_container_p {
      display: flex;
      align-items: center;

      .class_search_p {
        font-size: 0.85rem;
        padding: 1px 12px;
        border-radius: 20px;
        background-color: #000000;
        color: #ffffff;
        margin: 0;
        cursor: pointer;
        font-weight: 500;
        transition: background-color 0.2s;

        &:hover {
          background-color: #333333;
        }
      }
    }
  }

  .part2 {
    display: flex;
    align-items: center;
  }

  .class_nav_section_left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }

  .class_nav_icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: auto;
    background-color: #e8e8f0; 
    padding: 6px 16px;
    border-radius: 25px;
    font-size: 1.2rem;
    gap: 25px;
    border:solid 1px #0e0d0d ;
    box-shadow: 0px 3px 3px #4d4c4c;


    .class_nav_icon_setting {
      margin: 0;
      color: #222222;
      cursor: pointer;
    }

    .button_notifi {
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      padding: 0;
      cursor: pointer;
      font-size: 1.25rem;
      color: #222222;
    }
  }

  .class_nav_image img {
    border-radius: 50%;
    width: 44px;
    height: 44px;
    object-fit: cover;
    border: 1px solid black;
  }
`;