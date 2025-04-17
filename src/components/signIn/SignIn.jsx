import SwiperSlider from "./swiperSlider";

function signIn() {
  return (
    <section className="">
      <div className="container max-w-full max-h-screen">
        <div className="row h-screen p-10">
          <div className="h-full dark:bg-theme-dark bg-white py-10 lg:col-6 ">
            <div className="mx-auto w-full max-w-[480px]">
              <img className="mb-8" src="images/flower.svg" alt="" />
              <h1 className="mb-4">Sing In</h1>
              <p>Donec sollicitudin molestie malesda sollitudin</p>
              <div className="signin-options mt-10">
                <a
                  className="btn btn-outline-white block w-full text-dark"
                  href="#"
                >
                  Sign In With Google
                </a>
              </div>
              <div className="relative my-8 text-center after:absolute after:left-0 after:top-1/2 after:z-[0] after:w-full after:border-b after:border-border after:content-['']">
                <span className="relative z-[1] inline-block bg-white px-2">
                  Or Sign In With Email
                </span>
              </div>

              <form action="#">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Adrdess
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="form-group mt-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Your Password"
                  />
                </div>
                <input
                  className="btn btn-primary mt-10 block w-full"
                  type="submit"
                  value="Sign In"
                />
                <p className="mt-6 text-center">
                  Can't{" "}
                  <span className="text-dark" href="#">
                    log in
                  </span>
                  ?
                  <a className="text-dark" href="signup.html">
                    Sign up
                  </a>{" "}
                  for create account
                </p>
              </form>
            </div>
          </div>

          <div className="max-h-full auth-banner bg-gradient flex flex-col items-center justify-center py-16 lg:col-6">
            <img
              className="absolute top-0 left-0 h-full w-full"
              src="images/login-banner-bg.svg"
              alt=""
            />
            <div className="w-full text-center">
              <h2 className="h3 text-white">
                Turn your All ideas into
                <br />
                your reality
              </h2>
              <SwiperSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default signIn;
