//<@imports>
import HoneyBee from "honeybee-client"
//</>

 // TODO: This must be a in the global scope
 const codeparser = new (window as any).Parser();
const { UI } = HoneyBee;

type FeatureArgs = { title: string, code: string, text: string };

// This has the code on the left side on bigger screens
const CodeOnLeftFeature = UI.CreateComponentFromObject<FeatureArgs,any>('feature-l', {
    onMount() {
        // Get code container after mount
        const container = UI.getNode(UI.getInstance<any>(this as any), 'code_container');
        // Parse and highlight code
        codeparser.theme(4,true);
        codeparser.toEditor(container, this.code, "js"); // Highlight as JS
        // We do not use these data anymore after mounting
        // Save some space
        this.title = this.text = this.code = '';
    },
    onCreation(args) {
        this.title = args.title;
        this.text = args.text;
        this.code = args.code;
        // No state for this class
        this.state = {};
    },
    view() {
       // Feature UI
        return (
            <view>
                <section class="wrapper m-2" style="margin-bottom:10rem;flex-flow:wrap-reverse;">
                    <div key="code_container" id="declarative" class="shadow-down-2 m-2" style="overflow:auto;background:#ffffff;padding:10px;height:450px;width:inherit;border-radius:25px;">
                            
                    </div>
                    <div class="mb-4 v-center" style="width:600px;">
                        <div class="v-center">
                            <h2 class="fs-5" style="margin-top:0px;padding:60px 10px 10px 10px;align-self:center;">
                                <>{UI.CreateDynamicNode(function (state) { return this.title }, [])}</>
                            </h2>
                            <div class="mr-4 mb-4" style="align-self:center;width:76px;border-bottom:2px solid #000000;"></div>
                        </div>
                        <p class="fs-2" style="text-align:center;">
                            <>{UI.CreateDynamicNode(function (state) { return this.text }, [])}</>
                        </p>
                    </div>
                    
                </section>
            </view>
        )
    }
})

// This has the code on the right side on bigger screens
const CodeOnRightFeature = UI.CreateComponentFromObject<FeatureArgs,any>('feature-r', {
    onMount() {
        // Get code container after mount
        const container = UI.getNode(UI.getInstance<any>(this as any), 'code_container');
        // Parse and highlight code
        codeparser.theme(4,true);
        codeparser.toEditor(container, this.code, "js"); // Highlight as JS
        // We do not use these data anymore after mounting
        // Save some space
        this.title = this.text = this.code = '';
    },
    onCreation(args) {
        this.title = args.title;
        this.text = args.text;
        this.code = args.code;
         // No state for this class
        this.state = {};
    },
    view() {
       // Feature UI
        return (
            <view>
                <section class="wrapper m-2" style="margin-bottom:10rem;">
                    <div class="mb-4 v-center" style="width:600px;">
                        <div class="v-center">
                            <h2 class="fs-5" style="margin-top:0px;padding:60px 10px 10px 10px;align-self:center;">
                                <>{UI.CreateDynamicNode(function (state) { return this.title }, [])}</>
                            </h2>
                            <div class="mr-4 mb-4" style="align-self:center;width:76px;border-bottom:2px solid #000000;"></div>
                        </div>
                        <p class="fs-2" style="text-align:center;">
                            <>{UI.CreateDynamicNode(function (state) { return this.text }, [])}</>
                        </p>
                    </div>
                    <div key="code_container" id="declarative" class="shadow-down-2 m-2" style="overflow:auto;background:#ffffff;padding:10px;height:450px;width:inherit;border-radius:25px;">
                            
                    </div>
                </section>
            </view>
        )
    }
})

export { CodeOnLeftFeature, CodeOnRightFeature };