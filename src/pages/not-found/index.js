import "./style.css"

function NotFoundPage () {
    return (
        <section class="page_404">
            <div class="container">
                <div class="row">	
                <div class="col-sm-12 ">
                <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                    <h1 class="text-center ">404</h1>
                
                
                </div>
                
                <div class="contant_box_404">
                <h3 className="font-bold">
                Look like you're lost
                </h3>
                
                <p className="font-bold">the page you are looking for not avaible!</p>
                
                <a href="/" className="link_404 font-bold btn-neutral border border-none rounded-md">Go to Home</a>
            </div>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default NotFoundPage


// source: https://codepen.io/Navedkhan012/pen/vrWQMY