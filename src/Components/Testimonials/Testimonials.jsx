import React from 'react'
import testimonialCSS from './../Testimonials/Testimonials.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Autoplay } from 'swiper/modules';
import img1 from './../../assets/britishpull.jpg'
import img2 from './../../assets/jim.jpg'
import img3 from './../../assets/temple.jpg'
import img4 from './../../assets/corbettfall.jpg'
import img5 from './../../assets/musium.jpg'



function Testimonials() {
    return (
        <div className={`${testimonialCSS.testimonial_wrapper} section`}>
            <small className='section_Heading'>View Points</small>
            <h2 className='section_Title'>Near <span>Dhikuli</span></h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                className={testimonialCSS.swiper}
                autoplay={{
                    delay: 1000,
                }}
                speed={2000}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img2} alt='' />
                        <div className={testimonialCSS.content}>
                            <h3>Corbett National Park,<span>Near Dhikuli</span></h3>
                            <p>Corbett Tiger Reserve, originally established as Hailey National Park in 1936, is a jewel in the crown of India's wildlife conservation efforts. Located in the Nainital district of Uttarakhand, CTR is not only the first national park in India.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img5} alt='' />
                        <div className={testimonialCSS.content}>
                            <h3>Corbett Tiger Reserve Museum,<span>Near Dhikuli</span></h3>
                            <p>Corbett Tiger Reserve, situated in the scenic Himalayan foothills of Uttarakhand. Discover historical artifacts, interactive exhibits on wildlife conservation, and learn about the rich biodiversity of India's oldest national park.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img3} alt='' />
                        <div className={testimonialCSS.content}>
                            <h3>Garjiya Devi,<span>Near Dhikuli</span></h3>
                            <p>Garjiya Devi Temple is a hindu Devi temple located in the Garjiya village 14 km north of the city Ramnagar, Uttarakhand, India, on the outskirts of the Corbett National Park. It is a sacred Shakti shrine where Garjiya Devi is the presiding deity</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img4} alt='' />
                        <div className={testimonialCSS.content}>
                            <h3>Corbett Fall,<span>Near Dhikuli</span></h3>
                            <p> Corbett Falls is a scenic water fall located at 25 kms from Ramnagar. Developed as a picnic spot for tourist,  Corbett Water Falls is surrounded by dense teak wood forest which extends its natural beauty.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialCSS.testimonial}>
                        <img src={img1} alt='' />
                        <div className={testimonialCSS.content}>
                            <h3>British Pull,<span>Near Dhikuli</span></h3>
                            <p>British Pull is a historic place situated in the jungle area of Ramnagar near, Garjiya Devi Temple. It is surrounded by the dense forest and with the kosi river flowing under the british pull.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Testimonials
