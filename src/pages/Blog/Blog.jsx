import BlogCard from "../../components/BlogCard/BlogCard";
import CTABox from "../../components/CTABox/CTABox";
import blogimage1 from "../../assets/BlogAssets/blog1.png";
import blogimage3 from "../../assets/BlogAssets/blog3.png";
import blogAuthor from "../../assets/BlogAssets/blogAuthor.png";

const blogs = [
  {
    title: "4 Top Fundraising Challenges For Youth Activities",
    author: "Marie Caphlish",
    authorImage: blogAuthor,
    description:
      "School fundraising is an important aspect of raising money for various activities, events, and programs...",
    image: blogimage1,
  },
  {
    title: "Candy Fundraising Solutions To Pay For Your Kids' Activities",
    author: "Marie Caphlish",
    authorImage: blogAuthor,
    description:
      "Candy fundraising has emerged as one of the most effective and enjoyable ways to raise money for youth activities...",
    image: blogimage1,
  },
  {
    title: "Why Every Community Should Invest In Youth Sports In America",
    author: "Marie Caphlish",
    authorImage: blogAuthor,
    description:
      "Youth sports in America represent more than just games—they are fundamental building blocks...",
    image: blogimage1,
  },
  {
    title: "Why People Contribute to Fundraisers: The Heart Behind Every Gift",
    author: "Marie Caphlish",
    authorImage: blogAuthor,
    description:
      "Fundraising is more than just asking for money—it's about connecting with people's values and emotions...",
    image: blogimage3,
  },
];

export default function OurBlog() {
  return (
    <div className="p-8 bg-gray-50">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-4">Our Blog</h1>
      <p className="text-center text-gray-700 mb-8 text-sm">
        Discover insights, tips, and stories about fundraising, youth activities, and community building.
      </p>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 px-8 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>

      {/* CTA Box */}
      <CTABox />
    </div>
  );
}
