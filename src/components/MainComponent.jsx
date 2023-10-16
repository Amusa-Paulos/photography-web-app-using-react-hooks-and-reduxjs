import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Home from "./uis/Home";
import SearchBox from "./uis/SearchBox";
import { get_images, search_images } from "./shared/functions";
import { MainComponentContext } from "./shared/constant";
import { useDispatch, useSelector } from "react-redux";
import { updateLoading, updatePageNumber } from "./shared/reduxSlice";
import { Outlet } from "react-router-dom";


const MainComponent = React.memo((props) => {
    const [imageList, updateImageList] = React.useState([])
    const currentPage = useSelector(state => state.main.page)
    const searchValue = useSelector(state => state.main.searchValue)
    const loading = useSelector(state => state.main.loading)
    const dispatch = useDispatch()

    const fetch_images = React.useCallback(async (page, reset) => {
        const req_page = page ?? currentPage;
        // if (page != undefined) dispatch(updateLoading(true))
        dispatch(updateLoading(true))
        const request_images = await get_images('page='+req_page)
        // if (page != undefined) dispatch(updateLoading(false))
        dispatch(updateLoading(false))
        if (request_images == undefined) return alert("An error occured could not get images, please try again");
        console.log("request_images", request_images);
        if (reset != undefined) {
            updateImageList(request_images.photos)
        }else{
            const all_image_list = [...imageList, ...request_images.photos]
            updateImageList(all_image_list)
        }
        dispatch(updatePageNumber(request_images.page))
    }, [currentPage, imageList])

    const handleUpdateImageList = React.useCallback((newImageList) => {
        updateImageList(newImageList)
    }, [])

    const handleSearch = React.useCallback(async (searchValue, page) => {
        if (searchValue == "") return
        // if (page != undefined) dispatch(updateLoading(true))
        dispatch(updateLoading(true))
        const fetch_data = await search_images(searchValue, page)
        // if (page != undefined) dispatch(updateLoading(false))
        dispatch(updateLoading(false))
        if (fetch_data == undefined) return alert("An error occured while performing the search, please try again")
        console.log('fetch_data', fetch_data);
        if (page == undefined) {
            handleUpdateImageList([])
            setTimeout(() => {
                handleUpdateImageList(fetch_data.photos)
            }, 600);
        }else{
            const all_image_list = [...imageList, ...fetch_data.photos]
            handleUpdateImageList(all_image_list)
        }
        dispatch(updatePageNumber(fetch_data.page))
    }, [imageList])

    // React.useEffect(() => {
    //     console.log("searchValue", searchValue);
    //     if (searchValue == "") {
    //         fetch_images(undefined, true)
    //     }
    // }, [searchValue])

    const handleLoadMore = React.useCallback(() => {
        if (searchValue != "") {
            return handleSearch(searchValue, currentPage + 1)
        }
        fetch_images(currentPage + 1)
    }, [currentPage, searchValue, imageList])

    // React.useEffect(() => {
    //     fetch_images()
    // }, [])

    React.useLayoutEffect(() => {
        fetch_images()
    }, [])

    // memo
    // useState
    // useRef
    // useContext
    // useEffect
    // useLayoutEffect


    return (
        <MainComponentContext.Provider value={{imageList, handleSearch, fetch_images}}>
            <MDBContainer fluid style={{height: '100vh'}} className="py-5 px-5">
                <div className="h1">Cool Photo App</div>
                <SearchBox />
                {
                    loading &&
                    <div className="my-4 d-flex justify-content-center">
                        Loading...
                    </div>
                }
                <Home />
                <div className="my-4 d-flex justify-content-center">
                    <MDBBtn onClick={handleLoadMore} disabled={loading}>
                        {
                            loading ? "Loading..." : "Load More"
                        } 
                    </MDBBtn>
                </div>
                <Outlet />
            </MDBContainer>
        </MainComponentContext.Provider>
    )
})

export default MainComponent