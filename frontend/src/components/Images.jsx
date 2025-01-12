import PropTypes from "prop-types";

const Images = ({ images }) => {
    return (
        <div className="mb-8 sm:mb-8">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative aspect-[9/12] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${
                            index % 2 === 0 ? "rotate-2" : "-rotate-2"
                        }`}
                    >
                        <img
                            alt={image.alt || ""}
                            loading="lazy"
                            width={image.width}
                            height={image.height}
                            decoding="async"
                            className="absolute inset-0 h-full w-full object-cover"
                            sizes="(min-width: 640px) 18rem, 11rem"
                            src={image.src}
                            style={{ color: "transparent" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

Images.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            alt: PropTypes.string,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Images;
