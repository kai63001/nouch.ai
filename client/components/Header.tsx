import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

interface Header {
  title?: string
  des?: string
  asPath?: string
  image?: string
}

const Header = (props: Header) => {
  const router = useRouter()

  return (
    <NextSeo
      title={
        props.title
          ? `${props.title}`
          : 'Nouch'
      }
      description={
        props.des
          ? props.des
          : "prompt"
      }
      canonical={`https://nouch.co${router.asPath}`}
      openGraph={{
        type: 'website',
        locale: 'en_EN',
        title: props.title
          ? `${props.title}`
          : 'Nouch',
        description: props.des
          ? props.des
          : "prompt",
        images: [
          {
            url:
              props.image === undefined || props.image.length === 0
                ? 'https://nouch.co/main.jpg'
                : props.image
          }
        ],
        url: `https://nouch.co${router.asPath}`,
        site_name: 'nouch'
      }}
      twitter={{
        handle: '@nouch',
        site: '@nouch',
        cardType: 'summary_large_image'
      }}
    />
  )
}

export default Header