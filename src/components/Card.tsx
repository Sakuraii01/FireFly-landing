import { cardData } from "../constants/images";

interface CardItemProps {
  image: string;
  description: string;
}

const CardItem = ({ image, description }: CardItemProps) => (
  <div className="md:w-1/3 lg:w-1/4 py-4 bg-gradient-to-r from-cardgradentleft to-cardgradentright shadow-md rounded-md">
    <img src={image} alt={description} className="mx-auto h-12 md:h-16" />
    <p className="text-center mt-2 text-color3 mx-5">{description}</p>
  </div>
);

const Card = () => {
  return (
    <div className="flex flex-wrap justify-center gap-7">
      {cardData.map((card, index) => (
        <CardItem
          key={index}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Card;
