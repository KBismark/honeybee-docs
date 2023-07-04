//<@imports>

import HoneyBee from "honeybee-client";
//</>

const { UI } = HoneyBee;

const FrontCover = UI.CreateComponentFromClass('cover', class FrontCover extends HoneyBee.ComponentObject<any>{
    
    view: (this: this, args: any) => JSX.Element = function (args) {
        return (
            <view>
                <div style="position:relative;">
                   
                    
                    <div class="area" >
                        <div class="context" id="frontage">
                            <h3 class="gradient-text" style="text-align:center;font-weight:bold;padding:0px 20px;margin-bottom:25px;text-transform:capitaliz;">The next reactive library for the web</h3>
                            <p class="fs-4 bd" style="padding:0px 20px;margin:6px;text-align:center;">Create composable and declarative user interfaces.</p>
                            
                        </div>
                        <div style="" class="wrapper">
                            <div style="flex:1;" class="h-center">
                                <div class="blur-back h-center" style="padding:40px;width:100%;border-radius:30px;margin:10px;">
                                    <div style="background:#ffffff;padding:10px;height:300px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                            <div style="flex:1;" class="h-center">
                                <div class="blur-back h-center" style="padding:40px;width:100%;border-radius:30px;margin:10px;">
                                    <div style="background:#ffffff;padding:10px;height:300px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                            <div style="flex:1;" class="h-center">
                                <div class="blur-back h-center" style="padding:40px;width:100%;border-radius:30px;margin:10px;">
                                    <div style="background:#ffffff;padding:10px;height:300px;width:inherit;border-radius:25px;">
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <ul class="circles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </view>
        )
    }
})

export default FrontCover;
