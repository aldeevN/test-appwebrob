import Image from "next/image"
import React from "react";
import { Component } from "react";
import styles from "../styles/Review.module.scss"

export interface Photo {
    id: number;
    src: string;
};

export const photos: Photo[] = [
    {
        id: 1,
        src: "/../public/man1.png",
    },
    {
        id: 2,
        src: "/../public/man2.png",
    },
    {
        id: 3,
        src: "/../public/woman1.png",
    }
];

export default class Review extends Component<{}, { current: number }> {
    preLoadedPhotos = photos;
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            current: 0
        };
    }
    toggle(input: number) {
        this.setState({
            current: input
        });
    }

    swipe(input: number) {
        let counter;
        if (this.state.current >= 0 && this.state.current <= 3) {
            counter = this.state.current;
            if (input === 0 && counter > 0) counter--;
            if (input === 1 && counter < 3) counter++;
            this.setState({
                current: counter
            });
        }
    }

    componentDidMount() {
        this.preLoadedPhotos.forEach((counter) => {
            counter
        });
    }
    render() {
        let navs = [];
        for (let i = 0; i < 4; i++) {
            navs.push(
                <div
                    className={this.state.current == i ? "rectangle active" : "rectangle"}
                    onClick={() => this.toggle(i)}
                />
            );
        }
        return (
            <>
                <div className={styles.review_conteiner} >
                    <h2>Review</h2>
                    <div>
                        <p>{ }/</p>
                        <button><div className="swipe left" onClick={() => this.swipe(0)} /></button>
                        <button><div className="swipe right" onClick={() => this.swipe(1)} /></button>
                        <h4>Best courses ever</h4>
                        <p>Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.</p>
                        <div>
                            <Image src={this.preLoadedPhotos[0].src} width={422} height={633} alt={"developer"}>
                            </Image><Image src={this.preLoadedPhotos[1].src} width={422} height={633} alt={"developer"}>
                            </Image><Image src={this.preLoadedPhotos[2].src} width={422} height={633} alt={"developer"}>
                            </Image>
                        </div>
                        <div className="nav">{navs}</div>
                    </div>
                </div>
            </>
        );
    }
}
