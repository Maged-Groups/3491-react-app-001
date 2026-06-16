import { useState } from 'react';
import ButtonTW from '../../../components/molecules/ButtonTW';
import Title from '../../../components/atoms/Title';

export default function CounterAdv() {
    const [count, setCount] = useState(0);

    const classes = {
        label: 'text-4xl font-black uppercase text-sky-700',
        page: 'flex gap-8 flex-col',
        box: 'border rounded-md shadow-md p-3 flex flex-col items-center',
        container: 'text-3xl p-4 flex gap-4 items-center',
        btn: 'px-3 py-2 rounded-md text-white w-30 cursor-pointer hover:scale-95 transition-all hover:brightness-50',
        btn_plus: 'bg-green-600',
        btn_minus: 'bg-red-600',
        number: 'font-black'
    }

    const handleIncrease = (num) => setCount(count + num);

    const nums = [5, 10, 15, 20, 30, 40];

    const btns = 50;

    return (
        <div className={classes.page}>
            <Title text={'Counter A'} />
            <div className={classes.box}>
                <div className={classes.container}>
                    <ButtonTW onClick={() => handleIncrease(1)} shadow='shadow-md' className={`${classes.btn} ${classes.btn_plus}`} text='+ 1' size='lg' />
                    <span className={classes.number}>{count}</span>
                    <ButtonTW onClick={() => handleIncrease(-1)} shadow='shadow-md' className={`${classes.btn} ${classes.btn_minus}`} text='- 1' size='lg' />
                </div>
                <div className={classes.container}>
                    {
                        nums.map(num => <ButtonTW key={num} shadow='shadow-md' onClick={() => handleIncrease(num)} className={`${classes.btn} ${classes.btn_plus}`} text={`+${num}`} size='lg' />)
                    }
                </div>
                <div className={classes.container}>
                    {
                        nums.map(num => <ButtonTW key={num} shadow='shadow-md' onClick={() => handleIncrease(-num)} className={`${classes.btn} ${classes.btn_minus}`} text={`-${num}`} size='lg' />)
                    }
                </div>

                <div className='flex flex-col gap-4 justify-center items-center'>

                    <Title text={`From 1 to ${btns}`} />


                    <div className='flex gap-3 flex-wrap justify-center'>
                        {
                            [...Array(btns)].map((_, i) => <ButtonTW key={Math.random()} shadow='shadow-md' onClick={() => handleIncrease(i + 1)} className={`${classes.btn} ${classes.btn_plus}`} text={`+${i + 1}`} size='lg' />)
                        }
                    </div>
                    <div className='flex gap-3 flex-wrap justify-center'>
                        {
                            [...Array(btns)].map((_, i) => <ButtonTW key={Math.random()} shadow='shadow-md' onClick={() => handleIncrease(-(i + 1))} className={`${classes.btn} ${classes.btn_minus}`} text={`-${i + 1}`} size='lg' />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}