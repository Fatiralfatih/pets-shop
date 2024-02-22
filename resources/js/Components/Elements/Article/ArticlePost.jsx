import Badge from "../Badge/Badge"

const ArticlePost = ({ title, body, category }) => {
    return (
        <div className="px-4">
            <article className="flex flex-col gap-2 pt-3 pb-3 md:pb-0">
                <div>
                    <Badge title={category} colorSchema="bg-blue-50 text-blue-500 ring-blue-700/10" />
                </div>
                <div>
                    <h3 className="max-w-[400px] text-lg font-semibold">{title}</h3>
                </div>
                <div>
                    <p className="line-clamp-3">{body}</p>
                </div>
            </article>
        </div>
    )
}

export default ArticlePost
