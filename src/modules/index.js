//<@imports>

import HoneyBee from "honeybee-client"; 
import FrontCover from "./home/frontpage"
import HomepageCodes from "./codes/hompage"
import { CodeOnLeftFeature, CodeOnRightFeature } from "./home/features"
import Header from "./components/header";
//</>

const { UI } = HoneyBee; 


const pagelocker = {};
// Lock page creation 🐝🐝
UI.lockPageCreation(pagelocker);

const PageInstance = UI.CreateComponent('main', function () {
    this.onMount = function () {
    }
    return (
        <view>
            <div id="page" style="position:relative;">
                <>{UI.render(Header)}</>
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
                                    <div class="shadow-down1" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                            <div style="flex:1;" class="h-center">
                                <div class="h-center" style="padding:40px 40px 0px 40px;width:100%;border-radius:30px;margin:10px;">
                                    <div class="shadow-down1" style="background:#ffffff;padding:10px;height:350px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                    <div style="height:200px;" class="blur-transition-1 mb-5"></div>
                </section>
                <>{
                    CodeOnRightFeature({
                        text: 'Write declarative code to make your applications predictable and maintainable. Focus on what to be than and leave' +
                        'the rest of the work for the bee to work on.',
                        title: 'Declarative', code: HomepageCodes.declarative()
                    })
                  }
                </>
                <>{
                    CodeOnLeftFeature({
                        text: 'Write declarative code to make your applications predictable and maintainable. Focus on what to be than and leave' +
                        'the rest of the work for the bee to work on.',
                        title: 'Composable', code: HomepageCodes.composable()
                    })
                  }
                </>
                <>{
                    CodeOnRightFeature({
                        text: 'Write declarative code to make your applications predictable and maintainable. Focus on what to be than and leave' +
                        'the rest of the work for the bee to work on.',
                        title: 'Declarative', code: HomepageCodes.declarative()
                    })
                  }
                </>
                <>{
                    CodeOnLeftFeature({
                        text: 'Write declarative code to make your applications predictable and maintainable. Focus on what to be than and leave' +
                        'the rest of the work for the bee to work on.',
                        title: 'Declarative', code: HomepageCodes.declarative()
                    })
                  }
                </>
                <>{
                    CodeOnRightFeature({
                        text: 'Write declarative code to make your applications predictable and maintainable. Focus on what to be than and leave' +
                        'the rest of the work for the bee to work on.',
                        title: 'Declarative', code: HomepageCodes.declarative()
                    })
                  }
                </>

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