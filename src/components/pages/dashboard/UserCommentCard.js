import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const UserCommentCard = ({ comment }) => {
    const navigate = useNavigate();
    const { blog, description, author, updatedAt } = comment ?? {};
    const { profile } = useSelector((state) => state.profile);
    const { image } = profile;
    const calculateTimeDifference = (timestamp) => {
        const now = new Date();
        const commentDate = new Date(timestamp);
        const differenceInSeconds = Math.floor((now - commentDate) / 1000);

        if (differenceInSeconds < 60) {
            return `${differenceInSeconds} seconds ago`;
        } else if (differenceInSeconds < 3600) {
            const minutes = Math.floor(differenceInSeconds / 60);
            return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
        } else if (differenceInSeconds < 86400) {
            const hours = Math.floor(differenceInSeconds / 3600);
            return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
        } else if (differenceInSeconds < 2592000) {
            const days = Math.floor(differenceInSeconds / 86400);
            return `${days} ${days === 1 ? 'day' : 'days'} ago`;
        } else {
            const months = Math.floor(differenceInSeconds / 2592000);
            return `${months} ${months === 1 ? 'month' : 'months'} ago`;
        }
    };

    const upDated = calculateTimeDifference(updatedAt);
    const handleClick = () => {
        navigate(`/viewBlog/${blog._id}`);
    }
    return (
        <div className="flex flex-col w-full items-start justify-start px-2 pt-2 pb-3 gap-2 sm:py-2 sm:px-6 bg-lightNavy rounded-3xl ">
            <div className=""
                onClick={handleClick}>
                <p className="text-md sm:text-lg font-semibold ml-2 hover:underline cursor-pointer">{blog?.title}</p>

            </div>
            <div className="flex flex-row items-center gap-x-2 justify-center">
                <img
                    src={image}
                    alt={`${author.firstName} ${author.lastName}`}
                    className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col items-start gap-y-1 w-full">
                    <div className="flex flex-row items-center gap-x-2 justify-center">
                        <p className="text-xs sm:text-sm font-bold text-slate-200">You</p>
                        <span className="text-gray-400 text-xs">{upDated}</span>
                    </div>
                    <p className="text-xs sm:text-sm w-full ">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCommentCard;
