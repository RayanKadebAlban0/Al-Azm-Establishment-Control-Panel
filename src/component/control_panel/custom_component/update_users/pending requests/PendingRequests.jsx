import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const PendingRequests = ({data}) => {
  return (
  
      <div className="card_item">
        <div className="content_card">
          <div>
            <img src="" alt="profile" className="img" />
            <div className="description">
              <h6>{data.name}</h6>
              <p>{data.start_date}</p>
              {data.hours_window_from?( <p>ساعات مقدمة:
                <span> {data.hours_window_from}</span>
               </p>):(<></>)}
             
              {
                data.name?(<><p style={{display:'flex',gap:'2px'}}>طلب تعطيل تدريب:
                <span>{data.name}
                </span>
                </p>
                
                </>
                ):(<></>)
              }
              
             
               {
                data.requestTraning?(<><p style={{display:'flex',gap:'2px'}}>طلب تدريب : 
                  <span>{data.requestTraning}</span>
                
                </p>
                
                </>
                ):(<></>)
              }
                 </div>
          </div>
          <button className="state"> بانتظار الموافقة</button>
        </div>

        <div className="button">
          {" "}
          <Button className="yes">أعتماد</Button>
          <Button className="no">رفض</Button>
        </div>
      </div>
     
    
  );
};

export default PendingRequests;
