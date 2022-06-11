import React, { useState, useEffect, useCallback } from 'react'
import { client } from '../../cleint';

const Carousel = () => {
  const [isCarouselLoading, setIsCarouseLoading] = useState(0);
  const [carouselSlieds, setCarouselSlieds] = useState([]);

  const cleanUpCarouselSides = useCallback((rawData) =>{
    const cleanSlides = rawData.items.map((slide) => {
      const {sys, fields}= slide;
      const { id } = sys
      const slideTitle = fields.title
      const slideDescription = fields.description
      const slideBg = fields.image.fields.file.url
      const updatedSlide = { id, slideTitle, slideDescription, slideBg}
      return updatedSlide
    })
    setCarouselSlieds( cleanSlides );
  },[])

  const getCarouselSlieds = useCallback(async () => {
    setIsCarouseLoading(true)
    try {
      const response = await client.getEntries({ content_type: 'kitchenCarousel' })
      if(response){
        cleanUpCarouselSides(response)
        console.log(response);
      }
      else{
        setCarouselSlieds([])
        console.log("No response")
      }
    setIsCarouseLoading(true)

    } catch (error) {
      console.log(error);
    setIsCarouseLoading(false)

    }
  }, [cleanUpCarouselSides])

  useEffect(() => {
    getCarouselSlieds();
  }, [getCarouselSlieds])

  console.log(carouselSlieds);
  return (
    <div>
      {
        carouselSlieds.map((item) => {
          const {id, slideTitle, slideDescription, slideBg} = item
          return(
                <div className='slideWrap' key={id} style={{backgroundImage:`url(${slideBg})`}}>
                    <div className='textWrap'>
                      <h2>{slideTitle}</h2>
                      <p>{slideDescription}</p>
                    </div>
                </div>
          )})
      }
      
    </div>
    
  )
}

export default Carousel;