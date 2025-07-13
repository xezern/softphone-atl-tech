import { useEffect, useRef, useState } from "react"
import { formatDuration } from "../../utility/formatDuration"

export default function Timer({ isOpenTimer }: any) {
    const [timer, setTimer] = useState<string>('00:00')
    const timerRef = useRef<any | null>(null)

    useEffect(() => {
        if (isOpenTimer) startTimer()
        else stopTimer()
    }, [isOpenTimer])

    function startTimer() {
        let dur = 0
        timerRef.current = setInterval(() => {
            dur++
            setTimer(formatDuration(dur))
        }, 1000)
    }

    const stopTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current)
            timerRef.current = null
        }
    }

    return (
        <p>
            {timer}
        </p>

    )
}
