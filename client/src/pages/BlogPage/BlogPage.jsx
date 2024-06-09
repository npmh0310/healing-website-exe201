import { useState } from "react";

const BlogPage = () => {
  const posts = [
    {
      title: "Lợi ích của thiền định",
      excerpt:
        "Thiền định giúp bạn tìm lại sự bình an trong tâm hồn, giảm stress và cải thiện tâm trạng.",
      readTime: "Read in 2 minutes",
      date: "May 25, 2024",
      img: "https://kagawa.vn/wp-content/uploads/2021/05/bi-quyet-ngoi-thien-dung-cach-6.jpg",
    },
    {
      title: "Cách thực hành yoga đúng cách",
      excerpt:
        "Yoga không chỉ giúp cơ thể khỏe mạnh mà còn giúp tinh thần thư giãn và tĩnh tâm.",
      readTime: "Read in 3 minutes",
      date: "May 20, 2024",
      img: "https://images.everydayhealth.com/images/healthy-living/fitness/all-about-yoga-mega-722x406.jpg?sfvrsn=c26482ac_1",
    },
    {
      title: "Các loại trà thảo mộc giúp giảm stress",
      excerpt:
        "Trà thảo mộc là một phương pháp tự nhiên giúp bạn giảm căng thẳng và cải thiện sức khỏe.",
      readTime: "Read in 6 minutes",
      date: "May 15, 2024",
      img: "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/5/6/1188988/89405945_32352208231.jpg",
    },

    {
      title: "Phương thức spa như thế nào là hiệu quả?",
      excerpt:
        "Trà thảo mộc là một phương pháp tự nhiên giúp bạn giảm căng thẳng và cải thiện sức khỏe.",
      readTime: "Read in 8 minutes",
      date: "May 15, 2024",
      img: "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/https://cms-prod.s3-sgn09.fptcloud.com/healing_la_gi_hieu_dung_ve_healing_de_chua_lanh_hieu_qua_1_9c101f7fc7.png",
    },
  ];

  const [openBlog1, setOpenBlog1] = useState(false);
  const [openBlog2, setOpenBlog2] = useState(false);
  const [openBlog3, setOpenBlog3] = useState(false);
  const [openBlog4, setOpenBlog4] = useState(false);

  const [allBlog, setAllBlog] = useState(true);
  const [relatedBlog, setRelatedBlog] = useState(false);

  const openBlogPage = (index) => {
    if (index === 0) {
      setOpenBlog1(true);
      setOpenBlog2(false);
      setOpenBlog3(false);
      setOpenBlog4(false);
      setAllBlog(false);
    } else if (index === 1) {
      setOpenBlog2(true);
      setOpenBlog1(false);
      setOpenBlog3(false);
      setOpenBlog4(false);
      setAllBlog(false);
    } else if (index === 2) {
      setOpenBlog3(true);
      setOpenBlog1(false);
      setOpenBlog2(false);
      setOpenBlog4(false);
      setAllBlog(false);
    } else if (index === 3) {
      setOpenBlog4(true);
      setOpenBlog1(false);
      setOpenBlog2(false);
      setOpenBlog3(false);
      setAllBlog(false);
    }
  };

  return (
    <>
      {allBlog && (
        <section className="container mx-auto py-[74px]">
          <h1 className="text-center my-10 text-5xl italic font-extrabold font-primary text-four">
            BLOG PAGE
          </h1>
          {/* "cursor-pointer flex flex-col border fea-item border-gray-300 rounded-2xl w-[90%] course-item hover:shadow-lg" */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {posts.map((post, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white p-6 rounded-lg fea-item border-gray-300 w-[90%] hover:shadow-lg"
                onClick={() => openBlogPage(index)}
              >
                {console.log(index)}
                <h3 className="text-2xl font-bold mb-6 h-12">{post.title}</h3>
                <img
                  src={post.img}
                  alt="Meditation"
                  className="mb-4 rounded mx-auto w-full object-cover h-[170px]"
                />
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      {openBlog1 && (
        <div>
          <div className="mb-20 mx-52  py-[74px]  py-[74px]">
            <article className="container mx-auto px-10 py-3 bg-white rounded-lg shadow-lg mt-6">
              <h1 className="text-4xl font-bold mb-2 text-center">
                Lợi ích của thiền định
              </h1>
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <img
                    className="mr-4 w-12 h-12 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-lg font-bold text-gray-900"
                    >
                      Jese Leos
                    </a>
                    <p className="text-base text-gray-500">
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                  </div>
                </div>
              </address>
              <p className="text-gray-700 mb-6">
                May 25, 2024 | Read in 2 minutes
              </p>

              <img
                src="https://kagawa.vn/wp-content/uploads/2021/05/bi-quyet-ngoi-thien-dung-cach-6.jpg"
                alt="Meditation"
                className="w-[70%] mb-4 rounded mx-auto"
              />
              <div className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">
                  Thiền định giúp bạn tìm lại sự bình an trong tâm hồn, giảm
                  stress và cải thiện tâm trạng. Đây là một phương pháp thực
                  hành từ lâu đời, có nguồn gốc từ các tôn giáo phương Đông,
                  nhưng hiện nay đã trở nên phổ biến trên toàn thế giới.
                </p>
                <p className="mb-4">
                  Khi bạn thiền, bạn tập trung vào hơi thở và loại bỏ những suy
                  nghĩ tiêu cực ra khỏi tâm trí. Điều này giúp bạn giảm căng
                  thẳng và lo âu, cải thiện giấc ngủ và tăng cường sự tập trung.
                  Nhiều nghiên cứu khoa học đã chứng minh rằng thiền định có thể
                  giúp cải thiện sức khỏe tinh thần và thể chất.
                </p>
                <p className="mb-4">
                  Thiền định cũng giúp bạn nhận ra và hiểu rõ hơn về bản thân.
                  Bạn học cách đối diện với những cảm xúc của mình một cách bình
                  tĩnh và không phán xét. Điều này giúp bạn phát triển sự tự tin
                  và khả năng kiểm soát cảm xúc.
                </p>
                <p className="mb-4">
                  Để bắt đầu thiền, bạn chỉ cần tìm một nơi yên tĩnh, ngồi thoải
                  mái và tập trung vào hơi thở. Hãy thử dành ra vài phút mỗi
                  ngày để thiền và bạn sẽ thấy sự thay đổi tích cực trong cuộc
                  sống của mình.
                </p>
              </div>
            </article>
          </div>
        </div>
      )}

      {openBlog4 && (
        <div>
          <div className="mb-20 mx-52  py-[74px]">
            <article className="container mx-auto px-10 py-3 bg-white rounded-lg shadow-lg mt-6">
              <h1 className="text-4xl font-bold mb-2 text-center">
                Lợi ích của thiền định
              </h1>
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <img
                    className="mr-4 w-12 h-12 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-lg font-bold text-gray-900"
                    >
                      Jese Leos
                    </a>
                    <p className="text-base text-gray-500">
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                  </div>
                </div>
              </address>
              <p className="text-gray-700 mb-6">
                May 25, 2024 | Read in 2 minutes
              </p>

              <img
                src="https://kagawa.vn/wp-content/uploads/2021/05/bi-quyet-ngoi-thien-dung-cach-6.jpg"
                alt="Meditation"
                className="w-[70%] mb-4 rounded mx-auto"
              />
              <div className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">
                  Thiền định giúp bạn tìm lại sự bình an trong tâm hồn, giảm
                  stress và cải thiện tâm trạng. Đây là một phương pháp thực
                  hành từ lâu đời, có nguồn gốc từ các tôn giáo phương Đông,
                  nhưng hiện nay đã trở nên phổ biến trên toàn thế giới.
                </p>
                <p className="mb-4">
                  Khi bạn thiền, bạn tập trung vào hơi thở và loại bỏ những suy
                  nghĩ tiêu cực ra khỏi tâm trí. Điều này giúp bạn giảm căng
                  thẳng và lo âu, cải thiện giấc ngủ và tăng cường sự tập trung.
                  Nhiều nghiên cứu khoa học đã chứng minh rằng thiền định có thể
                  giúp cải thiện sức khỏe tinh thần và thể chất.
                </p>
                <p className="mb-4">
                  Thiền định cũng giúp bạn nhận ra và hiểu rõ hơn về bản thân.
                  Bạn học cách đối diện với những cảm xúc của mình một cách bình
                  tĩnh và không phán xét. Điều này giúp bạn phát triển sự tự tin
                  và khả năng kiểm soát cảm xúc.
                </p>
                <p className="mb-4">
                  Để bắt đầu thiền, bạn chỉ cần tìm một nơi yên tĩnh, ngồi thoải
                  mái và tập trung vào hơi thở. Hãy thử dành ra vài phút mỗi
                  ngày để thiền và bạn sẽ thấy sự thay đổi tích cực trong cuộc
                  sống của mình.
                </p>
              </div>
            </article>
          </div>
        </div>
      )}

      {openBlog2 && (
        <div>
          <div className="mb-20 mx-52  py-[74px]">
            <article className="container mx-auto px-10 py-3 bg-white rounded-lg shadow-lg mt-6">
              <h1 className="text-4xl font-bold mb-2 text-center">
                Cách thực hành yoga đúng cách
              </h1>
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <img
                    className="mr-4 w-12 h-12 rounded-full"
                    src="https://images.everydayhealth.com/images/healthy-living/fitness/all-about-yoga-mega-722x406.jpg?sfvrsn=c26482ac_1"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-lg font-bold text-gray-900"
                    >
                      Jese Leos
                    </a>
                    <p className="text-base text-gray-500">
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                  </div>
                </div>
              </address>
              <p className="text-gray-700 mb-6">
                May 25, 2024 | Read in 2 minutes
              </p>

              <img
                src="https://images.everydayhealth.com/images/healthy-living/fitness/all-about-yoga-mega-722x406.jpg?sfvrsn=c26482ac_1"
                alt="Meditation"
                className="w-[70%] mb-4 rounded mx-auto"
              />
              <div className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">
                  Chọn Địa Điểm và Thời Gian Phù Hợp: Yoga cần được thực hiện ở
                  nơi yên tĩnh, thoáng đãng và sạch sẽ. Thời gian lý tưởng để
                  tập yoga là buổi sáng sớm hoặc buổi chiều muộn khi cơ thể và
                  tinh thần của bạn đã sẵn sàng.
                </p>
                <p className="mb-4">
                  Trang Phục Thoải Mái: Chọn quần áo thoải mái, co giãn tốt để
                  không làm cản trở các động tác yoga. Khởi Động Kỹ Lưỡng: Trước
                  khi bắt đầu bất kỳ bài tập yoga nào, hãy dành ít nhất 5-10
                  phút để khởi động cơ thể. Điều này giúp làm ấm cơ bắp và giảm
                  nguy cơ chấn thương.
                </p>
                <p className="mb-4">
                  Hít Thở Đúng Cách: Hít thở là yếu tố quan trọng nhất trong
                  yoga. Hãy thở sâu và đều, sử dụng cả mũi để hít vào và thở ra.
                  Điều này giúp cung cấp đủ oxy cho cơ thể và giúp tâm trí thư
                  giãn. Tập Trung và Chú Ý: Hãy tập trung vào các động tác và
                  cảm nhận sự thay đổi trong cơ thể. Đừng ép buộc cơ thể vào
                  những tư thế quá khó mà hãy lắng nghe cơ thể mình và tiến hành
                  từng bước một.
                </p>
                <p className="mb-4">
                  Kết Thúc Bằng Thư Giãn: Sau khi hoàn thành bài tập yoga, hãy
                  dành ít nhất 5-10 phút để thư giãn hoàn toàn. Bạn có thể nằm
                  trong tư thế Savasana để cơ thể hoàn toàn thả lỏng và phục hồi
                  năng lượng.
                </p>
              </div>
            </article>
          </div>
        </div>
      )}

      {openBlog3 && (
        <div>
          <div className="mb-20 mx-52  py-[74px]">
            <article className="container mx-auto px-10 py-3 bg-white rounded-lg shadow-lg mt-6">
              <h1 className="text-4xl font-bold mb-2 text-center">
                Trà thảo mộc giúp giảm stress
              </h1>
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <img
                    className="mr-4 w-12 h-12 rounded-full"
                    src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/5/6/1188988/89405945_32352208231.jpg"
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-lg font-bold text-gray-900"
                    >
                      Jese Leos
                    </a>
                    <p className="text-base text-gray-500">
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                  </div>
                </div>
              </address>
              <p className="text-gray-700 mb-6">
                May 25, 2024 | Read in 2 minutes
              </p>

              <img
                src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/5/6/1188988/89405945_32352208231.jpg"
                alt="Meditation"
                className="w-[70%] mb-4 rounded mx-auto"
              />
              <div className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">
                  Trà Hoa Cúc (Chamomile): Trà hoa cúc nổi tiếng với tính chất
                  làm dịu và an thần. Nó giúp giảm căng thẳng và lo âu, đồng
                  thời cải thiện giấc ngủ. Trà Bạc Hà (Peppermint): Trà bạc hà
                  giúp làm dịu dạ dày và giảm căng thẳng. Hương thơm tự nhiên
                  của bạc hà cũng giúp thư giãn tâm trí. Trà Hoa Oải Hương
                  (Lavender): Trà oải hương có tác dụng làm dịu hệ thần kinh,
                  giúp giảm căng thẳng và lo âu. Nó cũng giúp cải thiện chất
                  lượng giấc ngủ. Trà Rễ Valerian: Đây là một loại thảo mộc có
                  tác dụng an thần mạnh, giúp giảm lo âu và căng thẳng. Nó
                  thường được sử dụng để điều trị chứng mất ngủ. Trà Cam Thảo
                  (Licorice Root): Trà cam thảo có tác dụng giảm căng thẳng, mệt
                  mỏi và cải thiện sức đề kháng của cơ thể.
                </p>
              </div>
            </article>
          </div>
        </div>
      )}

      <div>
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-14">
          Related Blogs
        </h2>
        <div className="flex flex-wrap gap-x-10 gap-y-5 items-center justify-center mb-10">
          {posts.map((post, index) => {
            return (
              <div
                className="flex w-[40%] gap-x-10 fea-item border-gray-300 hover:shadow-lg rounded-md p-3"
                onClick={() => openBlogPage(index)}
              >
                <a href="#" className="w-2/4">
                  <img
                    src={post.img}
                    className="mb-5 rounded-lg object-cover w-full h-[170px]"
                    alt="Image 1"
                  />
                </a>
                <div className="w-2/4">
                  <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900">
                    <a href="#">{post.title}</a>
                  </h2>
                  <p className="mb-3 w-[100%] text-gray-500 dark:text-gray-400">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
                  >
                    {post.readTime}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
