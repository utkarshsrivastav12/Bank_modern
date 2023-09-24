import styles from "./style";
import {Navbar,Hero,Stats,Business,Billing ,CardEeal ,Testimonial ,Client ,CTA ,Footer } from './components';


const App = () => (
   
    <div className="bg-primary w-full overflow-hidden">
      
      <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.bpxWidth}'}>
        <Navbar/>
        </div>
      </div>

      <div className={'bg-primary ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <HEro/>
        </div>
      </div>
      <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <Stats/>
          <Business/> 
          <Billing/> 
          <CardDeal/> 
          <Testimonial/> 
          <Client/> 
          <CTA/> 
          <Footer/> 
        </div>
      </div>





    </div>

);

export default App
