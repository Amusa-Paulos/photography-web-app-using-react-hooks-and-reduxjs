import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { ImagePreviewUI } from "../reusables/ReUsables";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PreviewUI = React.memo(() => {
    const previewData = useSelector(state => state.main.previewData)
    const navigate = useNavigate()
    return (
        <MDBContainer fluid className="position-fixed top-0 right-0 h-100" 
            onClick={() => navigate(-1)}
            style={{backgroundColor: 'rgba(0,0,0,0.7)'}}>
            <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <ImagePreviewUI image={previewData.image} photographer={previewData.photographer} />
            </MDBRow>
        </MDBContainer>
    )
})

export default PreviewUI