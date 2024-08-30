import Image from "next/image";

export function ListingItem({ data }) {
  const {
    image,
    title,
    location,
    price,
    priceType,
    addedDate,
    views,
    comments,
  } = data;

  return (
    <tr>
      <td>
        <Image className="rounded" src={image} alt="" width={90} height={90} />

        <div className="property-info d-table">
          <h5 className="text-secondary font-400">{title}</h5>
          <span>
            <i className="fas fa-map-marker-alt text-primary font-13" />
            {location}
          </span>
          <div className="price mt-2">
            <span className="text-primary">{price}</span>
            <span>/ {priceType}</span>
          </div>
        </div>
      </td>

      <td>{addedDate}</td>

      <td>{views}</td>

      <td>{comments} Comments</td>
      <td>
        <a href="#" className="text-primary me-4 mb-1">
          <i className="fas fa-edit" />
        </a>
        <a href="#" className="text-primary mb-1">
          <i className="fas fa-trash" />
        </a>
      </td>
    </tr>
  );
}
