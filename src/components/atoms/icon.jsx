import * as Icons from 'react-icons/lu';

export default function Icon({ name }) {
    const SelectedIcon = Icons[name]; 
    const DefaultIcon = Icons['LuCircleDashed'];

    return !SelectedIcon ? <DefaultIcon /> : <SelectedIcon />
}