export default function Banner({ image, alt = "Banner" }) {
  return (
    <div className="w-full h-[60dvh] md:h-screen relative overflow-hidden">
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
