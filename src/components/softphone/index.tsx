import { useRef, useState } from "react"
import { convertStatus } from "./consts"
import Timer from "../ui/Timer"
import Button from "../ui/Button"
import { FaMicrophone, FaMicrophoneAltSlash, FaPhoneAlt } from "react-icons/fa"

function Softphone() {
    const [callStatus, setCallStatus] = useState<"idle" | "connecting" | "active" | "ended">("idle")
    const [isMuted, setIsMuted] = useState<Boolean>(false)
    const [audio, setAudio] = useState<MediaStream | null>(null)

    const streamRef = useRef<MediaStream | null>(null!)

    const getAudio = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false,
            });
            setAudio(stream);
            streamRef.current = stream;
        } catch (err) {
            console.error("Mikrofon icazəsi alınmadı:", err);
        }
    };

    async function startMeet() {
        try {
            await getAudio();
            setCallStatus("connecting");
            setTimeout(() => {
                setCallStatus("active");
            }, 1500);

        } catch (err) {
            console.error("Zəng başlatma xətası:", err);
            setCallStatus("idle");
        }
    }

    async function stopMeet() {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((audio) => { audio.stop() })
            streamRef.current = null
        }

        setCallStatus("ended")
        setTimeout(() => {
            setCallStatus("idle")
        }, 2000)
    }

    function handleMuted() {
        if (streamRef.current) {
            const audioTracks = streamRef.current.getAudioTracks()
            audioTracks?.forEach((audio) => {
                audio.enabled = !audio.enabled
            })
        }
    }



    return (
        <section className="relative size-full max-w-[800px] p-4 max-h-screen rounded-lg bg-white shadow-2xl">
            <h1 className="capitalize text-center text-[30px] font-medium">Softphone</h1>
            <div className="mt-[45px] flex flex-col items-center justify-center">
                <div className="size-[100px] rounded-full grid place-items-center bg-[linear-gradient(135deg,_rgba(71,115,238,1)_0%,_rgba(33,164,220,1)_100%)]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="65px" width="65px" xmlns="http://www.w3.org/2000/svg"><path d="M256 80C141.1 80 48 173.1 48 288l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 288C0 146.6 114.6 32 256 32s256 114.6 256 256l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64l16 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-64zm288-64c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l16 0z"></path></svg>
                </div>
                <h4 className="text-2xl font-light mt-[20px]">Xəzər Novruz</h4>
                <div className="mt-[10px] text-[18px] ">
                    Zəng statusu:
                    <p className="text-[14px] text-center">
                        {convertStatus(callStatus)}
                    </p>
                </div>

                <Timer isOpenTimer={callStatus === 'active'} />

                <div className="absolute w-full bottom-[20px] h-16 py-4 flex justify-center items-center gap-2 mt-auto">
                    {callStatus === "idle" ?
                        <Button
                            onClick={startMeet}
                            id="start-meet"
                            icon={<FaPhoneAlt className="text-white" />}
                            name="start-meet-button"
                            classname="w-full h-[40px] mx-[20px] rounded-full bg-green-600 hover:bg-green-700"
                        /> :
                        callStatus === "active" ?
                            <>
                                <Button
                                    onClick={handleMuted}
                                    id="mute"
                                    icon={<FaMicrophoneAltSlash />}
                                    name="mute-button"
                                    classname="size-[50px] rounded-full  "
                                />
                                <Button
                                    onClick={stopMeet}
                                    id="phonecall"
                                    icon={<FaPhoneAlt className="text-white rotate-180" />}
                                    name="phone-call"
                                    classname="size-[50px] rounded-full bg-red-600"
                                />
                            </>
                            : null
                    }
                </div>

            </div>

        </section>
    )
}

export default Softphone