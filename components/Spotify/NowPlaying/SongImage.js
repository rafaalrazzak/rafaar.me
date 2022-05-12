import Image from "../../Image";
import { convertImage, toBase6 } from "@/lib/utils/imageBlur";

export default function SongImage({ alt, src, size }) {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      type="circle"
      width={size}
      height={size}
      objectFit="cover"
      className="rounded-full"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(
        convertImage({ src }, 15, 15)
      )}`}
    />
  );
}
