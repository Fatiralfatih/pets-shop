import Badge from "../../Badge/Badge"

const CardBodyPost = ({ title, body, category }) => {
    return (
        <div className="px-4">
            <article className="flex flex-col gap-2 pt-3 pb-3 md:pb-0">
                <div>
                    <Badge title={category} colorSchema="bg-blue-sea text-white ring-blue-sea/10" />
                </div>
                <div>
                    <h1 className="max-w-[400px] text-lg font-semibold">{title}</h1>
                </div>
                <div>
                    <p className="line-clamp-3">{body}</p>
                </div>
            </article>
        </div>
    )
}

export default CardBodyPost
