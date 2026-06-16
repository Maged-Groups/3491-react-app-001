export default function Title({ text, size }) {

    let Tag;
    let textClass = ''

    switch (size) {
        case 1:
            Tag = 'h1';
            textClass = 'text-3xl font-black';

            break;

        case 3:
            Tag = 'h3';
            textClass = 'text-xl font-bold';
            break;

        case 4:
            Tag = 'h4';
            textClass = 'text-lg  font-normal';
            break;

        case 5:
            Tag = 'h5';
            textClass = 'text-md font-thin';
            break;

        case 6:
            Tag = 'h6';
            textClass = 'text-sm';
            break;

        default:
            Tag = 'h2'
            textClass = 'text-2xl font-extrabold';
    }


    return (
        <Tag className={textClass}>{text}</Tag>
    )
}