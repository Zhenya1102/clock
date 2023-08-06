import React from 'react';
import style from './SuperClock.module.css'
import {ClockValue} from './ClockValue';
import {Circle} from './Circle';

type PropsSuperClockType = {
    date: Date
}

export const SuperClock: React.FC<PropsSuperClockType> = ({date}) => {
    const getTwoDigitsString = (num:number) => num < 10 ? '0' + num : num
    return (
        <div className={style.clock}>
            {/* Analog Clock */}
            <div className={style.numbers}>
                <Circle
                    id={'sec'}
                    widthI={'2px'}
                    transform={`rotate(${date.getSeconds() * 6}deg)`}
                />
                <Circle
                    id={'min'}
                    width={'230px'}
                    transform={`rotate(${date.getMinutes() * 6}deg)`}
                    height={'230px'} widthI={'4px'}
                />
                <Circle
                    id={'hrs'}
                    width={'180px'}
                    transform={`rotate(${date.getHours() * 30}deg)`}
                    height={'180px'}
                />
                <ClockValue i={'0'} value={'12'}/>
                <ClockValue i={'1'} value={'1'}/>
                <ClockValue i={'2'} value={'2'}/>
                <ClockValue i={'3'} value={'3'}/>
                <ClockValue i={'4'} value={'4'}/>
                <ClockValue i={'5'} value={'5'}/>
                <ClockValue i={'6'} value={'6'}/>
                <ClockValue i={'7'} value={'7'}/>
                <ClockValue i={'8'} value={'8'}/>
                <ClockValue i={'9'} value={'9'}/>
                <ClockValue i={'10'} value={'10'}/>
                <ClockValue i={'11'} value={'11'}/>
                <ClockValue i={'12'} value={'12'}/>
            </div>
            {/* Digital Clock */}
            <div className={style.time}>
                <div className={style.hour}>{getTwoDigitsString(date.getHours())}</div>
                <div className={style.minutes}>{getTwoDigitsString(date.getMinutes())}</div>
                <div className={style.seconds}>{getTwoDigitsString(date.getSeconds())}</div>
                <div className={style.ampm}>PM</div>
            </div>
        </div>
    );
};
