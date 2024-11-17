import Modal from "./Modal";
import useModalDialog from './hooks/useModalDialog'
export default function ButtonWithModal() {
    const {isOpen, open, close} = useModalDialog();

    return (
        <>
            <button onClick={open}>Open modal</button>
            {isOpen && <Modal close={close} />}
        </>
    )
}