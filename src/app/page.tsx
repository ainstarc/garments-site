import { sanity } from "@/lib/sanity";
import Image from "next/image";

type Garment = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
};

export default async function HomePage() {
  const garments: Garment[] = await sanity.fetch(`
    *[_type == "garment"]{
      _id,
      title,
      price,
      "imageUrl": mainImage.asset->url,
    }
  `);

  return (
    <main className="container">
      <h1>Garments</h1>
      <div className="card-grid">
        {garments.map((garment) => (
          <div key={garment._id} className="card">
            <div className="card-img-container">
              <Image
                src={garment.imageUrl}
                alt={garment.title}
                width={400}
                height={0} 
                style={{ height: "auto", width: "100%" }}
              />
            </div>
            <h2>{garment.title}</h2>
            <p>₹{garment.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
