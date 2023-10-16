import { MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { CardUI } from "../reusables/ReUsables";
import { MainComponentContext } from "../shared/constant";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updatePreviewData } from "../shared/reduxSlice";

const Home = React.memo((props) => {
    const useMainComponentContextIn = React.useContext(MainComponentContext)

    return (
        <MDBRow className="py-4">
            {
                useMainComponentContextIn.imageList.length > 0 ?
                <ImageListsUI imageList={useMainComponentContextIn.imageList} /> :
                <div><small>No images</small></div>
            }
            
        </MDBRow>
    )
})

const ImageListsUI = React.memo((props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRoute = React.useCallback((image, photographer) => {
        navigate('preview')
        dispatch(updatePreviewData({image, photographer}))
    }, [])
    
    return props.imageList.map(image => 
        <CardUI 
            key={image.id}
            image={image.src.large}
            photographer={image.photographer}
            handleRoute={handleRoute}
        />
    )
})

export default Home