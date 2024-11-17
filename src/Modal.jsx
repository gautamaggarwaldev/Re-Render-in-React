export default function Modal({ close }) {
    return (
        <>
            <h1>There is a Modal</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.</p>

            <button onClick={close}>Close modal</button>
        </>
    )
}