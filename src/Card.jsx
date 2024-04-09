function Card({ details }) {
  return <>
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{details.plan}</h5>
          <h6 className="card-price text-center">${details.price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            <li className={details.isUser ? "" : "text-muted"}><span className="fa-li"><i className={details.isUser ?"fas fa-check":"fas fa-times"}></i></span>{details.user}</li>
            <li className={details.isStorage ? "" : "text-muted"}><span className="fa-li"><i className={details.isStorage ?"fas fa-check":"fas fa-times"}></i></span>{details.storage}Users</li>
            <li className={details.isProject ? "" : "text-muted"}><span className="fa-li"><i className={details.isProject ?"fas fa-check":"fas fa-times"}></i></span>{details.project}</li>
            <li className={details.isCommunity ? "" : "text-muted"}><span className="fa-li"><i className={details.isCommunity ?"fas fa-check":"fas fa-times"}></i></span>{details.community}</li>
            <li className={details.isPrivate ? "" : "text-muted"}><span className="fa-li"><i className={details.isPrivate ?"fas fa-check":"fas fa-times"}></i></span>{details.private}</li>
            <li className={details.isSupport ? "" : "text-muted"}><span className="fa-li"><i className={details.isSupport ?"fas fa-check":"fas fa-times"}></i></span>{details.support}</li>
            <li className={details.isDomain ? "" : "text-muted"}><span className="fa-li"><i className={details.isDomain ?"fas fa-check":"fas fa-times"}></i></span>{details.domain}</li>
            <li className={details.isReport ? "" : "text-muted"}><span className="fa-li"><i className={details.isReport ? "fas fa-check" :"fas fa-times"}></i></span>{details.report}</li>
          </ul>
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Card;