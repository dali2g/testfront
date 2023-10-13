import {motion} from 'framer-motion'
const posts = [
    {
        id: 1,
        title: 'Best practices for UI/UX design',
        href: '#',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus at consequat bibendum, purus nunc suscipit nulla, at convallis libero dolor non quam. Sed tincidunt magna eu bibendum posuere.',
        date: 'Apr 12, 2020',
        datetime: '2020-04-12',
        category: { title: 'Design', href: '#' },
        author: {
          name: 'Ronni Cantadore',
          role: 'Design Engineer at Weyland-Yutani',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 2,
        title: 'Getting started with React Hooks',
        href: '#',
        description:
          'Learn how to use React Hooks to manage state and side effects in your React applications. This tutorial covers the basics of useState, useEffect, and more.',
        date: 'May 25, 2020',
        datetime: '2020-05-25',
        category: { title: 'Development', href: '#' },
        author: {
          name: 'Parker Johnson',
          role: 'UI Designer at MomCorp',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Mastering CSS Grid Layout',
        href: '#',
        description:
          'Discover the power of CSS Grid Layout and learn how to create complex and responsive layouts with ease. This comprehensive guide covers all aspects of CSS Grid.',
        date: 'Jun 20, 2020',
        datetime: '2020-06-20',
        category: { title: 'Web Design', href: '#' },
        author: {
          name: 'Erhart Cockrin',
          role: 'Product Lead at Cyberdyne Systems',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ];
    export default function Blogs() {
        return (
          <div className=" py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h1 className="py-6 text-6xl text-[#053b50] font-bold">From the blog</h1>
                <h3 className=" text-lg font-semibold leading-8 text-gray-600">
                  Learn how to grow your business with our expert advice.
                </h3>
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                  <motion.article key={post.id} className="flex max-w-xl flex-col items-start justify-between"
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, type: "tween" }}>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-[#053b50]">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        )
      }