import { atom } from 'recoil'

const isRestTimerModalShowAtom = atom<boolean>({
    key: 'isRestTimerModalShow', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});

export default isRestTimerModalShowAtom;