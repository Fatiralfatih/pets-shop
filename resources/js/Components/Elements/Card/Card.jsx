import CardImage from "./CardImage"

const Card = ({ children, image }) => {
  return (
    <div className={`bg-white shadow-lg px-2 pb-3 md:pb-5 max-h-fit rounded-lg space-y-2 md:px-3 xl:px-2`}>
      <CardImage image={image} />

      {children}

    </div>
  )
}

export default Card
