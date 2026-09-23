import styled from "styled-components";

export const Styles = styled.div`
  direction: rtl;
  padding: 30px 40px;
  background-color: #ffffff;
  font-family: "Cairo", sans-serif;
  color: #333333;

  .activity_image_preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.disabled_upload {
  cursor: default;
} 

input:disabled,
textarea:disabled,
select:disabled {
  opacity: 1;
  cursor: default;
  background: #fff;
  color: #111;
  -webkit-text-fill-color: #111;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

  .class_form_grid {
    max-width: 9000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .part1 {
    display: flex;
    justify-content: space-between;
    gap: 300px;
    width: 100%;

    .partRight {
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex: 1;
    }

    .partLeft {
      padding: 0px;
      padding-left: 20px;
      margin-right: 0px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 260px;
    }
  }

  /* الصفوف المزدوجة */
  .part2,
  .part3,
  .part4,
  .part5 {
    display: flex;
    gap: 20px;
    width: 100%;
    flex-wrap: nowrap;
    align-items: flex-end;

    .class_field {
      flex: 1;
      min-width: 0; 
    }
  }

  .class_field {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    /* border: none; */
    label {
      font-weight: 600;
      color: #333333;
      font-size: 13px;
      text-align: right;
    }

    .input,
select,
input[type="text"],
input[type="number"],
input[type="time"] {
  width: 100% !important;
  height: 42px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 13px;
  background-color: #ffffff;
  outline: none;
  box-sizing: border-box;
  color: #333;

  &:focus {
    border-color: #10b981;
  }
}

.react-datepicker-wrapper {
  width: 100% !important;
  display: block;
}

.react-datepicker__input-container {
  width: 100%;
}

.react-datepicker__input-container input {
  width: 100%;
  box-sizing: border-box;
}



    .textarea_input {
      height: 110px !important;
      resize: none;
      padding: 10px 14px;
    }
  }

  .full_width_row {
    width: 100%;
  }

  /* رفع الصور */
  .upload_section_row {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;

    .upload_box_wrapper {
      display: flex;
      flex-direction: column;
      gap: 6px;

      .title {
        font-weight: 600;
        font-size: 12px;
        color: #333;
        margin: 0;

        .sub_title {
          font-weight: normal;
          font-size: 10px;
          color: #888;
        }
      }
    }
  }

  .container_camera {
    width: 100%;
    height: 90px;
    border: 1.5px dashed #d1d5db;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    cursor: pointer;

    .camera {
      font-size: 22px;
      color: #9ca3af;
      background-color: #f3f4f6;
      border-radius: 50%;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:hover {
      border-color: #10b981;
    }
  }

  .file_name_preview {
    font-size: 11px;
    color: #10b981;
    margin: 2px 0 0 0;
  }

  .class_type_user_row {
    display: flex;
    gap: 12px;
    width: 100%;

    .card_radio {
      flex: 1;
      border: 1px solid #d1d5db;
      border-radius: 12px;
      display: flex;
      align-items: center;
      padding: 0 12px;
      height: 42px;
      cursor: pointer;
      background-color: #ffffff;
      box-sizing: border-box;

      input[type="checkbox"] {
        display: none;
      }

      .icon_and_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        h6 {
          margin: 0;
          font-size: 13px;
          color: #333;
          font-weight: 500;
        }

        .toggle_switch {
          width: 36px;
          height: 20px;
          background-color: #e5e7eb;
          border-radius: 20px;
          display: flex;
          align-items: center;
          padding: 2px;
          transition: all 0.2s ease;

          .toggle_circle {
            width: 16px;
            height: 16px;
            background-color: #ffffff;
            border-radius: 50%;
            transition: all 0.2s ease;
          }

          &.active {
            background-color: #10b981;

            .toggle_circle {
              transform: translateX(-16px);
            }
          }
        }
      }

      &.activite {
        border-color: #10b981;
      }
    }
  }

  .error_massage {
    color: #ef4444;
    font-size: 11px;
  }

  .massage_warning {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #ef4444;
    font-size: 11px;
    margin-top: 4px;
  }

  .container_button {
    display: flex;
    justify-content: center;
    margin-top: 15px;

    .button {
      background-color: #ffffff;
      color: #111827;
      border: 1px solid #111827;
      padding: 8px 40px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        background-color: #111827;
        color: #ffffff;
      }
    }
  }
`;
