import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Styles } from "./style";
const PendingRequests = ({data}) => {
  return (
    <Styles>
<div className="update_user_requests">
      {/* <div className="header_requests">
        <div>
          {" "}
          <h6>طلبات معلقة:</h6>
          <p>إجمالي الطلبات المعلقة :3 طلبات</p>
        </div>
        <div>
          <Link to="كك" className="link_view_all_requests">
            عرض المزيد
          </Link>
        </div>
      </div> */}
      <div className="card_item">
        <div className="content_card">
          <div style={{width:'50%'}}>
            <img src="" alt="profile" className="img" />
            <div className="description">
              <h6>{data.name}</h6>
              <p>{data.date}</p>
              <p>{data.hours}</p>{" "}
              {
                data.requestCrippling?(<><p style={{display:'flex',gap:'2px'}}>طلب تعطيل تدريب  
                <b>{data.requestCrippling}
                  <span>(انقر لعرض النشاط)</span>
                </b>
                </p>
                <p style={{display:'flex',gap:'5px'}}>سبب التعطيل:
                  <span>{data.cause}</span>
                  </p>
                </>
                ):(<></>)
              }
              
              {
                data.crippling?(<><p style={{display:'flex',gap:'2px'}} >تم تعطيل  
                <p style={{display:'flex',gap:'2px'}}>{data.crippling}
                  <b>(انقر لعرض النشاط)</b>
                </p>
                </p>
               
                <p style={{display:'flex',gap:'5px'}}>سبب التعطيل:
                  <span>{data.cause}</span>
                  </p>
                </>
                ):(<></>)
              }
               {
                data.requestTraning?(<><p style={{display:'flex',gap:'2px'}}>طلب تدريب : 
                  <span>{data.requestTraning}</span>
                
                </p>
                <p>سبب الرفض:</p>
                <input className="input_cause"/>
                
                </>
                ):(<></>)
              }
             
            </div>
          </div>
          {data.crippling?(<></>):( <button className="state"> تم الاعتماد</button>)}
         
        </div>

          {
            data.crippling?(<></>):( 
        <div className="button">
          {" "}
          <Button className="yes">أعتماد</Button>
          <Button className="no">رفض</Button>
        </div>)
          }
         
      </div>
      
    </div>
    </Styles>
    
  );
};

export default PendingRequests;
