import Image from "next/image";

const SearchButton = ({otherClasses}: {otherClasses?: string}) => {
    return (
        <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
            <Image 
                src="/magnifying-glass.svg"
                height={40}
                width={40}
                alt="search"
                className="object-contain"
            />
        </button>
    );
}

export default SearchButton;