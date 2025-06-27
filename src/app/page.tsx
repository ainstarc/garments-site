import { sanity } from '@/lib/sanity'
import Image from 'next/image'

type Garment = {
  _id: string
  title: string
  price: number
  imageUrl: string
}

export default async function HomePage() {
  const garments: Garment[] = await sanity.fetch(`
    *[_type == "garment"]{
      _id,
      title,
      price,
      "imageUrl": image.asset->url
    }
  `)

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Garments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {garments.map((g) => (
          <div key={g._id} className="border rounded-lg p-4">
            <Image
              src={g.imageUrl}
              alt={g.title}
              width={400}
              height={400}
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-lg font-medium mt-2">{g.title}</h2>
            <p className="text-gray-600">₹{g.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
