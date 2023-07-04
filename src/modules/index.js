//<@imports>

import HoneyBee from "honeybee-client"; 
import FrontCover from "./home/frontpage"
//</>

const { UI } = HoneyBee; 
const pagelocker = {};
// Lock page creation 🐝🐝
UI.lockPageCreation(pagelocker);

const PageInstance = UI.CreateComponent('main', function () {
    return (
        <view>
            <div id="page" style="text-align:center;position:relative;">
                <header class="header" style="align-items:center;">
                    <div>
                        <h1 style="color:#0e0327;font-size: 30px;font-weight:700;margin: 0px;" class="ff-exo"><>{`{HoneyBee.JS}`}</></h1>
                    </div>
                    <nav id="top-nav-1" style="align-self: center;">
                        <a href="" class="btn white-btn" style="text-decoration: none;" >Get Started</a>
                        <a href="" class="link-on-white link bd">Documentation</a>
                        <a href="" class="link-on-white link bd">Learn by Doing</a>
                        <a href="" class="link-on-white link bd">Useful Blogs</a>
                        <a href="" class="link-on-white link bd">Our Community</a>
                        <span title="Switch between light and dark modes" tabindex="0" role="button" class="ti ti-moon white-border-on-hover" style="background-color: #000;border-radius: 50%;padding: 4px 5.5px;cursor: pointer;"></span>
                        <a target="_blank" referrerpolicy="no-referrer" title="See source code on github" href="" class="ti ti-brand-github white-color white-border-on-hover" style="text-decoration: none;background-color: #000;border-radius: 50%;padding: 4px 5.5px;cursor: pointer;"></a>
                    </nav>
                    <nav title="Navigation alternative for small screens" id="top-nav-2" style="align-self: center;">
                        <a href="" class="btn white-btn" style="text-decoration: none;" >Get Started </a>
                        <a href="" class="link link-on-white link bd">Docs</a>
                        <a href="" class="link link-on-white link bd">Learn</a>
                        <a href="" class="link link-on-white link bd">Blogs</a>
                        <a href="" class="link link-on-white link bd">Community</a>
                        <span title="Switch between light and dark modes" tabindex="0" role="button" class="ti ti-moon white-border-on-hover" style="background-color: #000;border-radius: 50%;padding: 4px 5.5px;cursor: pointer;"></span>
                        <a target="_blank" referrerpolicy="no-referrer" title="See source code on github" href="" class="ti ti-brand-github white-color white-border-on-hover" style="text-decoration: none;background-color: #000;border-radius: 50%;padding: 4px 5.5px;cursor: pointer;"></a>
                    </nav>
                </header>
                <>{FrontCover()}</>
                <section>
                    <div style="" class="trans-back">
                        <h2 class="fs-5" style="text-align:center;margin-top:0px;padding:60px 10px 10px 10px;;">Get busy. Produce some honey</h2>
                        <div class="fs-2 ff-ex wrapper mt-4" style="padding:0px 10px;font-weight:500;">
                            <div style="max-width:760px;">
                                What does a honeybee🐝 produce? Honey!. Spice up your designs, speed up your projects and build your next interactive 
                                pages with flexibility and reactivity. HoneyBeeJS brings to you the mix of reactivity, flexibility and many posibilities. 
                            </div>
                        </div>
                        <div style="" class="wrapper mt-4">
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    <div style="height:200px;" class="blur-transition-1 mb-5"></div>
                </section>
                <section>
                    <div style="" class="blur-back">
                        <h2 class="fs-5" style="text-align:center;margin-top:0px;padding:60px 10px 10px 10px;;">Get busy. Produce some honey</h2>
                        <div class="fs-2 ff-ex wrapper mt-4" style="padding:0px 10px;font-weight:500;">
                            <div style="max-width:760px;">
                                What does a honeybee🐝 produce? Honey!. Spice up your designs, speed up your projects and build your next interactive 
                                pages with flexibility and reactivity. HoneyBeeJS brings to you the mix of reactivity, flexibility and many posibilities. 
                            </div>
                        </div>
                        <div style="" class="wrapper mt-4">
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    <div style="height:200px;" class="blur-transition-2 mb-5"></div>
                </section>
                <section>
                    <div style="" class="trans-back">
                        <h2 class="fs-5" style="text-align:center;margin-top:0px;padding:60px 10px 10px 10px;;">Get busy. Produce some honey</h2>
                        <div class="fs-2 ff-ex wrapper mt-4" style="padding:0px 10px;font-weight:500;">
                            <div style="max-width:760px;">
                                What does a honeybee🐝 produce? Honey!. Spice up your designs, speed up your projects and build your next interactive 
                                pages with flexibility and reactivity. HoneyBeeJS brings to you the mix of reactivity, flexibility and many posibilities. 
                            </div>
                        </div>
                        <div style="" class="wrapper mt-4">
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    <div style="height:200px;" class="blur-transition-1 mb-5"></div>
                </section>
                <section>
                    <div style="" class="blur-back">
                        <h2 class="fs-5" style="text-align:center;margin-top:0px;padding:60px 10px 10px 10px;;">Get busy. Produce some honey</h2>
                        <div class="fs-2 ff-ex wrapper mt-4" style="padding:0px 10px;font-weight:500;">
                            <div style="max-width:760px;">
                                What does a honeybee🐝 produce? Honey!. Spice up your designs, speed up your projects and build your next interactive 
                                pages with flexibility and reactivity. HoneyBeeJS brings to you the mix of reactivity, flexibility and many posibilities. 
                            </div>
                        </div>
                        <div style="" class="wrapper mt-4">
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    <div style="height:200px;" class="blur-transition-2 mb-5"></div>
                </section>
                <section>
                    <div style="" class="trans-back">
                        <h2 class="fs-5" style="text-align:center;margin-top:0px;padding:60px 10px 10px 10px;;">Get busy. Produce some honey</h2>
                        <div class="fs-2 ff-ex wrapper mt-4" style="padding:0px 10px;font-weight:500;">
                            <div style="max-width:760px;">
                                What does a honeybee🐝 produce? Honey!. Spice up your designs, speed up your projects and build your next interactive 
                                pages with flexibility and reactivity. HoneyBeeJS brings to you the mix of reactivity, flexibility and many posibilities. 
                            </div>
                        </div>
                        <div style="" class="wrapper mt-4">
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    <div style="height:200px;" class="blur-transition-1 mb-5"></div>
                </section>
                <section>
                    <div style="" class="blur-back">
                        <h2 class="fs-5" style="text-align:center;margin-top:0px;padding:60px 10px 10px 10px;;">Get busy. Produce some honey</h2>
                        <div class="fs-2 ff-ex wrapper mt-4" style="padding:0px 10px;font-weight:500;">
                            <div style="max-width:760px;">
                                What does a honeybee🐝 produce? Honey!. Spice up your designs, speed up your projects and build your next interactive 
                                pages with flexibility and reactivity. HoneyBeeJS brings to you the mix of reactivity, flexibility and many posibilities. 
                            </div>
                        </div>
                        <div style="" class="wrapper mt-4">
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    <div style="height:200px;" class="blur-transition-2 mb-5"></div>
                </section>

                <section>
                    <div style="" class="">
                        <h2 class="fs-5" style="text-align:center;margin-top:0px;padding:60px 10px 10px 10px;;">What you can do with HoneyBeeJS</h2>
                        <div class="fs-2 ff-ex wrapper mt-4" style="padding:0px 10px;font-weight:500;">
                            <div style="max-width:760px;">
                                You can possibly create everything using HoneyBeeJS. There is no limit on your imaginations. HoneyBeeJS can 
                                help you bring them into reality. Follow our "learn by doing" tutorials to grasp few things about HoneyBeeJS. 
                            </div>
                        </div>
                        <div style="" class="wrapper mt-4">
                            <div class="v-center m-3 blur-back-hover" style="width:280px;padding:20px;border-radius:20px;height:200px;">
                                <h3>To do list</h3>
                                <p class="fs-1">Learn how to create a beautiful todo list using HoneyBeeJS</p>
                            </div>
                            <div class="v-center m-3 blur-back-hover" style="width:280px;padding:20px;border-radius:20px;height:200px;">
                                <h3>To do list</h3>
                                <p class="fs-1">Learn how to create a beautiful todo list using HoneyBeeJS</p>
                            </div>
                            <div class="v-center m-3 blur-back-hover" style="width:280px;padding:20px;border-radius:20px;height:200px;">
                                <h3>To do list</h3>
                                <p class="fs-1">Learn how to create a beautiful todo list using HoneyBeeJS</p>
                            </div>
                            <div class="v-center m-3 blur-back-hover" style="width:280px;padding:20px;border-radius:20px;height:200px;">
                                <h3>To do list</h3>
                                <p class="fs-1">Learn how to create a beautiful todo list using HoneyBeeJS</p>
                            </div>
                            
                        </div>
                        <button href="" class="btn white-btn m-2 mt-5 mb-5 fs-2" style="text-decoration: none;padding:15px 60px;border-radius:35px;" >Learn by doing</button>
                    </div>
                    <div style="height:200px;" class="blur-transition-2 mb-5"></div>
                </section>
            </div>
        </view>
    )
}).instance();


export default PageInstance;

// Unlock app creation and create page
UI.unlockPageCreation(pagelocker)
UI.CreatePage(typeof document != 'undefined' ? location.pathname : '', PageInstance);