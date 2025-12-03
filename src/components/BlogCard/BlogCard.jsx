import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { blogCardStyles as styles } from './BlogCard-Styles';


export default function BlogCard({ blog }) {
  return (
    <div className={styles.card}>
      <img src={blog.image} alt={blog.title} className={styles.image} />

      <div className={styles.content}>
        <h3 className={styles.title}>{blog.title}</h3>

        <div className={styles.authorWrapper}>
          <img src={blog.authorImage} alt={blog.author} className={styles.authorImage} />
          <span className={styles.authorName}>{blog.author}</span>
        </div>

        <p className={styles.description}>{blog.description}</p>

        <button className={styles.button}>
          Read More <ArrowTopRightOnSquareIcon className={styles.buttonIcon} />
        </button>
      </div>
    </div>
  );
}






















// import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

// export default function BlogCard({ blog }) {
//   return (
//     <div className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition relative flex flex-col">
//       <img
//         src={blog.image}
//         alt={blog.title}
//         className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//       />
//       <div className="p-4 flex flex-col flex-grow">
//         <h3 className="font-bold text-lg mb-2 line-clamp-1">{blog.title}</h3>

//         {/* Author Image */}
//         <div className="flex items-center mb-2">
//           <img
//             src={blog.authorImage} // Add this property in your blog object
//             alt={blog.author}
//             className="w-8 h-8 rounded-full object-cover mr-2"
//           />
//           <span className="text-gray-500 text-sm">{blog.author}</span>
//         </div>

//         <p className="text-gray-700 text-sm mb-4 line-clamp-2">{blog.description}</p>

//         <button className="mt-auto w-full h-10 text-black rounded hover:text-orange-600 transition flex items-center justify-center">
//           Read More <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
//         </button>
//       </div>
//     </div>
//   );
// }
