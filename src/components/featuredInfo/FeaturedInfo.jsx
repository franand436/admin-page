import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

export default function FeaturedInfo() {
  return (
    <div className="featuredContentContainer"><div className="featured">
    <div className="featuredItem">
      <span className="featuredTitle">Revanue</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$894,178</span> <br />
        <span className="featuredMoneyRate">
          -8 <ArrowDownward className="featureIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Sales</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$52,784</span> <br />
        <span className="featuredMoneyRate">
          -14 <ArrowDownward className="featureIcon negative"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
    <div className="featuredItem">
      <span className="featuredTitle">Cost</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">$1,789</span> <br />
        <span className="featuredMoneyRate">
          +4.8 <ArrowUpward className="featureIcon"/>
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
  </div></div>
  );
}
