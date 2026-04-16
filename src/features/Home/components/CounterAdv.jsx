import { useState } from 'react';
import ButtonTW from '../../../components/molecules/ButtonTW';

export default function CounterAdv() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);

    const classes = {
        label:'text-4xl font-black uppercase text-sky-700',
        page: 'flex gap-8 flex-col',
        box: 'border rounded-md shadow-md p-3 flex flex-col items-center',
        container: 'text-3xl p-4 flex gap-4 items-center',
        btn: 'px-3 py-2 rounded-md text-white w-30 cursor-pointer hover:scale-95 transition-all hover:brightness-50',
        btn_plus: 'bg-green-600',
        btn_minus: 'bg-red-600',
        number: 'font-black'
    }

    const handleIncreaseA = () => {
        console.log('handleIncreaseA');

        console.log('countA before', countA);
        setCountA(countA + 1);
        console.log('countA after', countA);
    }

    const handleIncreaseB = () => {
        console.log('handleIncreaseB');

        console.log('countB before', countB);
        setCountB(countB + 1);
        console.log('countB after', countB);
    }

    return (
        <div className={classes.page}>

            <h2 className={classes.label}>Counter A</h2>
            <div className={classes.box}>
                <div className={classes.container}>
                    <ButtonTW onClick={handleIncreaseA} className={`${classes.btn} ${classes.btn_plus}`} text='+' size = 'lg' />
                    <span className={classes.number}>{countA}</span>
                    <button className={`${classes.btn} ${classes.btn_minus}`}>-</button>
                </div>
                <div className={classes.container}>
                    <button className={`${classes.btn} ${classes.btn_plus}`}>+5</button>
                    <button className={`${classes.btn} ${classes.btn_plus}`}>+10</button>
                    <button className={`${classes.btn} ${classes.btn_plus}`}>+20</button>
                    <button className={`${classes.btn} ${classes.btn_plus}`}>+30</button>
                </div>
                <div className={classes.container}>
                    <button className={`${classes.btn} ${classes.btn_minus}`}>-5</button>
                    <button className={`${classes.btn} ${classes.btn_minus}`}>-10</button>
                    <button className={`${classes.btn} ${classes.btn_minus}`}>-20</button>
                    <button className={`${classes.btn} ${classes.btn_minus}`}>-30</button>
                </div>
            </div>


            <h2 className={classes.label}>Counter B</h2>
            <div className={classes.box}>
                <div className={classes.container}>
                    <button onClick={handleIncreaseB} className={`${classes.btn} ${classes.btn_plus}`} >+</button>
                    <span className={classes.number}>{countB}</span>
                    <button className={`${classes.btn} ${classes.btn_minus}`}>-</button>
                </div>

                <div className={classes.container}>
                    <button className={`${classes.btn} ${classes.btn_plus}`}>+5</button>
                    <button className={`${classes.btn} ${classes.btn_plus}`}>+10</button>
                    <button className={`${classes.btn} ${classes.btn_plus}`}>+20</button>
                    <button className={`${classes.btn} ${classes.btn_plus}`}>+30</button>
                </div>
                <div className={classes.container}>
                    <button className={`${classes.btn} ${classes.btn_minus}`}>-5</button>
                    <button className={`${classes.btn} ${classes.btn_minus}`}>-10</button>
                    <button className={`${classes.btn} ${classes.btn_minus}`}>-20</button>
                    <button className={`${classes.btn} ${classes.btn_minus}`}>-30</button>
                </div>
            </div>
        </div>
    )
}