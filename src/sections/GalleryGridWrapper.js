import React from "react";
import "./GalleryGridWrapper.css";
import imagesData from "../data/ImagesData.json"

import Masony from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroll-component";



// Masory Options
const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 10,
  itemSelector: ".photo-item"
};

export default function App() {

  const [imageModal, setImageModal] = React.useState({
    showModal: false,
    modalSrc: null,
    imageIndex: null,
    currentSectionLength: null
  });

 

  const refresh = () => {
    console.log("refresh.....");
  };

  const onSet = (type) => {
    if (type == "prev") {
      if (imageModal.imageIndex != 0) {
        let data = imagesData[imageModal.imageIndex - 1];

        setImageModal((modal) => ({
          ...modal,
          imageIndex: imageModal.imageIndex - 1,
          modalSrc: data.urls.regular
        }));
      } else {
        alert("NO MORE LEFT IMAGE");
      }
    } else if (type == "next") {
      if (imageModal.imageIndex > imagesData.length) {
        alert("NO MORE LEFT IMAGE");
      } else {
        let data = imagesData[imageModal.imageIndex + 1];

        setImageModal((modal) => ({
          ...modal,
          imageIndex: imageModal.imageIndex + 1,
          modalSrc: data.urls.regular
        }));
      }
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={imagesData.length}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
      >
        <Masony
          className={"photo-list"}
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {imagesData &&
            imagesData.map((photo, index) => (
              <li className={`photo-item`} key={index}>
                <img
                  src={photo.url}
                  alt=""
                  onClick={() => {
                    setImageModal({
                      showModal: true,
                      modalSrc: photo.url,
                      imageIndex: index,
                      currentSectionLength: imagesData.length
                    });
                  }}
                />
              </li>
            ))}
        </Masony>
      </InfiniteScroll>

      <div
        id="myModal"
        className="modal"
        style={{
          display: imageModal.showModal ? "block" : "none"
        }}
      >
        <div>
          <span
            className="close"
            onClick={() =>
              setImageModal((modal) => ({ ...modal, showModal: false }))
            }
          >
            &times;
          </span>

          <div
            className="mySlides"
            style={{ display: imageModal.showModal ? "block" : "none" }}
          >
            <img
              className="modal-content"
              id="img01"
              src={imageModal.modalSrc}
              alt=""
            />
          </div>

          <a href="#" className="prev" onClick={() => onSet("prev")}>
            &#10094;
          </a>
          <a href="#" className="next" onClick={() => onSet("next")}>
            &#10095;
          </a>

          <div />
        </div>
      </div>
    </>
  );
}
