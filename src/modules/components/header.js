//<@imports>
import HoneyBee from "honeybee-client";

//</>
const { UI } = HoneyBee;

export default UI.CreateComponentFromObject('head', {
    
    view(args) {
        return (
            <view>
                <header class="header" style="align-items:center;">
                    <div>
                        <h1 style="color:#0e0327;font-size: 30px;font-weight:700;margin: 0px;color:#0a2157;" class="ff-exo">HoneyBee.JS</h1>
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
            </view>
        )
    }
}).instance();
