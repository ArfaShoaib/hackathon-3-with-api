import React from 'react';

const FeaturedPost = (props:any) => {
  const { title, image, description, date, comments, url } = props;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden md:w-1/3 p-4 lg:w-[348px] lg:h-[606px]">
      <img className="w-full" src={image} alt={title} width={348} />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-gray-500 text-sm">{date}</span>
          <span className="flex items-center text-gray-500 text-sm">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h10M7 16h10"
              />
            </svg>
            {comments} Comments
          </span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          <a href={url} className="text-white">Learn More</a>
        </button>
      </div>
    </div>
  );
};

const FeaturedPosts = () => {
  const posts = [
    {
      title: 'Loudest à la Madison #1 (L’integral)',
      image: '/image9.png',
      description:
        'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
      date: '22 April 2021',
      comments: 10,
      url: '/post1',
    },
    {
      title: 'Loudest à la Madison #2 (L’integral)',
      image: '/image2.jpg',
      description:
        'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
      date: '23 April 2021',
      comments: 5,
      url: '/post2',
    },
    {
      title: 'Loudest à la Madison #2 (L’integral)',
      image: '/image10.png',
      description:
        'We focus on ergonomics and meeting you where you work. It’s only a keystroke away.',
      date: '23 April 2021',
      comments: 5,
      url: '/post2',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((post, index) => (
        <FeaturedPost
          key={index}
          title={post.title}
          image={post.image}
          description={post.description}
          date={post.date}
          comments={post.comments}
          url={post.url}
        />
      ))}
    </div>
  );
};

export default FeaturedPosts; 