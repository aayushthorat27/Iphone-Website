import React from "react"

const Footer = () => {
    return (
        <div className="container bg-zinc h-screen w-screen overflow-hidden">
            {/* <footer class="p-20 mt-20 items-center justify-center">
                <h2 className="font-semibold text-[56px] mb-5">iPhone</h2>
                <div class="flex items-center gap-5 py-5 ">
                    <div class="col-6 col-md-2 mb-3">
                        <h3 className="text-[17px] ">Explore iPhone</h3>
                        <ul class="nav flex-column">
                        <li class="nav-item font-semibold text-[28px]"><a href="#" class="nav-link p-0 text-body-secondary">Explore All iPhone</a></li>
                        <li class="nav-item font-semibold text-[28px]"><a href="#" class="nav-link p-0 text-body-secondary">iPhone 15 Pro</a></li>
                        <li class="nav-item font-semibold text-[28px]"><a href="#" class="nav-link p-0 text-body-secondary">iPhone 15 Plus</a></li>
                        <li class="nav-item font-semibold text-[24px]"><a href="#" class="nav-link p-0 text-body-secondary">iPhone 15</a></li>
                        <li class="nav-item font-semibold text-[24px]"><a href="#" class="nav-link p-0 text-body-secondary">iPhone 14</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div> */}

      {/* <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div> */}
                {/* </div>

                <div class="d-flex flex-column flex-sm-row justify-center items-center py-4 my-4 border-top">
                    <p className="col-6">Copyright © 2025 Apple Inc. All rights reserved.</p>
                    <p className="col-6">Twiiter</p>
                    {/* <ul class="list-unstyled d-flex flex-column ">
                        <li class="ms-3"><a class="link-body-emphasis" href="#">Twitter<svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                        <li class="ms-3"><a class="link-body-emphasis" href="#">Insta<svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                    </ul> */}
                {/*</div>
            </footer> */}

            <div class=" text-white p-8">
                {/* <!-- Main Heading --> */}
                <h1 class="text-5xl font-bold mb-12">iPhone</h1>
                
                {/* <!-- 3-Column Layout --> */}
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* <!-- Column 1: Explore iPhone --> */}
                    <div>
                    <h2 class="text-gray-400 mb-4">Explore iPhone</h2>
                    <ul class="space-y-3">
                        <li class="text-2xl font-semibold">Explore All iPhone</li>
                        <li class="text-2xl font-semibold">iPhone 16 Pro</li>
                        <li class="text-2xl font-semibold">iPhone 16</li>
                        <li class="text-2xl font-semibold">iPhone 16e</li>
                        <li class="text-2xl font-semibold">iPhone 15</li>
                    </ul>
                    
                    <div class="mt-8 space-y-3">
                        <div>Compare iPhone</div>
                        <div>Switch from Android</div>
                    </div>
                    </div>
                    
                    {/* <!-- Column 2: Shop iPhone --> */}
                    <div>
                    <h2 class="text-gray-400 mb-4">Shop iPhone</h2>
                    <ul class="space-y-3">
                        <li>Shop iPhone</li>
                        <li>iPhone Accessories</li>
                        <li>Apple Trade In</li>
                        <li>Carrier Deals at Apple</li>
                        <li>Financing</li>
                    </ul>
                    </div>
                    
                    {/* <!-- Column 3: More from iPhone --> */}
                    <div>
                    <h2 class="text-gray-400 mb-4">More from iPhone</h2>
                    <ul class="space-y-3">
                        <li>iPhone Support</li>
                        <li>AppleCare+ for iPhone</li>
                        <li>iOS 18</li>
                        <li>Apple Intelligence</li>
                        <li>Apps by Apple</li>
                        <li>iPhone Privacy</li>
                        <li>iCloud+</li>
                        <li>Wallet, Pay, Card</li>
                        <li>Siri</li>
                    </ul>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-center items-center py-4 my-4 border-top">
                    <p className="col-6">Copyright © 2025 Apple Inc. All rights reserved.</p>
                    <p className="col-6">Twiiter</p>
                    {/* <ul class="list-unstyled d-flex flex-column ">
                        <li class="ms-3"><a class="link-body-emphasis" href="#">Twitter<svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                        <li class="ms-3"><a class="link-body-emphasis" href="#">Insta<svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                    </ul> */}
            </div>
        </div>
    )
}

export default Footer