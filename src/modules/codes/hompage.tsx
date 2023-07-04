
const Codes =
{
  declarative() {
    return (
      //function () {
      `//${'<'}@imports>
import HoneyBee from "honeybee-client"
//</>
const { UI } = HoneyBee;
const TryOrLose = UI.CreateComponentFromObject("my-game", {
  onCreation() {
    this.state = { limit: 9 }
  },
  handleClick(clickEvent, This) {
    This.state.limit--;
  },
  view(args) {
    return (
      ${'<'}view>
        <div style="text-align:center;">
          <h1><@text>You have <@text><>{ state.limit > 0 ? state.limit : "no" }</><@text> hearts left<@text></h1>
          <button onClick={ this.handleClick }><@text>Try again<@text></button>
        </div>
      </view>
    )
  }
})`
      //}
)
  },
  composable() {
    return (
//function () {
`//${'<'}@imports>
import HoneyBee from "honeybee-client"
//</>
const { UI } = HoneyBee;
// Creating from object
const Button = UI.CreateComponentFromObject("buttons",{
  onCreation(args){
    this.action = args.title;
  },
  handleClick(clickEvent, This) {
    const parentComponent = UI.getParentInstance(This);
    UI.getPublicData(parentComponent).onButtonClicked(This.action);
  },
  view(args) {
    return (
      ${'<'}view>
        <button onClick={ this.handleClick }>${'<'}>{ args.title }</></button>
      </view>
    )
  }
})
// Creating from function
const TryOrLose = UI.CreateComponent("my-game", function(args){
  this.onCreation = function(){
    this.state = { limit: 9 }
  }
  this.public = function(){
    return {
       onButtonClicked(action){
        this.state.limit = action=="Restart" ? 9 : this.state.limit-1;
      }.bind(this),
    }
  };
  return (
    ${'<'}view>
      <div style="text-align:center;">
        <h1><@text>You have <@text><>{ state.limit > 0 ? state.limit : "no" }</><@text> hearts left<@text></h1>
          <>{ Button({ title: "Try Again"}) }</>
          <>{ Button({ title: "Restart" }) }</>
      </div>
    </view>
  )
})`
      //}
    )
  }
}

export default Codes;