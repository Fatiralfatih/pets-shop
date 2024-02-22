import CardImage from "./CardImage"

const Card = ({ children, image }) => {
  return (
    <div className={`bg-white  top-0 shadow-lg px-2 pb-3 md:pb-5 min-h-fit rounded-lg space-y-2 md:px-3 xl:px-2`}>
      <CardImage {...image} />
      {children}
    </div>
  )
}

export default Card
