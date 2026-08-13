const ProductCard = ({ name, price, imageUrl, originalPrice }) => {
  // The logic: It's on sale if an original price exists AND it's higher than the current price.
  const isOnSale = originalPrice && price < originalPrice;

  return (
    // bg-gray-50 provides that subtle off-white background from the design
    <div className="relative bg-gray-50 flex flex-col h-full">
      {/* The Sale Badge - Renders only if isOnSale is true */}
      {isOnSale && (
        <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider z-10">
          Sale
        </span>
      )}

      {/* flex-grow ensures the image area takes up available space, 
          pushing the footer down evenly across all cards */}
      <div className="grow flex items-center justify-center p-2 min-h-62.5">
        <img
          src={imageUrl}
          alt={`View details for ${name}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="flex justify-between items-center p-6 text-sm text-black">
        {/* truncate handles white-space: nowrap, overflow: hidden, and text-overflow: ellipsis in one class */}
        <span className="uppercase font-medium truncate pr-4">{name}</span>
        <span className="font-normal">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductCard;
