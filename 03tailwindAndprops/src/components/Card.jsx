import PropTypes from 'prop-types';

export const Card = ({ username, imgSrc }) => {
    return (
        <div className="group relative h-[400px] w-[300px] transform cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <img
                src={imgSrc}
                alt={username}
                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 space-y-3 p-6 text-white">
                <h2 className="text-2xl font-bold tracking-wide">{username}</h2>
                <p className="text-gray-300 line-clamp-2">
                    Passionate developer creating amazing web experiences. Specializing in modern web technologies and user-centric design.
                </p>
                <button className="flex items-center space-x-1 font-semibold text-white/90 transition-all hover:text-white">
                    <span>View Profile</span>
                    <span className="inline-block transform transition-transform group-hover:translate-x-1">
                        &rarr;
                    </span>
                </button>
            </div>
        </div>
    );
};

Card.propTypes = {
    username: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired
};