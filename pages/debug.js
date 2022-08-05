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

//import { useDisclosure } from '@chakra-ui/react/dist/declarations/src';

export default function Debug() {
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
    "https://www.youtube.com/embed/sMt2uhhwh1g",
    "https://www.youtube.com/embed/sMt2uhhwh1g",
    "https://www.youtube.com/embed/sMt2uhhwh1g",
  ];

  return (
    <>
      <Nav />
      <>
        <Grid
          templateAreas={`"header header header"`}
          gridTemplateRows={"1fr 1fr 1fr"}
          gridTemplateColumns={"1fr 1fr 1fr"}
          h="200px"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          {images.map((src, index) => (
            <GridItem key={index} bg="orange.300" area={"header"}>
              <div>
                <iframe
                  width="500"
                  height="315"
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
                    width: "500px",
                    height: "315px",
                    zIndex: "9999",
                    background: "transparent",
                  }}
                  onClick={(e) => handleSizeClick(src)}
                >
                  {" "}
                </div>
              </div>
            </GridItem>
          ))}
        </Grid>
      </>

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
              width="560"
              height="315"
              src={img}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </ModalBody>
          <ModalFooter>
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
