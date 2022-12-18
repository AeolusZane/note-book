import { useState } from 'react';
import styles from './styles.module.scss';

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface Props {
    numberString: string
}

const digitRegexp = /\d/g;

export function NumberDisplay({ numberString }: Props) {

    return <div className={styles.numberDisplay}>
        {numberString.split('').map((digitStr, index) => (
            <div className={styles.digitWrapper}>
                {digitRegexp.test(digitStr) ?
                    <div className={styles.digitList}
                        style={{
                            transform: `translate(-50%,${-Number(digitStr) * 32}px)`,
                            transitionDelay: `${index * 100}ms`
                        }}>
                        {digits.map(digit => (
                            <span className={styles.digit} key={digit}>{digit}</span>
                        ))}
                    </div> :
                    <span className={styles.digit}>{digitStr}</span>
                }
            </div>
        ))}
    </div>
}