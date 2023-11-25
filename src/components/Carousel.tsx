import { useState } from "react"
const images = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1652838299721-cb3298238045?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export default function Carousel() {
  const [activeImage, setActiveImage] = useState(0)
  console.log(activeImage)
  return (
    <>
      <div className="carousel">
        <div className="carousel__slides">
          {(images).map((img, index) => (
            <>
              <input type="radio" name="radio-btn" checked={activeImage === index} readOnly />
              <div key={index} className="carousel__slide-container">
                <div className="carousel__slide-img">
                  <img src={img} alt={`slide${index}`} />
                </div>
                <div className="carousel__controls">
                  <label onClick={() => { index === 0 ? setActiveImage(images.length - 1) : setActiveImage(index - 1) }} className="carousel__slide-prev">
                    <span>&lsaquo;</span>
                  </label>
                  <label onClick={() => { index === images.length - 1 ? setActiveImage(0) : setActiveImage(index + 1) }} className="carousel__slide-next">
                    <span>&rsaquo;</span>
                  </label>
                </div>
              </div>
              <div className="carousel__slide">
              </div></>
          ))}
          <div className="carousel__dots">
            {[...Array(images.length)].map((e, index) => (
              <label className={"carousel__dot" + (activeImage === index ? " active" : '')} onClick={() => { setActiveImage(index) }} ></label>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}