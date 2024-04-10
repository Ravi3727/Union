import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { useEffect } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"

AOS.init();

function VideoFeedCard() {
    const dummyData = [
        {
            title: "Card One",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-red-300"
        },
        {
            title: "Card Two",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-green-300"
        },
        {
            title: "Card three",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-yellow-300"
        },
        {
            title: "Card four",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-red-300"
        },
        {
            title: "Card five",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-green-300"
        },
        {
            title: "Card six",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-purple-300"
        },
        {
            title: "Card seven",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-blue-300"
        },
        {
            title: "Card Eight",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-gray-500"
        },
    ];

    const [startIndex, setStartIndex] = useState(0);

   
    const nextSlide = () => {
        let newIndex = (startIndex + 2) % dummyData.length;
        if (newIndex === 0 && startIndex === dummyData.length - 4) {

            newIndex = 0;
        }
        setStartIndex(newIndex);
    };

    
    const prevSlide = () => {
        const newIndex = (startIndex - 2 + dummyData.length) % dummyData.length ;
        setStartIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalId);
    }, [startIndex]);

    return (
        <>
            <div className='flex flex-row justify-between w-11/12 mx-auto mb-2'>
                <h1 className='text-3xl hover:underline font-medium'>Videos</h1>
                <button className='text-lg hover:underline select-none font-medium'>View more...</button>
            </div>

            {/* Scrollabel Card */}

            <div className='flex flex-row justify-between w-full '>


                {/* Prev Button */}
                <div className="my-auto m-1">
                    <button onClick={prevSlide} className="p-2 text-2xl font-black hover:bg-white rounded-full"><GoChevronLeft /></button>
                </div>

                {/* Cards  */}
                <div data-aos="fade-up" data-aos-duration="2000" className="flex justify-center gap-3 w-[90%] ">
                {[...Array(4)].map((_, index) => {
                    const cardIndex = (startIndex + index) % dummyData.length;
                    const data = dummyData[cardIndex];
                    return (
                        <Card
                            key={index}
                            className={data.color + " w-full h-full"}
                        >
                            <CardHeader>
                                <CardTitle>{data.title}</CardTitle>
                                <CardDescription>{data.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{data.content}</p>
                            </CardContent>
                            <CardFooter>
                                <p>{data.footer}</p>
                            </CardFooter>
                        </Card>
                    );
                })}
                </div>
                {/* Next button */}
                <div className='my-auto m-1'>
                    <button onClick={nextSlide} className="p-2 text-2xl font-black hover:bg-white rounded-full">
                        <GoChevronRight />
                    </button>
                </div>

            </div>

        </>
    )
}

export default VideoFeedCard;
