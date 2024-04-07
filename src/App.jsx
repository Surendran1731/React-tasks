import React from "react";

function App() {
  const data = [
    {
      plan: "Free",
      price: 0,
      user: "Single User",
      storage: "5GB",
      project: "Unlimited Public Projects",
      community: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports"
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5 Users",
      storage: "50GB",
      project: "Unlimited Public Projects",
      community: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports"
    },
    {
      plan: "PRO",
      price: 49,
      user: "Unlimited Users",
      storage: "150GB",
      project: "Unlimited Public Projects",
      community: "Community Access",
      private: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      report: "Monthly Status Reports"
    }
  ]
  return <>
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            data.map((e) => {
              return <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{e.plan}</h5>
                    <h6 class="card-price text-center">${e.price}<span class="period">/month</span></h6>
                    <hr />
                    <ul class="fa-ul">
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>{e.user}</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>{e.storage}Users</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>{e.project}</li>
                      <li><span class="fa-li"><i class="fas fa-check"></i></span>{e.community}</li>
                      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{e.private}</li>
                      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{e.support}</li>
                      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{e.domain}</li>
                      <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{e.report}</li>
                    </ul>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </section>
  </>
}
export default App;
