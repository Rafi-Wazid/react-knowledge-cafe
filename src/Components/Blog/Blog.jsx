import PropTypes from 'prop-types'; // ES6
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({  blog , handleAddToBookmarks , handleMarkAsRead}) => {
    const { id , title , cover , reading_time , author_img , author , posted_date , hashtags , } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-12  rounded-full object-cover' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>Posted Date : {posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} className='ml-2 text-green-600 text-2xl'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>{
                hashtags.map((hash , idx) => <span key={idx}className='mr-3'><a href=""> #{hash}</a></span>)}</p>
                <button 
                onClick={() => handleMarkAsRead(id , reading_time)}
                className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;