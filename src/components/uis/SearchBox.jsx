import React from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBAlert, MDBBtn } from 'mdb-react-ui-kit';
// import { search_images } from '../shared/functions';
import { MainComponentContext } from '../shared/constant';
import { useDispatch } from 'react-redux';
import { updatePageNumber, updateSearchValue } from '../shared/reduxSlice';

const SearchBox = () => {
    const inputRef = React.useRef(null)
    const useMainComponentContextIn = React.useContext(MainComponentContext)
    const dispatch = useDispatch()

    const handleSearch = React.useCallback(async () => {
        if (inputRef.current?.value == "") return
        useMainComponentContextIn.handleSearch(inputRef.current?.value)
        // const fetch_data = await search_images(inputRef.current?.value)
        // if (fetch_data == undefined) return alert("An error occured while performing the search, please try again")
        // console.log('fetch_data', fetch_data);
        // useMainComponentContextIn.handleUpdateImageList(fetch_data.photos)
    }, [inputRef.current])

  return (
    <>
      <MDBInputGroup>
        <MDBInput ref={e => inputRef.current = e} label='Search' onKeyUp={(e) => {
            dispatch(updateSearchValue(e.currentTarget.value))
            if (e.currentTarget.value == "") {
                dispatch(updatePageNumber(1))
                useMainComponentContextIn.fetch_images(undefined, true)
            }
            if (e.key.toLowerCase() == "enter") {
                handleSearch()
            }
        }} />
      </MDBInputGroup>
    </>
  );
}

export default SearchBox