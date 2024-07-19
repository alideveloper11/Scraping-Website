// @flow strict

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-16">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Why Us?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            Customers select our services because we have a strong history of
            successful projects and a deep understanding of Data Scraping and
            Automation. Our extensive experience and specialized skills ensure
            that we deliver accurate and efficient solutions.
            This proven expertise makes us a trusted partner in
            the industry.
          </p>
        </div>
        <div className="order-1 lg:order-2 flex flex-col lg:flex-row flex-wrap justify-center space-x-8 mt-12">
          <div className="text-center mb-5 lg:mb-0 lg:w-auto">
            <p className="text-gray-200 text-sm lg:text-lg">
              <span className="block text-3xl text-[#16f2b3]">10+</span>
              Years of Expertise
            </p>
          </div>
          <div className="text-center mb-5 lg:mb-0 lg:w-auto">
            <p className="text-gray-200 text-sm lg:text-lg">
              <span className="block text-3xl text-[#16f2b3]">15M+</span>
              Web Pages Scraped
            </p>
          </div>
          <div className="w-full text-center flex justify-center lg:w-auto lg:flex-row space-x-8  mt-12">
          <div className="text-center mb-5 lg:mb-0 lg:w-auto">
            <p className="text-gray-200 text-sm lg:text-lg">
              <span className="block text-3xl text-[#16f2b3]">50+</span>
              Automation Products
            </p>
          </div>
          <div className="text-center mb-5 lg:mb-0 lg:w-auto">
            <p className="text-gray-200 text-sm lg:text-lg">
              <span className="block text-3xl text-[#16f2b3]">20+</span>
               Enterprise Solutions
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
