import FundraisingTop from "../../components/FundraisingTop/FundraisingTop";
import FundraisingSection1 from "../../components/FundraisingSection1/FundraisingSection1";
import FundraisingSection2 from "../../components/FundraisingSection2/FundraisingSection2";
import FundraisingSection3 from "../../components/FundraisingSection3/FundraisingSection3";
import FundraisingSection4 from "../../components/FundraisingSection4/FundraisingSection4";
import FundraisingSection5 from "../../components/FundraisingSection5/FundraisingSection5";

const Fundraising = () => {
  return (<div className="w-full max-w-screen overflow-x-hidden">
   <FundraisingTop/>
   <FundraisingSection1/>
   <FundraisingSection2/>
   <FundraisingSection3/>
   <FundraisingSection4/>
   <FundraisingSection5/>
   </div>
  )
}

export default Fundraising