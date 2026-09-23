import styled from "styled-components";

export const Styles = styled.div`
  width: 100%;
  height: 100%;

  .card1 {
    width: 100%;
    height: 100%;
  }

  .card1 > .MuiCard-root {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

.badge_type {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.82);
  color: #fff;
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 13px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.badge_type .tag_icon {
  font-size: 15px;
  color: #fff;
}

  .card_media {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
    flex-shrink: 0;
  }
  .card_content {
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: #fff;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
    flex: 1;
  }

  .container_title_status {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;

    min-height: 58px;
  }

  .status_btn {
    border: 1px solid #ddd;
    padding: 6px 10px;
    border-radius: 12px;
    font-size: 13px;
    background: #fff;
    flex-shrink: 0;
  }

  .status_btn.pending {
    background: #fff3cd;
    border-color: #f0c36d;
  }

  .status_btn.completed {
    background: #d4edda;
    border-color: #8ccf9b;
  }

  .activity_title {
    font-weight: 700 !important;
    margin: 0 !important;
    min-height: 56px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .activity_details_list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: #444;
    font-size: 14px;
  }

  .detail_item {
    display: flex;
    gap: 8px;
    align-items: center;
    min-height: 24px;
  }

  .detail_item .icon {
    color: #555;

    font-size: 18px;
  }

  .pending_requests_text {
    color: #000000;
    font-size: 13px;
    margin: 0;
  }

  .card_action {
    display: flex;
    gap: 12px;
    justify-content: space-between;
    margin-top: auto;
  width: 100%;
  }
.card_action a {
  flex: 1;
  text-decoration: none;
}

.card_action .button {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #0a0a0a;
  color: #000;
  background: #fff;
  text-transform: none;
  font-size: 19px;
}


  @media (max-width: 768px) {
    .card_media {
      height: 120px;
    }
  }
`;
