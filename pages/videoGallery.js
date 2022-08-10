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
import styles from "../components/Benefits.module.css";

//import { useDisclosure } from '@chakra-ui/react/dist/declarations/src';

export default function Debug() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const [img, setImg] = React.useState("");

  const handleSizeClick = (src) => {
    setSize("full");
    onOpen();
    setImg(src);
  };

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
  const images = [
    "https://www.youtube.com/embed/sMt2uhhwh1g",
    "https://www.youtube.com/embed/sMt2uhhwh1g",
    "https://www.youtube.com/embed/sMt2uhhwh1g",
    "https://www.youtube.com/embed/sMt2uhhwh1g",
    "https://www.youtube.com/embed/sMt2uhhwh1g",
    "https://www.youtube.com/embed/sMt2uhhwh1g",
    "https://www.youtube.com/embed/sMt2uhhwh1g",
  ];

  return (
    <>
      <Nav />
      <div className="max-w-screen-xl py-15 mx-auto sm:px-6 lg:px-8 pt-4 pb-4">
        <div className="grid-cols-12">
          <div className={styles.fillWidthBack}>
            <a href="/" className={styles.buttonLinkBlue}>Back</a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl py-15 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
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
    </>
  );
}
