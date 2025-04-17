"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AccordionComponent from "./AccordionComponent";

const Pricing = () => {
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
      <section className="page-hero py-16">
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
                <span className="text-sm leading-none">/ Pricing</span>
              </li>
            </ul>
          </div>
          <div className="page-hero-content mx-auto max-w-[768px] text-center">
            <h1 className="mb-5 mt-8">Pinwheel Pricing</h1>
            <p>
              Donec sollicitudin molestie malesda. Donec sollitudin molestie
              malesuada. Mauris <br />
              pellentesque nec, egestas non nisi. Cras ultricies ligula sed
              magna
            </p>
          </div>
        </div>
      </section>
      {/* <!-- end Common hero --> */}

      {/* <!-- pricing --> */}
      <section className="section mt-12 pt-0">
        <div className="container">
          <div className="row lg:px-10">
            <div className="mt-8 md:col-6 lg:col-4 lg:mt-0">
              <div className="rounded-xl bg-white dark:g7 dark:border-s3 px-8 py-10 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="h4">Basic</h4>
                    <p className="mt-3 text-2xl text-dark dark:text-p5">
                      $ 29.00 USD
                    </p>
                  </div>
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-theme-light">
                    <img src="/images/icons/price-card-icon-1.svg" alt="" />
                  </span>
                </div>
                <p className="mt-6">
                  Lorem ipsum dolor sit amet, secteturi adipiscing elit at sem
                  ipsum.
                </p>
                <div className="my-6 border-y border-border py-6">
                  <h4 className="h6">What's included?</h4>
                  <ul className="mt-6">
                    <li className="mb-3 flex items-center text-sm">
                      <svg
                        className="mr-2.5"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Everything in Basic plan Into This
                    </li>
                    <li className="mb-3 flex items-center text-sm">
                      <svg
                        className="mr-2.5"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Tellus eget condi To the mentum
                    </li>
                    <li className="mb-3 flex items-center text-sm">
                      <svg
                        className="mr-2.5"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Up to $100.000 monthly sales
                    </li>
                    <li className="mb-3 flex items-center text-sm">
                      <svg
                        className="mr-2.5"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Unlimited integrations For This Item
                    </li>
                    <li className="flex items-center text-sm">
                      <svg
                        className="mr-2.5"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Up to 1.000.000 monthly visits
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <a
                    className="btn btn-outline-white block h-[48px] w-full rounded-[50px] leading-[30px]"
                    href="#"
                  >
                    Buy now
                  </a>
                  <a
                    className="mt-6 inline-flex items-center text-dark"
                    href="#"
                  >
                    Start Free trial
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
            <div className="mt-8 md:col-6 lg:col-4 lg:mt-0">
              <div className="rounded-xl border border-primary  bg-white dark:g7 dark:border-s3  px-8 py-10 shadow-lg lg:-mt-16">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="h4">Enterprise</h4>
                    <p className="mt-3 text-2xl text-dark dark:text-p5">
                      $ 59.00 USD
                    </p>
                  </div>
                  <span className="bg-gradient inline-flex h-16 w-16 items-center justify-center rounded-full">
                    <img src="/images/icons/price-card-icon-2.svg" alt="" />
                  </span>
                </div>
                <p className="mt-6">
                  Lorem ipsum dolor sit amet, secteturi adipiscing elit at sem
                  ipsum.
                </p>
                <div className="my-6 border-y border-border py-6">
                  <h4 className="h6">What's included?</h4>
                  <ul className="mt-6">
                    <li className="mb-3 flex items-center text-sm">
                      <svg
                        className="mr-2.5 text-primary"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Everything in Basic plan Into This
                    </li>
                    <li className="mb-3 flex items-center text-sm">
                      <svg
                        className="mr-2.5 text-primary"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Tellus eget condi To the mentum
                    </li>
                    <li className="mb-3 flex items-center text-sm">
                      <svg
                        className="mr-2.5 text-primary"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Up to $100.000 monthly sales
                    </li>
                    <li className="mb-3 flex items-center text-sm">
                      <svg
                        className="mr-2.5 text-primary"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Unlimited integrations For This Item
                    </li>
                    <li className="flex items-center text-sm">
                      <svg
                        className="mr-2.5 text-primary"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Up to 1.000.000 monthly visits
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <a
                    className="btn btn-primary h-[48px] w-full rounded-[50px] leading-[30px]"
                    href="#"
                  >
                    Buy now
                  </a>
                  <a
                    className="mt-6 inline-flex items-center text-dark"
                    href="#"
                  >
                    Start Free trial
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
            <div className="mt-8 md:col-6 lg:col-4 lg:mt-0">
              <div className="rounded-xl bg-white  dark:g7 dark:border-s3 px-8 py-10 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="h4">Basic</h4>
                    <p className="mt-3 text-2xl text-dark dark:text-p5">
                      $ 29.00 USD
                    </p>
                  </div>
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-theme-light">
                    <img src="/images/icons/price-card-icon-3.svg" alt="" />
                  </span>
                </div>
                <p className="mt-6">
                  Lorem ipsum dolor sit amet, secteturi adipiscing elit at sem
                  ipsum.
                </p>
                <div className="my-6 border-y border-border py-6">
                  <h4 className="h6">What's included?</h4>
                  <ul className="mt-6">
                    <li className="mb-3 flex items-center text-sm">
                      <svg
                        className="mr-2.5"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Everything in Basic plan Into This
                    </li>
                    <li className="mb-3 flex items-center text-sm">
                      <svg
                        className="mr-2.5"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Tellus eget condi To the mentum
                    </li>
                    <li className="mb-3 flex items-center text-sm">
                      <svg
                        className="mr-2.5"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Up to $100.000 monthly sales
                    </li>
                    <li className="mb-3 flex items-center text-sm">
                      <svg
                        className="mr-2.5"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Unlimited integrations For This Item
                    </li>
                    <li className="flex items-center text-sm">
                      <svg
                        className="mr-2.5"
                        width="16"
                        height="13"
                        viewBox="0 0 16 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5.42857L6.36364 10L14 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          stroke-linecap="round"
                        />
                      </svg>
                      Up to 1.000.000 monthly visits
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <a
                    className="btn btn-outline-white block h-[48px] w-full rounded-[50px] leading-[30px]"
                    href="#"
                  >
                    Buy now
                  </a>
                  <a
                    className="mt-6 inline-flex items-center text-dark"
                    href="#"
                  >
                    Start Free trial
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
        </div>
      </section>
      {/* <!-- ./end pricing --> */}

      {/* <!-- Faq --> */}
      <section className="faqs section">
        <div className="container max-w-[1230px]">
          <div className="row">
            <div className="text-center lg:col-4 lg:text-start">
              <h2>Frequently Asked Questions</h2>
              <p className="mt-6 lg:max-w-[404px]">
                Vestibulum ante ipsum primis in faucibus orci luctus ultrices
                posuere cubilia Curae Donec
              </p>
            </div>
            <div className="mt-8 lg:col-8 lg:mt-0">
              <div className="rounded-xl bg-white dark:bg-transparent px-5 py-5 shadow-lg lg:px-10 lg:py-8">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-1" // This expands item-1 by default
                  className="dark:bg-transparent"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="relative pl-6 text-lg font-semibold text-dark">
                      <span>Is it accessible?</span>
                    </AccordionTrigger>
                    <AccordionContent className="pl-6">
                      <p>
                        The Service is provided for free during this pilot
                        project, and is provided "as is" with no commitment to
                        any level of service or availability.
                      </p>
                      <p>
                        If you enter into this agreement on behalf of a company,
                        you hereby agree that the company is responsible under
                        this Agreement for all actions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="relative pl-6 text-lg font-semibold text-dark">
                      How can I use Avocode with cloud documents?
                    </AccordionTrigger>
                    <AccordionContent className="pl-6">
                      <p>
                        The Service is provided for free during this pilot
                        project, and is provided "as is" with no commitment to
                        any level of service or availability.
                      </p>
                      <p>
                        If you enter into this agreement on behalf of a company,
                        you hereby agree that the company is responsible under
                        this Agreement for all actions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className="border-b border-border"
                  >
                    <AccordionTrigger className="relative pl-6 text-lg font-semibold text-dark">
                      If I cancel, can I archive my designs to keep them safe
                      and come back?
                    </AccordionTrigger>
                    <AccordionContent className="pl-6">
                      <p>
                        The Service is provided for free during this pilot
                        project, and is provided "as is" with no commitment to
                        any level of service or availability.
                      </p>
                      <p>
                        If you enter into this agreement on behalf of a company,
                        you hereby agree that the company is responsible under
                        this Agreement for all actions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="relative pl-6 text-lg font-semibold text-dark">
                      How can I adjust user permissions & admin privileges?
                    </AccordionTrigger>
                    <AccordionContent className="pl-6">
                      <p>
                        The Service is provided for free during this pilot
                        project, and is provided "as is" with no commitment to
                        any level of service or availability.
                      </p>
                      <p>
                        If you enter into this agreement on behalf of a company,
                        you hereby agree that the company is responsible under
                        this Agreement for all actions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Tabs defaultValue="account" className="flex w-full">
        {/* TabsList will be displayed as a column */}
        <TabsList className="flex flex-col gap-2 w-1/4">
          <TabsTrigger
            value="account"
            className="text-left py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
          
            Account
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="text-left py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Password
          </TabsTrigger>
        </TabsList>

        {/* TabsContent will take up the remaining space */}
        <div className="flex-1 pl-6">
          <TabsContent
            value="account"
            className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700"
          >
            Make changes to your account here.
          </TabsContent>
          <TabsContent
            value="password"
            className="p-4 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700"
          >
            Change your password here.
          </TabsContent>
        </div>
      </Tabs>

      {/* updated. */}
      <AccordionComponent/>
       

       
      
    </>
  );
};

export default Pricing;
