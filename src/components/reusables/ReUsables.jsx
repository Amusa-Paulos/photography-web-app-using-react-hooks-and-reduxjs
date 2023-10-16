import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
  MDBCol
} from 'mdb-react-ui-kit';

export const CardUI = React.memo((props) => {
  return (
    <MDBCol xs={12} md={6} lg={4} className='mb-3' onClick={() => props.handleRoute(props.image, props.photographer)}>
        <MDBCard background='dark' className='text-white'>
        <MDBCardImage overlay src={props.image} alt='...' />
        <MDBCardOverlay>
            <MDBCardTitle>{props.photographer}</MDBCardTitle>
        </MDBCardOverlay>
        </MDBCard>
    </MDBCol>
  );
})

export const ImagePreviewUI = React.memo((props) => {
  return (
    <MDBCol xs={8} lg={4}>
        <MDBCard background='dark' className='text-white'>
        <MDBCardImage overlay src={props.image} alt='...' />
        <MDBCardOverlay>
            <MDBCardTitle>{props.photographer}</MDBCardTitle>
        </MDBCardOverlay>
        </MDBCard>
    </MDBCol>
  );
})

