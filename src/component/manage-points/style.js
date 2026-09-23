import styled from "styled-components";

export const Styles = styled.div`
  direction: rtl;
  font-family: "Cairo", sans-serif;
  padding: 10px 20px;

  .page_title {
    font-size: 24px;
    font-weight: bold;
    color: #2b2b2b;
    margin-bottom: 25px;
  }

  .main_grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: start;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }


  .toggle_button{
    border: none;
    background-color: #ffffff;
  }
  .search_section {
    display: flex;
    flex-direction: column;
    gap: 15px;

    .label {
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }

    .search_input_wrapper {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;

      .class_search_icon {
        position: absolute;
        right: 15px;
        font-size: 20px;
        color: #777;
        pointer-events: none;
        z-index: 1;
      }

      input {
        width: 100%;
        padding: 10px 40px 10px 15px;
        border: 1px solid #ccc;
        border-radius: 20px;
        outline: none;
        font-size: 14px;
        font-family: inherit;

        &:focus {
          border-color: #000;
        }
      }
    }

    .search_icon {
      position: absolute;
      right: 15px;
      color: #777;
    }
  }

  .user_card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:30px ;
    border: 1px solid #000000;
    width: 100%;
    border-radius: 12px;
    padding: 12px 18px;
    background-color: #ffffff;

    .user_info {
      display: flex;
      align-items: center;
      gap: 12px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }

      .details {
        .name {
          font-size: 16px;
          font-weight: bold;
          color: #000;
        }
        .status {
          font-size: 12px;
          color: #2e7d32;
          margin-top: 2px;
        }
      }
    }

    .points_badge {
      background-color: #ffffff;
      border-radius: 8px;
      border: #000000 1px solid;
      padding: 6px 12px;
      text-align: center;
      font-size: 12px;
      color: #555;

      span {
        display: block;
        font-weight: bold;
        color: #000;
        background-color: #e0e0e0;
      }
    }
  }

  .action_type_buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    border: 1px solid #000;
    padding: 2px;
    border-radius: 8px;
    background-color: #ffffff;
    button {
      flex: 1;
      padding: 10px;
      border-radius: 8px;
      border: none;
      background: #ffffff;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s ease;

      &.active {
        background: #e8e8e8;
        border: 1px solid #000;
        border-color: #000;
        color: #000;
      }
    }
  }

  .counter_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 25px 0;

    .counter_btn {
      width: 36px;
      height: 36px;
      border-radius: 6px;
      border: 1px solid #cccccc;
      background: #eee;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: #ddd;
      }
    }

    .points_input {
      width: 80px;
      height: 36px;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 16px;
      font-weight: bold;
      outline: none;
    }
  }

  .textarea_group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 20px;
    height: 100%;

    label {
      font-size: 13px;
      font-weight: 600;
      color: #444141;
    }

    .textarea_wrapper {
      position: relative;

      textarea {
        width: 100%;
        height: 120px;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 12px;
        resize: none;
        outline: none;
        font-family: inherit;
        font-size: 13px;

        &:focus {
          border-color: #000;
        }
      }

      .char_count {
        position: absolute;
        bottom: 8px;
        left: 12px;
        font-size: 11px;
        color: #888;
      }
    }
  }

  /* زر الإشعار والتأكيد */
  .bottom_actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin-top: 10px;

    .toggle_wrapper {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      gap: 10px;
      width: 100%;
      cursor: pointer;

      .switch {
        position: relative;
        display: inline-block;
        width: 44px;
        height: 22px;

        input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.3s;
          border-radius: 22px;

          &:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: 0.3s;
            border-radius: 50%;
          }
        }

        input:checked + .slider {
          background-color: #4caf50;
        }

        input:checked + .slider:before {
          transform: translateX(22px);
        }
      }

      .toggle_label {
        font-size: 14px;
        font-weight: bold;
        color: #333;
      }
    }

    .submit_btn {
      width: 200px;
      padding: 10px;
      border-radius: 20px;
      border: 1px solid #000;
      background: transparent;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: #000;
        color: #fff;
      }

      &:disabled {
        border-color: #ccc;
        color: #ccc;
        cursor: not-allowed;
      }
    }
  }
`;
