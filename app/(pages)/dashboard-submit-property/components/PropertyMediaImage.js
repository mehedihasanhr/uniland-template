import Image from "next/image";

export function PropertyMediaImage({ src, alt, width = 220, height = 220 }) {
  return (
    <li className="col">
      <Image
        src={src}
        className="rounded pb-30"
        alt={alt}
        width={width}
        height={height}
      />
      <a href="#" title="Remove image item">
        <i className="fas fa-trash" />
      </a>
    </li>
  );
}
