import Helmet from "react-helmet"

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <div className="flex items-center justify-center h-[66vh] ">
                <h1 className="text-gray-600 font-bold md:text-7xl text-4xl">
                    404 NOT FOUND : &#40;
                </h1>
            </div>
        </>

    )
}