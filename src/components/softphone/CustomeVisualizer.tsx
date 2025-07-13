import { Visualizer } from 'react-sound-visualizer'

export default function CustomeVisualizer({ audio, visualizerActionsRef }: any) {
    return (
        <Visualizer audio={audio} >
            {({ canvasRef, start, stop, reset }) => {
                visualizerActionsRef.current = { start, stop, reset };
                return (<canvas ref={canvasRef} width={250} height={100}></canvas>)
            }}
        </Visualizer>

    )
}
