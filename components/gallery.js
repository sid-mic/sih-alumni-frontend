import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Nav } from "../components/Navbar";
import React from "react";
import styles from "./Benefits.module.css";
//import styles from ".module.css"

//import { useDisclosure } from '@chakra-ui/react/dist/declarations/src';

export default function Gallery() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const [img, setImg] = React.useState("");

  const handleSizeClick = (src) => {
    setSize("full");
    onOpen();
    setImg(src);

    console.log(img);
  };

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
  const images = [
    "https://www.youtube.com/embed/sMt2uhhwh1g",
    "https://www.youtube.com/embed/sMt2uhhwh1g",
    "https://www.youtube.com/embed/sMt2uhhwh1g",
  ];

  return (
    <div className="max-w-screen-xl py-15 mx-auto sm:px-6 lg:px-8">
      <div>
        <div className="text-center">
          <div className="bg-hero-pattern mt-0 pt-4 font-bold mb-0 sm:text-xl text-xl bg-cover bg-center">
            <h1
              className={
                styles.mainHeading +
                " font-bold mt-6 mb-14 pb-2 sm:text-xl text-2xl md:text-3xl"
              }
            >
              Video
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Gallery
              </span>
              <div className={styles.bottomLine}></div>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <div key={index} bg="orange.300">
              <div>
                <iframe
                  width="400"
                  height="265"
                  style={{ position: "absolute" }}
                  src={src}
                  allowtransparency="true"
                  title="YouTube video player"
                  frameborder="0"
                  allowfullscreen
                ></iframe>

                <div
                  style={{
                    position: "relative",
                    width: "400px",
                    height: "265px",
                    background: "transparent",
                  }}
                  onClick={(e) => handleSizeClick(src)}
                >
                  {" "}
                </div>
              </div>
            </div>
          ))}
          <span></span>

          <Button style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="/videoGallery"
              target="blank"
              aria-label="Gallery"
              title="Gallery"
              className="flex items-center"
              style={{
                background: "blue",
                color: "white",
                padding: "1rem",
                margin: "1rem",
              }}
            >
              View More
            </a>
          </Button>
        </div>
      </div>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <h1></h1>

            <iframe
              width="500px"
              height="315px"
              src={img}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </ModalBody>
          <ModalFooter
            style={{ position: "absolute", top: "7rem", right: "0" }}
          >
            <Button
              color="white"
              style={{ background: "blue", padding: "1rem", margin: "1rem" }}
              variant="solid"
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
