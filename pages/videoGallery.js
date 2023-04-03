/*import Head from "next/head";
import Banner from "../components/Banner";
import { Feature } from "../components/Feature";
import Featured from "../components/Featured";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import Scroller from "../components/Marquee";
import { Nav } from "../components/Navbar";
import { useEffect, useState } from "react";
import authImport from "../utils/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../components/Loading";
import Router from "next/router";


export default function Debug() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [heights, setHeight] = useState(true);

  useEffect(async () => {
    setAuth(authImport());
    if (authImport().isAuth) {
      await Router.push("/dashboard");
    }

    setIsLoading(false);
  }, [""]);
  return (
    //Add svg with parallax scroll

    <div className="flex flex-col min-h-screen">
      <Head>
        <title>MIC Alumni Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          
          <div class="container mx-auto lg:grid lg:grid-cols-3 lg:gap-2">
            <div class="w-full rounded">
               
            <iframe width="500"  height="315" onClick={() => setHeight(false)} src="https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "allowfullscreen"></iframe>
               
            </div>
            <div class="w-full rounded">
                
            <a class="spotlight" href="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg"
                    data-src-800="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg"
                    data-src-1200="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg"
                    data-src-2400="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg"
                    data-src-3800="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg">
                    <img src="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg" />
                </a>
                
            </div>
            <div class="w-full rounded">
            <iframe width="500" height="315" src="https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "allowfullscreen"></iframe>
            </div>

            <div class="w-full rounded">
            <iframe width="500" height="315" src="https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen = "allowfullscreen"></iframe>
            </div>
            <div class="w-full rounded">
                <a class="spotlight" href="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg"
                    data-src-800="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg"
                    data-src-1200="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg"
                    data-src-2400="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg"
                    data-src-3800="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg">
                    <img src="https://cdn.pixabay.com/photo/2022/06/19/07/12/mount-kilimanjaro-7271184__340.jpg" />
                </a>
            </div>
        </div>
          
        </>
      )}
    </div>
  );
}*/
/*
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
  ButtonGroup
} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Nav } from "../components/Navbar";
import React from 'react'

//import { useDisclosure } from '@chakra-ui/react/dist/declarations/src';

export default function Debug() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')
  const [img,setImg] = React.useState('')
  

  const handleSizeClick = (e) => {
    setSize('full')
    onOpen()
    setImg(e.target.src)

    console.log(img)
  }

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full']
  const images = ["https://www.youtube.com/embed/sMt2uhhwh1g","https://www.youtube.com/embed/sMt2uhhwh1g","https://www.youtube.com/embed/sMt2uhhwh1g"]

  return (
    <>
      
      <Nav />
        
        <>
        <Grid
  templateAreas={`"header header header"`}
  gridTemplateRows={'1fr 1fr 1fr'}
  gridTemplateColumns={'1fr 1fr 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem  bg='orange.300' area={'header'}>
  <div >
          
          <iframe  width="500" height="315" style = {{position : "absolute"}} src= "https://www.youtube.com/embed/sMt2uhhwh1g" allowtransparency = "true"  title="YouTube video player" frameborder="0" allowfullscreen >


          </iframe>

          <div style = {{position : "relative" , width : "500px" , height : "315px" , zIndex : "9999" , background : "transparent"}} onClick={(e) => handleSizeClick(e)} src = "https://www.youtube.com/embed/sMt2uhhwh1g"> </div>
          
         
          </div>
  </GridItem>
  <GridItem  bg='orange.300' area={'header'}>
  <div >
          
          <iframe  width="500" height="315" style = {{position : "absolute"}} src= "https://www.youtube.com/embed/sMt2uhhwh1g" allowtransparency = "true"  title="YouTube video player" frameborder="0" allowfullscreen >


          </iframe>

          <div style = {{position : "relative" , width : "500px" , height : "315px" , zIndex : "9999" , background : "transparent"}} onClick={(e) => handleSizeClick(e)} src = "https://www.youtube.com/embed/sMt2uhhwh1g"> </div>
          
         
          </div>
  </GridItem>
  <GridItem  bg='orange.300' area={'header'}>
  <div >
          
          <iframe  width="500" height="315" style = {{position : "absolute"}} src= "https://www.youtube.com/embed/sMt2uhhwh1g" allowtransparency = "true"  title="YouTube video player" frameborder="0" allowfullscreen >


          </iframe>

          <div style = {{position : "relative" , width : "500px" , height : "315px" , zIndex : "9999" , background : "transparent"}} onClick={(e) => handleSizeClick(e)} src = "https://www.youtube.com/embed/sMt2uhhwh1g"> </div>
          
         
          </div>
  </GridItem>

  <GridItem  bg='orange.300' area={'header'}>
  <div >
          
          <iframe  width="500" height="315" style = {{position : "absolute"}} src= "https://www.youtube.com/embed/sMt2uhhwh1g" allowtransparency = "true"  title="YouTube video player" frameborder="0" allowfullscreen >


          </iframe>

          <div style = {{position : "relative" , width : "500px" , height : "315px" , zIndex : "9999" , background : "transparent"}} onClick={(e) => handleSizeClick(e)} src = "https://www.youtube.com/embed/sMt2uhhwh1g"> </div>
          
         
          </div>
  </GridItem>

  <GridItem  bg='orange.300' area={'header'}>
  <div >
          
          <iframe  width="500" height="315" style = {{position : "absolute"}} src= "https://www.youtube.com/embed/sMt2uhhwh1g" allowtransparency = "true"  title="YouTube video player" frameborder="0" allowfullscreen >


          </iframe>

          <div style = {{position : "relative" , width : "500px" , height : "315px" , zIndex : "9999" , background : "transparent"}} onClick={(e) => handleSizeClick(e)} src = "https://www.youtube.com/embed/sMt2uhhwh1g"> </div>
          
         
          </div>
  </GridItem>

  <GridItem  bg='orange.300' area={'header'}>
  <div >
          
          <iframe  width="500" height="315" style = {{position : "absolute"}} src= "https://www.youtube.com/embed/sMt2uhhwh1g" allowtransparency = "true"  title="YouTube video player" frameborder="0" allowfullscreen >


          </iframe>

          <div style = {{position : "relative" , width : "500px" , height : "315px" , zIndex : "9999" , background : "transparent"}} onClick={(e) => handleSizeClick(e)} src = "https://www.youtube.com/embed/sMt2uhhwh1g"> </div>
          
         
          </div>
  </GridItem>
  <GridItem  bg='orange.300' area={'header'}>
  <div >
          
          <iframe  width="500" height="315" style = {{position : "absolute"}} src= "https://www.youtube.com/embed/sMt2uhhwh1g" allowtransparency = "true"  title="YouTube video player" frameborder="0" allowfullscreen >


          </iframe>

          <div style = {{position : "relative" , width : "500px" , height : "315px" , zIndex : "9999" , background : "transparent"}} onClick={(e) => handleSizeClick(e)} src = "https://www.youtube.com/embed/sMt2uhhwh1g"> </div>
          
         
          </div>
  </GridItem>
</Grid>

        
        </>
     

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody style = {{display : 'flex', alignItems : 'center', justifyContent : 'center' , height : '100vh'}}>
            <h1></h1>
           
          <iframe width="560" height="315" src= {img} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
          
             
          </ModalBody>
          <ModalFooter>
            <Button color ='white' style = {{background : "blue", padding : "1rem" , margin : "1rem"}} variant = 'solid' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}*/

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

