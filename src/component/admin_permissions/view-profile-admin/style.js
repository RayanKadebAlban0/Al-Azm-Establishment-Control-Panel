import styled from "styled-components";

export const Styles = styled.div`
  direction: rtl;
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
  font-family: inherit;

  .title {
    font-size: 26px;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 6px;
  }

  .subtitle {
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 32px;
    line-height: 1.6;
  }

  /* Main Form Layout - 2 Columns: Image Box on Right, Main Fields on Left */
  .form-layout {
    display: grid;
    grid-template-columns: 580px 2fr;
    gap: 32px;
    align-items: start;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }

  .image-upload-box {
    border: 2px dashed #d1d5db;
    border-radius: 12px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fafafa;
    height: 180px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-color: #000;
      background-color: #f3f4f6;
    }

    .icon-wrapper {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background-color: #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
      color: #6b7280;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .upload-text {
      font-size: 13px;
      color: #4b5563;
      font-weight: 600;
    }

    input[type="file"] {
      display: none;
    }
  }

  .fields-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .row-two-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  .row-full {
    display: grid;
    grid-template-columns: 1fr;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-size: 13px;
      font-weight: 600;
      color: #374151;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;

      input,
      select {
        width: 100%;
        padding: 10px 14px;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-size: 14px;
        outline: none;
        background-color: #ffffff;
        color: #111827;

        &:focus {
          border-color: #000;
        }

        &:disabled {
          background-color: #f9fafb;
          color: #6b7280;
          cursor: not-allowed;
        }
      }

      .icon-toggle {
        position: absolute;
        left: 12px;
        cursor: pointer;
        color: #6b7280;
        display: flex;
        align-items: center;
      }
    }

    .change-password-btn {
      align-self: flex-start;
      background: none;
      border: none;
      color: #000;
      font-weight: 700;
      font-size: 13px;
      cursor: pointer;
      margin-top: 6px;
      padding: 0;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .roles-section {
    margin-top: 32px;

    .section-title {
      font-size: 13px;
      font-weight: 600;
      color: #374151;
      margin-bottom: 16px;
    }

    .roles-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
  }

  .role-card {
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 16px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;

    &.selected {
      border-color: #000;

      .radio-circle {
        border-color: #000;

        &::after {
          display: block;
        }
      }
    }

    .radio-circle {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 2px solid #d1d5db;
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #000;
        display: none;
      }
    }

    .role-name {
      font-size: 14px;
      font-weight: 700;
      color: #111827;
    }

    .role-desc {
      font-size: 11px;
      color: #6b7280;
      line-height: 1.5;
    }
  }

  .submit-area {
    display: flex;
    justify-content: center;
    margin-top: 36px;

    button {
      background-color: #ffffff;
      color: #000000;
      border: 1.5px solid #000000;
      border-radius: 25px;
      padding: 10px 56px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #000000;
        color: #ffffff;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`;