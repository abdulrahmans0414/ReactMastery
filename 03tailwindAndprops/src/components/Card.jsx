
// eslint-disable-next-line react/prop-types
export const Card = ({username}) => {

    return (
        <div className="relative h-[400px] w-[300px] rounded-md ">
            <img
                src="https://avatars.githubusercontent.com/u/143753150?s=96&v=4"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white"> Hello {username}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    View Profile &rarr;
                </button>
            </div>
        </div>
    )
}
