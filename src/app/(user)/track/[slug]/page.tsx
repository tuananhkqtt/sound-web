import WaveTrack from '@/components/track/wave.track';
import Container from '@mui/material/Container';
import { sendRequest } from '@/utils/api';

const DetailTrackPage = async (props: any) => {
    const { params } = props;

    const res = await sendRequest<IBackendRes<ITrackTop>>({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/${params.slug}`,
        method: "GET",
    })

    return (
        <Container>
            <div>
                <WaveTrack
                    track={res?.data ?? null}
                />
            </div>
        </Container>
    )
}

export default DetailTrackPage;