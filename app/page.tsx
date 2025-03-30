import { NextPage } from "next";

import { Button } from "@/components/ui/button";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen w-screen flex-col">
        <header className="flex items-center justify-between bg-[#E8F3EE] px-[1.875rem] text-black">
          <div>Logo</div>
          <div>Hamburger</div>
        </header>
        <main>
          {/* Container 1*/}
          <div className="bg-[#E8F3EE] p-6 text-black">
            <h1>Overwhelmed with School Communication</h1>
            <p>PASS it to your AI Agent</p>
            <img
              src=""
              alt="guy walking"
            />
            <Button> Learn more</Button>
          </div>

          {/* Container 2 */}
          <div className="bg-secondary p-6 text-black">
            <h1> Manage your children’s schedules and activities in one place</h1>
            <p>Who is PASS.ai suitable for?</p>
          </div>

          {/* Container 3 */}
          <div className="gap-4 bg-[#FFF] p-6 text-black">
            <div>
              <p>icon</p>
              <h1>Busy Parents</h1>
              <p>
                {" "}
                Parents are overwhelmed by the complexity and fragmentation of
                managing their children’s school-related activities and schedules.
              </p>
            </div>

            <div>
              <p>icon</p>
              <h1>School Admins</h1>
              <p>
                School admins are overwhelmed by the workload; tracking incidents,
                managing communication and ensuring security.
              </p>
            </div>
          </div>

          {/* Container 4 */}
          <div className="gap-4 bg-[#FFF] p-6 text-black">
            <img
              src=""
              alt="guy @ standing"
            />

            <div className="gap-3">
              <h1>How does PASS.ai help me</h1>
              <ul className="list-disc pl-5">
                <li>Stay organized effortlessly</li>
                <li>Never miss important updates</li>
                <li>No more scheduling conflicts</li>
                <li>No more stress and time wasted on manual tracking</li>
                <li>Reduced stress and improved work-life balance</li>
              </ul>

              <Button>Learn more</Button>
            </div>
          </div>

          {/* Container 5 */}
          <div className="gap-4 bg-[#0e2f1e] p-6 text-white">
            <img
              src=""
              alt="guy @ standing"
            />

            <div className="gap-3">
              <h1>
                How we have helped parents and school administrations manage their
                communication
              </h1>
              <p>We reached here with our hard work and dedication</p>

              <div className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <p>icon</p>
                  <div className="flex flex-col">
                    <h2>800909</h2>
                    <p>Parents</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <p>icon</p>
                  <div className="flex flex-col">
                    <h2>800909</h2>
                    <p>Schools</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <p>icon</p>
                  <div className="flex flex-col">
                    <h2>800909</h2>
                    <p>Event Bookings</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <p>icon</p>
                  <div className="flex flex-col">
                    <h2>800909</h2>
                    <p>Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Container 6 */}
          <div className="bg-[#FFF] p-6 text-black">
            <img
              src=""
              alt="girl board"
            />
            <div className="gap-3 p-4">
              <h1>
                Connect all your child’s school apps and let our AI agent do the
                rest{" "}
              </h1>
              <ol className="list-decimal pl-5">
                <li>Donec a eros justo. Fusce egestas tristique ultrices.</li>
                <li>Nam tempor, augue nec tincidunt molestie, massa nunc varius.</li>
                <li>Donec quis erat at libero ultrices mollis.</li>
                <li>In hac habitasse platea dictumst.</li>
              </ol>
              <Button>Sign up now</Button>
            </div>
          </div>

          {/* Container 7 */}
          <div className="bg-[#FFF] p-6 text-black">
            <img
              src=""
              alt="mom with child"
            />

            <div>
              <p>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
                enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                enim. Nullam ut molestie arcu, at hendrerit elit.
              </p>
              <p> Ashley Vee</p>
              <p> Grpahic Designer</p>
            </div>
            <p>See what other parents are saying</p>
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default Home;
