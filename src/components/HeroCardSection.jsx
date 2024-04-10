import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
AOS.init();
function HeroCardSection() {

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
            color: "bg-blue-300"
        },
        {
            title: "Card Two",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-blue-300"
        },
        {
            title: "Card Two",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-blue-300"
        },
        {
            title: "Card Two",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-blue-300"
        },
        {
            title: "Card Two",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-blue-300"
        },
        {
            title: "Card Two",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-blue-300"
        },
        {
            title: "Card Two",
            description: "Card Description",
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
            footer: "Card Footer",
            color: "bg-blue-300"
        },
        // {
        //     title: "Card Two",
        //     description: "Card Description",
        //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At reiciendis unde nemo, ducimus iusto neque sit minima vero doloremque est voluptas quasi pariatur mollitia labore aliquam necessitatibus. Architecto, debitis dicta",
        //     footer: "Card Footer",
        //     color: "bg-blue-300"
        // },
    ];
    return (

        <div  data-aos="fade-up"
        data-aos-duration="2000" className="flex flex-wrap justify-evenly gap-y-8 gap-x-[.2px]">
            {dummyData.map((data, index) => (
                <Card key={index} className={data.color + " w-1/5 h-1/2"}>
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
            ))}
        </div>
    )
}

export default HeroCardSection