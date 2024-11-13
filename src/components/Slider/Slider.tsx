import { useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Slide from './Slide/Slide';
import { StyledSlider } from './styled/StyledSlider';
import { Direction } from './styled/StyledNavControl';
import SliderNavigation from './SliderNavigation';

type Event = {
    year: number,
    text: string,
}

interface SliderProps {
    events: Event[],
}

const Slider = ({
    events,
}: SliderProps) => {
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
    const [isBeginning, setIsBeginning] = useState<boolean>(true);
    const [isEnd, setIsEnd] = useState<boolean>(false);

    return (
        <StyledSlider>
            <Swiper
                className={'slider__swiper'}
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl,
                    nextEl,
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                        pagination: false,
                    }
                }}
            >
                {events.map(({ year, text }) => (
                    <SwiperSlide key={year}>
                        <Slide
                            title={year.toString()}
                            content={text}
                        />
                    </SwiperSlide>)
                )}
            </Swiper>

            <SliderNavigation
                ref={(node) => setPrevEl(node)}
                direction={Direction.PREV}
                disabled={isBeginning}
                onNavigate={() => prevEl?.click()}
            />

            <SliderNavigation
                ref={(node) => setNextEl(node)}
                direction={Direction.NEXT}
                disabled={isEnd}
                onNavigate={() => nextEl?.click()}
            />
        </StyledSlider>
    );
}

export default Slider;
