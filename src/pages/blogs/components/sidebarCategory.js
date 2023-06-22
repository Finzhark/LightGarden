function SidebarCategories ({
    category = ""
}) {
    return (
        <div className="
            bg-slate-200 rounded-lg px-10 py-10 my-5 h-fit
        ">
        <h3 className="text-lg font-medium mb-2">Categories you might like</h3>
        <ul>
            <li className="text-gray-600 mb-1">
                {category}
            </li>
        </ul>
        </div>
    );
};

export default function RenderSidebarCategories ({
    sideCat= []
}) {
    return sideCat.map((sideCat, index) => {
        return (
            <SidebarCategories key={sideCat.id}
                category={sideCat?.Category?.name}
            />
        )
    })
}