import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const BlogPost = () => {
  const { id } = useParams();
  const [currentPostId, setCurrentPostId] = useState(parseInt(id));
  const posts = [
    {
      id: 1,
      title: "Lợi ích của thiền định",
      content:
        "Thiền định là một phương pháp tập trung tâm trí và tĩnh lặng để tạo ra sự yên bình và cảm giác thư giãn. Nó mang lại nhiều lợi ích tâm lý và vật lý cho người thực hành. Thiền định giúp giảm căng thẳng, cải thiện tâm trạng, tăng cường tập trung và tăng sự tự nhận thức. Bằng cách tập trung vào hơi thở và cơ thể, thiền định giúp loại bỏ suy nghĩ rối bời và tăng cường sự tỉnh táo. Nó cũng có thể giúp giảm đau và cải thiện chất lượng giấc ngủ.",
      date: "May 25, 2024",
      readTime: "Read in 2 minutes",
      img: "https://kagawa.vn/wp-content/uploads/2021/05/bi-quyet-ngoi-thien-dung-cach-6.jpg",
    },
    {
      id: 2,
      title: "Cách thực hành yoga đúng cách",
      content:
        "Yoga là một hình thức tập luyện kết hợp giữa tư thế cơ thể, hơi thở và tập trung tâm trí để cải thiện sức khỏe và tăng cường sự linh hoạt. Các bài tập yoga thường kết hợp giữa các tư thế cơ bản như cưỡi ngựa, cánh cửa, và con chó hướng lên trời. Khi thực hiện yoga đúng cách, người tập có thể cảm nhận được sự kết hợp giữa cơ thể và tinh thần, tạo ra một trạng thái thư giãn và thoải mái. Yoga không chỉ giúp cải thiện sự linh hoạt và sức mạnh cơ bắp mà còn giảm căng thẳng, cải thiện tâm trạng và tăng cường khả năng tập trung.",
      date: "May 20, 2024",
      readTime: "Read in 3 minutes",
      img: "https://images.everydayhealth.com/images/healthy-living/fitness/all-about-yoga-mega-722x406.jpg?sfvrsn=c26482ac_1",
    },
    {
      id: 3,
      title: "Các loại trà thảo mộc giúp giảm stress",
      content:
        "Trà thảo mộc là một loại thức uống được làm từ các loại cây thảo mộc như cam thảo, cây lúa mạch, và cây bạch quả. Các loại trà thảo mộc thường được sử dụng để giảm căng thẳng, cải thiện tâm trạng và tăng cường sức khỏe tổng thể. Các thành phần tự nhiên trong trà thảo mộc có thể giúp làm dịu cơ thể và tâm trí, tạo ra một cảm giác thư giãn và yên bình. Nhiều loại trà thảo mộc cũng có tính chất chống vi khuẩn và chống viêm, giúp cải thiện hệ tiêu hóa và tăng cường hệ miễn dịch.",
      date: "May 15, 2024",
      readTime: "Read in 6 minutes",
      img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/5/6/1188988/89405945_32352208231.jpg",
    },
    {
      id: 4,
      title: "Phương thức spa như thế nào là hiệu quả?",
      content:
        "Spa là một trải nghiệm thư giãn và làm đẹp được thiết kế để giúp cơ thể và tâm trí thư giãn và tái tạo. Các phương thức spa như massage, xông hơi, và liệu pháp thảo mộc được sử dụng để giảm căng thẳng, loại bỏ độc tố, và cải thiện tuần hoàn máu. Khi thực hiện đúng cách, spa có thể giúp cải thiện tình trạng da, giảm đau nhức cơ bắp, và tăng cường sự thoải mái và sảng khoái. Spa cũng là một phương pháp tuyệt vời để tạo ra một trải nghiệm thư giãn và kỷ niệm đặc biệt cho bản thân hoặc bạn bè và gia đình.",
      date: "May 15, 2024",
      readTime: "Read in 8 minutes",
      img: "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/https://cms-prod.s3-sgn09.fptcloud.com/healing_la_gi_hieu_dung_ve_healing_de_chua_lanh_hieu_qua_1_9c101f7fc7.png",
    },
  ];

  const post = posts.find((post) => post.id === currentPostId);
  const relatedPosts = posts.filter((post) => post.id !== currentPostId);

  const handleClick = (postId) => {
    setCurrentPostId(postId);
  };

  return (
    <section className="container mx-auto  pt-12 pb-10 px-4">
      <div className="my-12">
        <Link to="/blog" className="text-blue-500">
          &larr; Back to Blog
        </Link>
      </div>
      <article className="bg-white p-6 rounded-lg border flex flex-col gap-y-2">
        <h1 className="text-4xl  font-bold text-center block mb-4">{post.title}</h1>
        <div>
            <p className="text-gray-500 mb-2">Published on {post.date}</p>
            <p className="text-gray-500 mb-6">{post.readTime}</p>
        </div>
        <img
          src={post.img}
          alt={post.title}
          className="mb-6 rounded w-full object-cover h-64"
        />
        <div className="text-lg text-gray-800 leading-relaxed">
          {post.content}
        </div>
      </article>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Related Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <div
              key={post.id}
              className="cursor-pointer bg-white p-6 rounded-lg border border-gray-300 hover:shadow-lg transition-shadow duration-200"
              onClick={() => handleClick(post.id)}
            >
              <h3 className="text-2xl  font-bold mb-2">{post.title}</h3>
              <img
                src={post.img}
                alt={post.title}
                className="mb-2 rounded w-full object-cover h-40"
              />
              <p className="text-gray-700 mb-2">{post.excerpt}</p>
              <p className="text-gray-500 text-sm">Published on {post.date}</p>
              <p className="text-blue-500 text-sm">{post.readTime}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
