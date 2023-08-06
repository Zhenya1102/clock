import React from 'react';
import styles from './Circle.module.css'


type PropsCircleType = {
    id: string
    widthI?: string
    width?: string
    height?: string
    transform: string
}

export const Circle: React.FC<PropsCircleType> = (
    {
        id,
        widthI,
        width,
        height,
        transform
    }) => {
    return (
        <div
            className={styles.circle}
            id={id}
            style={{width: width, height: height, transform: transform}}>
            <i style={{width: widthI}}></i>
        </div>
    );
};
