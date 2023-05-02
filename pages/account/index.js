import withAuth from "@/utils/restrict";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

const index = () => {
    const router = useRouter();
    const user = useSelector((state) => state.user.currentUser);
    if (!user) {
      router.push("/account/login");
      return null;
    }
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
      >
        <div className="container">
          <h1 className="page-title">
            My Account<span>Welcome! {user?.username}</span>
            <span>{user?.email}</span>
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex justify-content-center p-5">
          {/* End .col-12 */}
          <div className="col-md-8">
            <ul className="nav nav-tabs nav-tabs-bg" id="tabs-1" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="tab-1-tab"
                  data-toggle="tab"
                  href="#tab-1"
                  role="tab"
                  aria-controls="tab-1"
                  aria-selected="true"
                >
                  Tab 1
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tab-2-tab"
                  data-toggle="tab"
                  href="#tab-2"
                  role="tab"
                  aria-controls="tab-2"
                  aria-selected="false"
                >
                  Tab 2
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tab-3-tab"
                  data-toggle="tab"
                  href="#tab-3"
                  role="tab"
                  aria-controls="tab-3"
                  aria-selected="false"
                >
                  Tab 3
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tab-4-tab"
                  data-toggle="tab"
                  href="#tab-4"
                  role="tab"
                  aria-controls="tab-4"
                  aria-selected="false"
                >
                  Tab 4
                </a>
              </li>
            </ul>
            <div className="tab-content tab-content-border" id="tab-content-1">
              <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
                aria-labelledby="tab-1-tab"
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna nibh, viverra non, semper
                  suscipit, posuere a, pede. Donec nec justo eget felis
                  facilisis fermentum.{" "}
                </p>
              </div>
              {/* .End .tab-pane */}
              <div
                className="tab-pane fade"
                id="tab-2"
                role="tabpanel"
                aria-labelledby="tab-2-tab"
              >
                <p>
                  Nobis perspiciatis natus cum, sint dolore earum rerum tempora
                  aspernatur numquam velit tempore omnis, delectus repellat
                  facere voluptatibus nemo non fugiat consequatur repellendus!
                  Enim, commodi, veniam ipsa voluptates quis amet.
                </p>
              </div>
              {/* .End .tab-pane */}
              <div
                className="tab-pane fade"
                id="tab-3"
                role="tabpanel"
                aria-labelledby="tab-3-tab"
              >
                <p>
                  Perspiciatis quis nobis, adipisci quae aspernatur, nulla
                  suscipit eum. Dolorum, earum. Consectetur pariatur repellat
                  distinctio atque alias excepturi aspernatur nisi accusamus sed
                  molestias ipsa numquam eius, iusto, aliquid, quis aut.
                </p>
              </div>
              {/* .End .tab-pane */}
              <div
                className="tab-pane fade"
                id="tab-4"
                role="tabpanel"
                aria-labelledby="tab-4-tab"
              >
                <p>
                  Quis nobis, adipisci quae aspernatur, nulla suscipit eum.
                  Dolorum, earum. Consectetur pariatur repellat distinctio atque
                  alias excepturi aspernatur nisi accusamus sed molestias ipsa
                  numquam eius, iusto, aliquid, quis aut.
                </p>
              </div>
              {/* .End .tab-pane */}
            </div>
            {/* End .tab-content */}
          </div>
          {/* End .col-md-6 */}

          {/* End .col-md-6 */}
        </div>
      </div>
    </main>
  );
};

export default withAuth(index);
