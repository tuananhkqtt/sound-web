import WaveTrack from '@/components/track/wave.track';
import Container from '@mui/material/Container';
import { sendRequest } from '@/utils/api';

export async function generateStaticParams() {
    return [
        { slug: "65e32a1ab66f7ca2b4bfa724" },
        { slug: "65e32a1ab66f7ca2b4bfa727" },
        { slug: "65e32a1ab66f7ca2b4bfa72a" },
    ]
}

const DetailTrackPage = async (props: any) => {
    const { params } = props;
    const { slug } = params

    const trackRes = await sendRequest<IBackendRes<ITrackTop>>({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/${params.slug}`,
        method: "GET",
        nextOption: {
            // cache: "no-store",
            next: { tags: ['track-by-id'] }
        }
    })

    const commentsRes = await sendRequest<IBackendRes<IModelPaginate<ITrackComment>>>({
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tracks/comments`,
        method: "POST",
        queryParams: {
            current: 1,
            pageSize: 100,
            trackId: params.slug,
            sort: "-createdAt"
        }
    })

    return (
        <Container>
            <div>
                <WaveTrack
                    track={trackRes?.data ?? null}
                    comments={commentsRes?.data?.result ?? []}
                />
            </div>
        </Container>
    )
}

export default DetailTrackPage;