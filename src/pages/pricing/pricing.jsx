import "./pricing.scss";

const Pricing = ({ price , state }) => {

    return (
        <div ref={price} className='pricing container' >
            <div  className={`title ${state === 2 || state>2? "zoomIn" : ""}`}>
                <h1  >Easy and affordable web</h1>
                <h1>hosting packages</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iusto sunt nam cumque corporis, officiis odit explicabo pariatur praesentium veritatis ab esse magnam voluptatibus beatae corrupti, ratione accusamus quasi animi.</p>
            </div>

            <div className='CardPlan '>
                <div  className={`card starter ${state === 2 || state>2? "ApearFromLeft" : ""}`}>
                    <div className='headerCard'>
                        <h2>Starter Plan</h2>
                    </div>
                    <div className='bodyCard'>
                        <div>
                            <h1>$19</h1>
                            <h3>3 Month</h3>
                        </div>
                        <p>Modern & Creative Design</p>
                        <p>Premium Plugins</p>
                        <p>Clean Code</p>
                        <p>Responsive Layouts</p>
                        <p>Google Fonts</p>
                        <p>Highly Customizable</p>
                        <div className='butn'>Load More</div>
                    </div>
                </div>
                <div className='card standard'>
                    <div className='headerCard'>
                        <h2>Standard Plan</h2>
                    </div>
                    <div className='bodyCard'>
                        <div>
                            <h1>$59</h1>
                            <h3>6 Month</h3>
                        </div>
                        <p>Modern & Creative Design</p>
                        <p>Premium Plugins</p>
                        <p>Clean Code</p>
                        <p>Responsive Layouts</p>
                        <p>Google Fonts</p>
                        <p>Highly Customizable</p>
                        <div className='butn'>Load More</div>
                    </div>
                </div>
                <div  className={`card premium ${state === 2 || state>2? "ApearFromRight" : ""}`}>
                    <div className='headerCard'>
                        <h2>Premium Plan</h2>
                    </div>
                    <div className='bodyCard'>
                        <div>
                            <h1>$99</h1>
                            <h3>12 Month</h3>
                        </div>
                        <p>Modern & Creative Design</p>
                        <p>Premium Plugins</p>
                        <p>Clean Code</p>
                        <p>Responsive Layouts</p>
                        <p>Google Fonts</p>
                        <p>Highly Customizable</p>
                        <div className='butn'>Load More</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Pricing;
