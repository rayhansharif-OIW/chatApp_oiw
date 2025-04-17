
const HowItWorks = () => {
  return (
    <>
        {/* <!-- floating assets --> */}
<img
  className="floating-bubble-1 absolute right-0 top-0 -z-[1]"
  src="/images/floating-bubble-1.svg"
  alt=""
/>
<img
  className="floating-bubble-2 absolute left-0 top-[387px] -z-[1]"
  src="/images/floating-bubble-2.svg"
  alt=""
/>
<img
  className="floating-bubble-3 absolute right-0 top-[605px] -z-[1]"
  src="/images/floating-bubble-3.svg"
  alt=""
/>
{/* <!-- ./end floating assets --> */}

{/* <!-- Common hero --> */}
<section className="page-hero pb-14 pt-16">
  <div className="container">
    <div className="text-center">
      <ul
        className="breadcrumb inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-theme-light px-4 py-2"
      >
        <li className="leading-none text-dark">
          <a className="inline-flex items-center text-primary" href="#">
            <svg
              className="mr-1.5"
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1769 15.0588H10.3533V9.41178H5.64744V15.0588H2.82391V6.58825H1.88274V16H14.118V6.58825H13.1769V15.0588ZM6.58862 15.0588V10.353H9.41215V15.0588H6.58862ZM15.8084 6.09225L15.2512 6.85178L8.00038 1.52472L0.749559 6.8499L0.192383 6.09131L8.00038 0.357666L15.8084 6.09225Z"
                fill="black"
              />
            </svg>
            <span className="text-sm leading-none">Home</span>
          </a>
        </li>
        <li className="leading-none text-dark">
          <span className="text-sm leading-none">/ How It Works</span>
        </li>
      </ul>
    </div>
    <div className="page-hero-content mx-auto max-w-[883px] text-center">
      <h1 className="mb-5 mt-8">
        our structured approach helps you navigate uncertainties
      </h1>
      <p>
        Donec sollicitudin molestie malesda. Donec sollitudin molestie
        malesuada. Mauris pellentesque <br />
        nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta.
        Lorem
      </p>
    </div>

    <div className="row mt-14">
      <div className="mt-10 text-center sm:col-6 md:col-4 md:mb-0">
        <div
          className="relative mx-auto mb-8 flex h-[184px] w-[184px] items-center justify-center rounded-xl bg-white p-4 shadow-lg after:absolute after:-right-4 after:-z-[1] after:hidden after:w-full after:translate-x-full after:border-b-2 after:border-dashed after:border-primary/50 after:content-[''] md:after:block"
        >
          <img src="/images/how-it-work/results.png" alt="" />
        </div>
        <h2 className="h5">measurable results</h2>
        <p className="mt-4">
          Encourage frequent & timely recognition integrating with communication
          tools
        </p>
      </div>
      <div className="mt-10 text-center sm:col-6 md:col-4 md:mb-0">
        <div
          className="relative mx-auto mb-8 flex h-[184px] w-[184px] items-center justify-center rounded-xl bg-white p-4 shadow-lg after:absolute after:-right-4 after:-z-[1] after:hidden after:w-full after:translate-x-full after:border-b-2 after:border-dashed after:border-primary/50 after:content-[''] md:after:block"
        >
          <img src="/images/how-it-work/market-professionals.png" alt="" />
        </div>
        <h2 className="h5">market professionals</h2>
        <p className="mt-4">
          Encourage frequent & timely recognition integrating with communication
          tools
        </p>
      </div>
      <div className="mt-10 text-center sm:col-6 md:col-4 md:mb-0">
        <div
          className="mx-auto mb-8 flex h-[184px] w-[184px] items-center justify-center rounded-xl bg-white p-4 shadow-lg"
        >
          <img src="/images/how-it-work/awards.png" alt="" />
        </div>
        <h2 className="h5">international award</h2>
        <p className="mt-4">
          Encourage frequent & timely recognition integrating with communication
          tools
        </p>
      </div>
    </div>
  </div>
</section>
{/* <!-- end Common hero --> */}

<section>
  <div className="container">
    <div className="row gx-5 mt-12 items-center">
      <div className="lg:col-7 lg:order-2">
        <div className="relative">
          <img
            className="w-full object-contain"
            src="/images/how-it-work/image-1.png"
          />
        </div>
      </div>
      <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
        <div className="text-container">
          <h2 className="lg:text-4xl">
            We'll do the legwork so you don't have to.
          </h2>
          <ul className="mt-6 text-dark lg:-ml-4">
            <li className="mb-2 flex items-center rounded px-4">
              <img
                className="mr-3"
                src="/images/icons/checkmark-circle.svg"
                alt=""
              />
              Supporting more than 119 country world
            </li>
            <li className="mb-2 flex items-center rounded px-4">
              <img
                className="mr-3"
                src="/images/icons/checkmark-circle.svg"
                alt=""
              />
              Open transaction with more than currencies
            </li>
            <li className="flex items-center rounded px-4">
              <img
                className="mr-3"
                src="/images/icons/checkmark-circle.svg"
                alt=""
              />
              Customer Service with 79 languages
            </li>
          </ul>
          <p className="mt-6 font-medium text-dark">
            Output: Detailed and Actionable Designs
          </p>
        </div>
      </div>
    </div>
    <div className="row gx-5 mt-16 items-center">
      <div className="lg:col-7">
        <div className="relative">
          <img
            className="w-full object-contain"
            src="/images/how-it-work/image-2.png"
          />
        </div>
      </div>
      <div className="mt-6 lg:col-5 lg:mt-0">
        <div className="text-container">
          <h2 className="lg:text-4xl">Check out their profiles, reviews On.</h2>
          <ul className="mt-6 text-dark lg:-ml-4">
            <li className="mb-2 flex items-center rounded px-4">
              <img
                className="mr-3"
                src="/images/icons/checkmark-circle.svg"
                alt=""
              />
              Supporting more than 119 country world
            </li>
            <li className="mb-2 flex items-center rounded px-4">
              <img
                className="mr-3"
                src="/images/icons/checkmark-circle.svg"
                alt=""
              />
              Open transaction with more than currencies
            </li>
            <li className="mb-2 flex items-center rounded px-4">
              <img
                className="mr-3"
                src="/images/icons/checkmark-circle.svg"
                alt=""
              />
              design your own seamless for a fiber case.
            </li>
            <li className="flex items-center rounded px-4">
              <img
                className="mr-3"
                src="/images/icons/checkmark-circle.svg"
                alt=""
              />
              Customer Service with 79 languages
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="row gx-5 mt-16 items-center">
      <div className="lg:col-7 lg:order-2">
        <div className="relative">
          <img
            className="w-full object-contain"
            src="/images/how-it-work/image-3.png"
          />
        </div>
      </div>
      <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
        <div className="text-container">
          <h2 className="lg:text-4xl">
            We'll do the legwork so you don't have to.
          </h2>
          <ul className="mt-6 text-dark lg:-ml-4">
            <li className="mb-2 flex items-center rounded px-4">
              <img
                className="mr-3"
                src="/images/icons/checkmark-circle.svg"
                alt=""
              />
              Supporting more than 119 country world
            </li>
            <li className="mb-2 flex items-center rounded px-4">
              <img
                className="mr-3"
                src="/images/icons/checkmark-circle.svg"
                alt=""
              />
              Open transaction with more than currencies
            </li>
            <li className="flex items-center rounded px-4">
              <img
                className="mr-3"
                src="/images/icons/checkmark-circle.svg"
                alt=""
              />
              Customer Service with 79 languages
            </li>
          </ul>
          <p className="mt-6 font-medium text-dark">
            Output: Detailed and Actionable Designs
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <!-- Call To action --> */}
<section className="px-5 py-20 xl:py-[120px]">
  <div className="container">
    <div
      className="bg-gradient row justify-center rounded-b-[80px] rounded-t-[20px] px-[30px] pb-[75px] pt-16"
    >
      <div className="lg:col-11">
        <div className="row">
          <div className="lg:col-7">
            <h2 className="h1 text-white">Helping teams in the world with focus</h2>
            <a className="btn btn-white mt-8" href="#">Download The Theme</a>
          </div>
          <div className="mt-8 lg:col-5 lg:mt-0">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              egestas Werat viverra id et aliquet. vulputate egestas
              sollicitudin .
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default HowItWorks