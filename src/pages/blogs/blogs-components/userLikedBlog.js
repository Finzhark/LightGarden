
function UserLike ({
    title = "",
    content = "",
    category = "",
}) {
    return (
        <div className="card w-auto bg-base-100 hover:shadow-lg  hover:border-gray-200 hover:-translate-y-1">
            <div className="card-body items-start text-start text-ellipsis">
                <h2 className="card-title">{title}</h2>
                    <div className="badge badge-outline rounded-md">{category}</div>
                <div>
                <p className= "text-clip overflow-hidden ...">{content}</p>
                </div>
            </div>
        </div>
    )
}


export default function RenderLikedBlogCards ({
    likedArticles = [],
}) {
    return likedArticles.map((likedArticle, index) => {
        return (
            <UserLike key={likedArticle.id}
                title={likedArticle.Blog.title}
                content={likedArticle.Blog.content}
                category={likedArticle.Blog?.Category?.name}
            />
        )
    })
}