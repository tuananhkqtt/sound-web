'use client'
import WaveTrack from "@/components/track/wave.track"
import { Container } from "@mui/material"

const DetailTrackPage = (props: any) => {

    return (
        <Container>
            <div>
                <WaveTrack />
            </div>
        </Container>
    )
}

export default DetailTrackPage