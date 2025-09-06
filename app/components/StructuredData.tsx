import { WithContext, Organization, WebSite, LocalBusiness } from 'schema-dts'

interface StructuredDataProps {
  type: 'organization' | 'website' | 'localBusiness'
}

export default function StructuredData({ type }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = 'https://650vs.com'
    
    switch (type) {
      case 'organization':
        const organizationData: WithContext<Organization> = {
          '@type': 'Organization',
          '@context': 'https://schema.org',
          name: 'ロッコービデオサービス',
          alternateName: '650vs',
          description: '茨城県鹿行地域を拠点とする映像制作・撮影・編集のプロフェッショナル。企画から撮影、編集、音響まで一貫してサポート。',
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          image: `${baseUrl}/og-image.jpg`,
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: 'Japanese'
          },
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '茨城県',
            addressLocality: '鹿嶋市'
          },
          founder: {
            '@type': 'Person',
            name: '田村秀昭',
            jobTitle: '代表・ディレクター'
          },
          foundingDate: '2021-10',
          sameAs: [
            'https://tamulamail.wixsite.com/tamulapastwork-jp'
          ]
        }
        return organizationData

      case 'website':
        const websiteData: WithContext<WebSite> = {
          '@type': 'WebSite',
          '@context': 'https://schema.org',
          name: 'ロッコービデオサービス',
          description: '映像制作・撮影・編集のプロフェッショナル',
          url: baseUrl,
          publisher: {
            '@type': 'Organization',
            name: 'ロッコービデオサービス'
          }
        }
        return websiteData

      case 'localBusiness':
        const localBusinessData: WithContext<LocalBusiness> = {
          '@type': 'LocalBusiness',
          '@context': 'https://schema.org',
          name: 'ロッコービデオサービス',
          description: '茨城県鹿行地域を拠点とする映像制作・撮影・編集のプロフェッショナル',
          url: baseUrl,
          telephone: '+81-XXX-XXXX-XXXX', // 実際の電話番号に置き換え
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'JP',
            addressRegion: '茨城県',
            addressLocality: '鹿嶋市'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 35.9667, // 鹿嶋市の緯度
            longitude: 140.6333 // 鹿嶋市の経度
          },
          openingHours: 'Mo-Fr 09:00-18:00',
          serviceArea: {
            '@type': 'Place',
            name: '茨城県、千葉県'
          },
          priceRange: '$$',
          image: `${baseUrl}/og-image.jpg`,
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: '映像制作サービス',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: '企業PR動画制作',
                  description: '企業のPR動画の企画から撮影、編集まで一貫対応'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'イベント撮影',
                  description: '各種イベントの撮影と編集'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: '映像編集',
                  description: '映像素材の編集・音響調整'
                }
              }
            ]
          }
        }
        return localBusinessData

      default:
        return null
    }
  }

  const structuredData = getStructuredData()

  if (!structuredData) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
}