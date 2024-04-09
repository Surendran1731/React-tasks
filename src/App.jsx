import React from "react";
import Card from "./Card";
function App() {
  const data = [
    {
      plan: "Free",
      price: 0,
      user: "Single User",
      isUser:true,
      storage: "5GB",
      isStorage:true,
      project: "Unlimited Public Projects",
      isProject:true,
      community: "Community Access",
      isCommunity:true,
      private: "Unlimited Private Projects",
      isPrivate:false,
      support: "Dedicated Phone Support",
      isSupport:false,
      domain: "Free Subdomain",
      isDomain:false,
      report: "Monthly Status Reports",
      isReport:false
    },
    {
      plan: "PLUS",
      price: 9,
      user: "5 User",
      isUser:true,
      storage: "50GB",
      isStorage:true,
      project: "Unlimited Public Projects",
      isProject:true,
      community: "Community Access",
      isCommunity:true,
      private: "Unlimited Private Projects",
      isPrivate:true,
      support: "Dedicated Phone Support",
      isSupport:true,
      domain: "Free Subdomain",
      isDomain:true,
      report: "Monthly Status Reports",
      isReport:false
    },
    {
      plan: "PRO",
      price: 49,
      user: "Unlimited Users",
      isUser:true,
      storage: "150GB",
      isStorage:true,
      project: "Unlimited Public Projects",
      isProject:true,
      community: "Community Access",
      isCommunity:true,
      private: "Unlimited Private Projects",
      isPrivate:true,
      support: "Dedicated Phone Support",
      isSupport:true,
      domain: "Unlimited Free Subdomain",
      isDomain:true,
      report: "Monthly Status Reports",
      isReport:true
    }
  ]
  return <>
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((e,i) => {
              return <Card details={e} key={i}/>
            })
          }
        </div>
      </div>
    </section>
  </>
}
export default App;
