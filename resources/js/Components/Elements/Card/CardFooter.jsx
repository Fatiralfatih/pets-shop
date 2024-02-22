import assetLocal from "@/libs/helper/AssetLocal"

const CardFooter = () => {
  return (
    <div className="px-1">
      <button className="bg-orange-200/50 ps-3 py-2 w-full rounded-lg flex items-center hover:bg-orange-200/100 md:space-x-3">
        <figure>
          <img
            src={assetLocal('icon/gift.svg')}
            alt="gift"
            className=""
          />
        </figure>
        <article className="">
          <p className="text-xs lg:text-sm text-primary-800 font-semibold">Free Toy & Free Shaker</p>
        </article>
      </button>
    </div>
  )
}

export default CardFooter
