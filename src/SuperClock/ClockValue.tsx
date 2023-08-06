import React from 'react';

type PropsClockValueType = {
    value: string
    i:string
}

export const ClockValue: React.FC<PropsClockValueType> = ({value,i}) => {
    const spanStyleTransform = {
        transform: `rotate(${30 * parseInt(i)}deg)`
    };
    const boldStyleTransform = {
        transform: `rotate(${-30 * parseInt(i)}deg)`
    };
    return <span style={spanStyleTransform}><b style={boldStyleTransform}>{value}</b></span>
};

