import React from "react";
import "./GalleryGridWrapper.css";
import imagesData from "../data/ImagesData.json"

import Masony from "react-masonry-component";

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

  const onSet = (type) => {
    if (type == "prev") {
      if (imageModal.imageIndex != 0) {
        let data = imagesData[imageModal.imageIndex - 1];

        setImageModal((modal) => ({
          ...modal,
          imageIndex: imageModal.imageIndex - 1,
          modalSrc: data.url
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
          modalSrc: data.url
        }));
      }
    }
  };

  return (
    <>
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

          <a href="javascript:void(0)" className="prev" onClick={() => onSet("prev")}>
            &#10094;
          </a>
          <a href="javascript:void(0)" className="next" onClick={() => onSet("next")}>
            &#10095;
          </a>

          <div />
        </div>
      </div>
    </>
  );
}
