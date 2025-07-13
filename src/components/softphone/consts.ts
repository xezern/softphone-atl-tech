export const convertStatus = (status: string) => {
    switch (status) {
        case "connecting":
            return "Qoşulur..."
        case "active":
            return "Davam edən"
        case "ended":
            return "Sonlandı"
        default:
            return "Gözləyir"
    }
}