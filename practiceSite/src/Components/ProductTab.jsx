import './ProductTab.css';
import ShopCard from './ShopCard.jsx';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

export default function ProductTab(){
    return(
        <>
            <h2>Blockbuster Deals on Computer Accessories | Shop Now</h2>
        <div className='ProductTab'>
        <ShopCard title={"Logitech MX Master 35"} img={image1}  description={["8,000 DPI","5 Programmable buttons"]} price={[12495,8999]}  />
        <ShopCard title={"Apple pencil (2nd Gen) "} img={image2}  description={["Intuitive touch surpface","Designed for iPad Pro"]} price={[11900,9199]}  />
        <ShopCard title={"Zebronics Zeb-Transformer"} img={image3}  description={["Intuitive touch surface","Designed for iPad Pro"]} price={[599,899]}  />
        <ShopCard title={"Portronics Toad 23 Wireless Mouse"} img={image4}  description={["Wireless Mouse 2.4GHz","Optical Orientation"]} price={[599,278]}  />
        </div>
        </>
    )
}