import VideoPlayer from '@/components/VideoPlayer'
import type { NextPage } from 'next'

const Home: NextPage<{ data: any }> = ({
  data = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
}) => {
  console.log(data)
  return (
    <div className="flex max-w-lg flex-wrap">
      <VideoPlayer src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
      <VideoPlayer src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
      <VideoPlayer src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
      <VideoPlayer src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" />
    </div>
  )
}

export default Home
