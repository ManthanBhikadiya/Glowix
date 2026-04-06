import BlogCard from "../components/BlogCard"

function Blog() {

  return (
    <div>
      <section className="w-full bg-[#f6f3ef] py-12">
        <div className="max-w-7xl mx-auto px-6">

          <div className="relative bg-[#5a1f0f] rounded-[40px] py-28 text-center overflow-hidden">

            {/* Decorative Small Dot */}
            <div className="absolute left-20 top-1/2 w-3 h-3 bg-white rounded-full opacity-80"></div>

            {/* Decorative Star */}
            <div className="absolute right-24 top-20 text-white text-3xl opacity-80">
              ✦
            </div>

            {/* Decorative Flower Shape (Light Border Effect) */}
            <div className="absolute bottom-10 right-16 w-32 h-32 border border-white/20 rounded-full"></div>

            {/* Title */}
            <h1 className="text-6xl font-serif text-white tracking-wide mb-6">
              OUR BLOGS
            </h1>

            {/* Breadcrumb */}
            <p className="text-white/80 text-lg">
              Home <span className="mx-2">/</span> Blog
            </p>

          </div>

        </div>
      </section>

      <BlogCard />
    </div>
  );
}

export default Blog;