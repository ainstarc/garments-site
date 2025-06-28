import { Garment } from '../../types/garment'
import Image from 'next/image'

export default function GarmentGrid({ garments }: { garments: Garment[] }) {
  return (
    <div className="card-grid">
      {garments.map((g) => (
        <div key={g._id} className="card">
          {g.imageUrl && (
            <Image src={g.imageUrl} alt={g.title} width={400} height={300} />
          )}
          <h2>{g.title}</h2>
          <p>{g.section} | {g.type}</p>
          <p>₹{g.price}</p>
          <p>Style: {g.styleName}</p>
          <p>Category: {g.categoryName}</p>
        </div>
      ))}
    </div>
  )
}
