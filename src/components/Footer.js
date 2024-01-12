import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-xs text-gray-500 p-4">
            <p className='mb-3'>Habit tracker inspired by <a href='https://jamesclear.com/stop-procrastinating-seinfeld-strategy' className="underline">The Seinfeld Strategy</a>. Log your daily habits (exercise, in this case). The goal is to <span className='italic'>"not break the chain"</span> of blue days.  </p>
            <p className='mb-3'>Read the <a href='https://scottgallant.net/posts/seinfeld-calendar/' className="underline">blog post</a> or fork it on <a href="https://github.com/scottgallant/seinfeld-calendar" className='underline'>GitHub</a>.</p>
        </footer>
    );
};

export default Footer;
