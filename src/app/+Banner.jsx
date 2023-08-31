import Image from 'next/image'

export const Banner = () => {
  return (
    <>
      <div className='mask-banner'>
        <Image
          src="https://cdn.discordapp.com/attachments/1069940642521825320/1146794434168619101/cropped-1920-1080-1309318.jpg"
          width={1920}
          height={1080}
          alt="banner"
        />
      </div>
    </>
  )
}
