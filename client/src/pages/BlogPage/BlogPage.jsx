import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      const fetchedPosts = [
        {
          id: 1,
          title: "Lợi ích của thiền định",
          excerpt:
            "Thiền định giúp bạn tìm lại sự bình an trong tâm hồn, giảm stress và cải thiện tâm trạng.",
          readTime: "Read in 2 minutes",
          date: "May 25, 2024",
          img: "https://kagawa.vn/wp-content/uploads/2021/05/bi-quyet-ngoi-thien-dung-cach-6.jpg",
        },
        {
          id: 2,
          title: "Cách thực hành yoga đúng cách",
          excerpt:
            "Yoga không chỉ giúp cơ thể khỏe mạnh mà còn giúp tinh thần thư giãn và tĩnh tâm.",
          readTime: "Read in 3 minutes",
          date: "May 20, 2024",
          img: "https://images.everydayhealth.com/images/healthy-living/fitness/all-about-yoga-mega-722x406.jpg?sfvrsn=c26482ac_1",
        },
        {
          id: 3,
          title: "Các loại trà thảo mộc giúp giảm stress",
          excerpt:
            "Trà thảo mộc là một phương pháp tự nhiên giúp bạn giảm căng thẳng và cải thiện sức khỏe.",
          readTime: "Read in 6 minutes",
          date: "May 15, 2024",
          img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/5/6/1188988/89405945_32352208231.jpg",
        },
        {
          id: 4,
          title: "Phương thức spa như thế nào là hiệu quả?",
          excerpt:
            "Trà thảo mộc là một phương pháp tự nhiên giúp bạn giảm căng thẳng và cải thiện sức khỏe.",
          readTime: "Read in 8 minutes",
          date: "May 15, 2024",
          img: "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/https://cms-prod.s3-sgn09.fptcloud.com/healing_la_gi_hieu_dung_ve_healing_de_chua_lanh_hieu_qua_1_9c101f7fc7.png",
        },
      ];
      setPosts(fetchedPosts);
      setLoading(false);
    }, 500); // Simulating loading delay
  }, []);

  return (
    <section className="container mx-auto py-16 px-4">
      <h1 className="text-center my-10 text-5xl italic font-semibold font-logoTitle text-four">
        BLOG PAGE
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
        
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-[400px] bg-white p-6 rounded-lg border border-gray-300">
              <Skeleton variant="rectangular" width="100%" height="200px" className="mb-4 rounded" />
              <Skeleton variant="text" width="80%" height={24} className="mb-2" />
              <Skeleton variant="text" width="90%" height={16} className="mb-2" />
              <Skeleton variant="text" width="60%" height={16} className="mb-2" />
              <Skeleton variant="text" width="40%" height={16} />
            </div>
          ))
        ) : (
          posts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="no-underline">
              <div className="cursor-pointer h-[100%] bg-white p-6 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-2xl font-bold mb-4 h-12">{post.title}</h3>
                <img src={post.img} alt={post.title} className="mb-4 rounded w-full object-cover h-40" />
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <p className="text-gray-500 text-sm">{post.date}</p>
                <p className="text-blue-500 text-sm">{post.readTime}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default BlogPage;
