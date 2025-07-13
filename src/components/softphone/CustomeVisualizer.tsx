import { Visualizer } from 'react-sound-visualizer';
import React from 'react';

type VisualizerActionsType = {
    start: (() => void) | undefined;
    stop: (() => void) | undefined;
    reset: (() => void) | undefined;
}

interface ICustomVisualizerProps {
    audio: MediaStream | null;
    visualizerActionsRef: React.RefObject<VisualizerActionsType | null>;
}

export default function CustomVisualizer({ audio, visualizerActionsRef }: ICustomVisualizerProps) {
    return (
        <Visualizer audio={audio}>
            {({ canvasRef, start, stop, reset }) => {
                visualizerActionsRef.current = { start, stop, reset };
                return <canvas ref={canvasRef} width={250} height={100}></canvas>;
            }}
        </Visualizer>
    );
}