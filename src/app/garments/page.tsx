import { sanity } from '../../lib/sanity'
import { Garment } from '../../types/garment'
import GarmentGrid from '../components/GarmentGrid'


export default async function GarmentsPage() {
  const garments: Garment[] = await sanity.fetch(`
    *[_type == "garment"]{
      _id,
      title,
      description,
      price,
      sizes,
      colors,
      section,
      type,
      "styleName": style->name,
      "categoryName": category->name,
      "imageUrl": mainImage.asset->url,
      "gallery": galleryImages[].asset->url,
      slug
    }
  `)

  return (
    <>
      <h1>All Garments</h1>
      <GarmentGrid garments={garments} />
    </>
  )
}
