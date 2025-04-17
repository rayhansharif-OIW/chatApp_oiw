
const Integrations = () => {
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
      <section className="page-hero pt-16 pb-10">
        <div className="container">
          <div className="text-center">
            <ul className="breadcrumb inline-flex h-8 items-center justify-center space-x-2 rounded-3xl bg-theme-light px-4 py-2">
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
                <span className="text-sm leading-none">/ Integrations</span>
              </li>
            </ul>
          </div>
          <div className="page-hero-content mx-auto max-w-[768px] text-center">
            <h1 className="mb-5 mt-8">
              How To Integrate <br />
              With Pinwheel
            </h1>
            <p>
              Donec sollicitudin molestie malesda. Donec sollitudin molestie{" "}
              <br />
              malesuada Mauris pellentesque nec egestas non nisi Cras
            </p>
          </div>
        </div>
      </section>
      {/* <!-- end Common hero --> */}

      {/* <!-- Integrations --> */}
      <section className="section pt-0">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-10">
              <ul className="integration-tab filter-list justify-center">
                <li>
                  <a
                    className="filter-btn filter-btn-active btn btn-sm"
                    data-group="all"
                    href="#"
                  >
                    All togethers
                  </a>
                </li>
                <li>
                  <a
                    className="filter-btn btn btn-sm"
                    data-group="social"
                    href="#"
                  >
                    Social media
                  </a>
                </li>
                <li>
                  <a
                    className="filter-btn btn btn-sm"
                    data-group="streaming"
                    href="#"
                  >
                    Streaming
                  </a>
                </li>
                <li>
                  <a
                    className="filter-btn btn btn-sm"
                    data-group="productivity"
                    href="#"
                  >
                    Productivity
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-10 integration-tab-items">
            <div
              className="mb-8 md:col-6 lg:col-4 integration-tab-item"
              data-groups='["social"]'
            >
              <div className="rounded-xl bg-white px-10 pt-11 pb-8 shadow-lg">
                <div className="integration-card-head flex items-center space-x-4">
                  <img src="/images/icons/facebook-colored.svg" alt="" />
                  <div>
                    <h4 className="h4">Facebook</h4>
                    <span className="font-medium">Social media</span>
                  </div>
                </div>
                <div className="my-5 border-y border-border py-5">
                  <p>
                    Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae
                    Donec velit neque, autor sit amet aliuam vel
                  </p>
                </div>
                <a
                  className="inline-flex items-center font-semibold text-dark"
                  href="#"
                >
                  View integration
                  <svg
                    className="ml-1.5"
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div
              className="mb-8 md:col-6 lg:col-4 integration-tab-item"
              data-groups='["social"]'
            >
              <div className="rounded-xl bg-white px-10 pt-11 pb-8 shadow-lg">
                <div className="integration-card-head flex items-center space-x-4">
                  <img src="/images/icons/twitter-colored.svg" alt="" />
                  <div>
                    <h4 className="h4">Twitter</h4>
                    <span className="font-medium">Social media</span>
                  </div>
                </div>
                <div className="my-5 border-y border-border py-5">
                  <p>
                    Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae
                    Donec velit neque, autor sit amet aliuam vel
                  </p>
                </div>
                <a
                  className="inline-flex items-center font-semibold text-dark"
                  href="#"
                >
                  View integration
                  <svg
                    className="ml-1.5"
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div
              className="mb-8 md:col-6 lg:col-4 integration-tab-item"
              data-groups='["productivity"]'
            >
              <div className="rounded-xl bg-white px-10 pt-11 pb-8 shadow-lg">
                <div className="integration-card-head flex items-center space-x-4">
                  <img src="/images/icons/google-colored.svg" alt="" />
                  <div>
                    <h4 className="h4">Google</h4>
                    <span className="font-medium">Productivity</span>
                  </div>
                </div>
                <div className="my-5 border-y border-border py-5">
                  <p>
                    Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae
                    Donec velit neque, autor sit amet aliuam vel
                  </p>
                </div>
                <a
                  className="inline-flex items-center font-semibold text-dark"
                  href="#"
                >
                  View integration
                  <svg
                    className="ml-1.5"
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div
              className="mb-8 md:col-6 lg:col-4 integration-tab-item"
              data-groups='["streaming"]'
            >
              <div className="rounded-xl bg-white px-10 pt-11 pb-8 shadow-lg">
                <div className="integration-card-head flex items-center space-x-4">
                  <img src="/images/icons/youtube-colored.svg" alt="" />
                  <div>
                    <h4 className="h4">YouTube</h4>
                    <span className="font-medium">Streaming</span>
                  </div>
                </div>
                <div className="my-5 border-y border-border py-5">
                  <p>
                    Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae
                    Donec velit neque, autor sit amet aliuam vel
                  </p>
                </div>
                <a
                  className="inline-flex items-center font-semibold text-dark"
                  href="#"
                >
                  View integration
                  <svg
                    className="ml-1.5"
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div
              className="mb-8 md:col-6 lg:col-4 integration-tab-item"
              data-groups='["productivity"]'
            >
              <div className="rounded-xl bg-white px-10 pt-11 pb-8 shadow-lg">
                <div className="integration-card-head flex items-center space-x-4">
                  <img src="/images/icons/webflow-colored.svg" alt="" />
                  <div>
                    <h4 className="h4">Webflow</h4>
                    <span className="font-medium">Productivity</span>
                  </div>
                </div>
                <div className="my-5 border-y border-border py-5">
                  <p>
                    Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae
                    Donec velit neque, autor sit amet aliuam vel
                  </p>
                </div>
                <a
                  className="inline-flex items-center font-semibold text-dark"
                  href="#"
                >
                  View integration
                  <svg
                    className="ml-1.5"
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div
              className="mb-8 md:col-6 lg:col-4 integration-tab-item"
              data-groups='["social"]'
            >
              <div className="rounded-xl bg-white px-10 pt-11 pb-8 shadow-lg">
                <div className="integration-card-head flex items-center space-x-4">
                  <img src="/images/icons/pinterest-colored.svg" alt="" />
                  <div>
                    <h4 className="h4">Pinterest</h4>
                    <span className="font-medium">Social media</span>
                  </div>
                </div>
                <div className="my-5 border-y border-border py-5">
                  <p>
                    Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae
                    Donec velit neque, autor sit amet aliuam vel
                  </p>
                </div>
                <a
                  className="inline-flex items-center font-semibold text-dark"
                  href="#"
                >
                  View integration
                  <svg
                    className="ml-1.5"
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ./end Integrations --> */}
    </>
  );
};

export default Integrations;
