import { useEffect, useState } from "react"
import { formatDuration } from "../../utility/formatDuration"

interface ITimerProps {
    isOpenTimer: boolean
}

export default function Timer({ isOpenTimer }: ITimerProps) {
    const [timer, setTimer] = useState<string>('00:00')
    const [intervalID, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null)

    useEffect(() => {
        if (isOpenTimer) startTimer()
        else stopTimer()

        return () => stopTimer()
    }, [isOpenTimer])

    function startTimer() {
        let dur = 0
        stopTimer() // Prev. intervals clear 
        const id = setInterval(() => {
            dur++
            setTimer(formatDuration(dur))
        }, 1000)

        setIntervalId(id)
    }

    function stopTimer() {
        if (intervalID) {
            clearInterval(intervalID)
            setIntervalId(null)
        }
    }

    return <p>{timer}</p>
}
