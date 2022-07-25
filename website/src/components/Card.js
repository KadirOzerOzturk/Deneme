import React, { Component } from "react";
import UniversityConsumer from "../context";
import { FaComments } from "react-icons/fa";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

class Card extends Component {
  render() {
    const { name, picRef } = this.props;
    return (
      <UniversityConsumer>
        {(value) => {
          return (
            
            <div className="container " >
              
                <div class="col">
                <MDBCard style={{ maxWidth: "50%" }}>
                <MDBCardImage
                  src={picRef}
                  position="top"
                  alt={name} 
                  
                />
                <MDBCardBody>
                  <MDBCardTitle>{name}</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
              </div>
              
            </div>
            
          );
        }}
      </UniversityConsumer>
    );
  }
}
export default Card;