export default function videoGallery() {
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
              width="500px"
              height="315px"
              src={img}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen = "allowfullscreen"
            ></iframe>
          </ModalBody>
          <ModalFooter style = {{ position : "absolute", top : '7rem' , right : '0'}}>
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

/*

<p class="notification">Click an image to reveal the lightbox</p>
<h1 class="text-center mb-4">Meet Ireland through photos</h1>
<section class='image-grid'>
  <div class="container-xxl">
    <div class="row gy-4">
      <div class="col-12 col-sm-6 col-md-4">
        <figure onClick={() => console.log("Hello")}>
          
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sMt2uhhwh1g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
          
        </figure>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <figure>
          <a class="d-block" href="">
            <img width="1920" height="1280" src="https://assets.codepen.io/162656/ireland2.jpg" class="img-fluid" alt="Fintown, Ireland" data-caption="Fintown, Ireland" />
          </a>
        </figure>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <figure>
          <a class="d-block" href="">
            <img width="1920" height="1280" src="https://assets.codepen.io/162656/ireland3.jpg" class="img-fluid" alt="Anne Street, Dublin, Ireland" data-caption="Anne Street, Dublin, Ireland" />
          </a>
        </figure>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <figure>
          <a class="d-block" href="">
            <img width="1920" height="1280" src="https://assets.codepen.io/162656/ireland4.jpg" class="img-fluid" alt="Doonagore Castle, Doolin, Ireland" data-caption="Doonagore Castle, Doolin, Ireland" />
          </a>
        </figure>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <figure>
          <a class="d-block" href="">
            <img width="1920" height="1280" src="https://assets.codepen.io/162656/ireland5.jpg" class="img-fluid" alt="Connemara National Park, Letterfrack, Ireland" data-caption="Connemara National Park, Letterfrack, Ireland" />
          </a>
        </figure>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <figure>
          <a class="d-block" href="">
            <img width="1920" height="1280" src="https://assets.codepen.io/162656/ireland6.jpg" class="img-fluid" alt="Galway, Ireland" data-caption="Galway, Ireland" />
          </a>
        </figure>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <figure>
          <a class="d-block" href="">
            <img width="1920" height="1280" src="https://assets.codepen.io/162656/ireland7.jpg" class="img-fluid" alt="Connemara National Park, Letterfrack, Ireland" data-caption="Connemara National Park, Letterfrack, Ireland" />
          </a>
        </figure>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <figure>
          <a class="d-block" href="">
            <img width="1920" height="1280" src="https://assets.codepen.io/162656/ireland8.jpg" class="img-fluid" alt="The Forty Foot, Dublin 18, Ireland" data-caption="The Forty Foot, Dublin 18, Ireland" />
          </a>
        </figure>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <figure>
          <a class="d-block" href="">
            <img width="1920" height="1280" src="https://assets.codepen.io/162656/ireland9.jpg" class="img-fluid" alt="Coliemore Harbour, Dublin, Ireland" data-caption="Coliemore Harbour, Dublin, Ireland" />
          </a>
        </figure>
      </div>
    </div>
  </div>
</section>

<div class="modal lightbox-modal" id="lightbox-modal" tabindex="-1">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
      <div class="modal-body">
        <div class="container-fluid p-0">
          
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="page-footer">
  <span>made by </span>
  <a href="https://georgemartsoukos.com/" target="_blank">
    <img width="24" height="24" src="https://assets.codepen.io/162656/george-martsoukos-small-logo.svg" alt="George Martsoukos logo" />
  </a>
</footer>
*/

/*
const imageGrid = document.querySelector(".image-grid");
const links = imageGrid.querySelectorAll("a");
const imgs = imageGrid.querySelectorAll("img");
const lightboxModal = document.getElementById("lightbox-modal");
const bsModal = new bootstrap.Modal(lightboxModal);
const modalBody = document.querySelector(".modal-body .container-fluid");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const currentImg = link.querySelector("img");
    const lightboxCarousel = document.getElementById("lightboxCarousel");
    if (lightboxCarousel) {
      const parentCol = link.parentElement.parentElement;
      const index = [...parentCol.parentElement.children].indexOf(parentCol);
      const bsCarousel = new bootstrap.Carousel(lightboxCarousel);
      bsCarousel.to(index);
    } else {
      createCarousel(currentImg);
    }
    bsModal.show();
  });
}

function createCarousel(img) {
  const markup = `
    <div id="lightboxCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="false">
      <div class="carousel-inner">
        ${createSlides(img)}
      </div> 
      <button class="carousel-control-prev" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="prev">
       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
       <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#lightboxCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    `;

  modalBody.innerHTML = markup;
}

function createSlides(img) {
  let markup = "";
  const currentImgSrc = img.getAttribute("src");

  for (const img of imgs) {
    const imgSrc = img.getAttribute("src");
    const imgAlt = img.getAttribute("alt");
    const imgCaption = img.getAttribute("data-caption");

    markup += `
    <div class="carousel-item${currentImgSrc === imgSrc ? " active" : ""}">
      <img src=${imgSrc} alt=${imgAlt}>
      ${imgCaption ? createCaption(imgCaption) : ""}
    </div>
    `;
  }

  return markup;
}

function createCaption(caption) {
  return `<div class="carousel-caption">
     <p class="m-0">${caption}</p>
    </div>`;
}
*/
