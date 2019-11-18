import React, { Component} from 'react'
import Tab from '../components/common/tab'
import TabBar from '../components/common/tabbar'
import { Route,Switch,Redirect,withRouter } from 'react-router-dom'
import Home from './../pages/home/index';
import Recommend from './../pages/recommend/index';
import Category from './../pages/category/index';
import Mine from './../pages/mine/index';
import ShopCar from './../pages/shopcar/index';



class LayOut extends Component{
   constructor(props){
       super(props)

       this.state={
           tabFlag:false,
           title:{
                '/home':'凯哥我点了',
                '/recommend':'推荐',
                '/category':'分类',
                '/shopcar':'购物车',
                '/mine':'我的',
                '/home/hot':'柴哥火了',
                '/home/comming':'柴哥快火了'
           },
           arr:['/recommend','/shopcar','/category','/mine'],
           tab_bar_arr:['/recommend','/shopcar'],
           tabBarFlag:true,
       }
   }

   componentDidMount(){
       this.checkTabFlag()
       this.checkTabBar()
       this.checkHomeToHot()
   }
   componentWillReceiveProps(nextProps){
        this.checkTabFlag(nextProps)
        this.checkTabBar(nextProps)
        this.checkHomeToHot(nextProps)
   }

   checkTabFlag = nextProps =>{
       const{ pathname }=nextProps && nextProps.location || this.props.location
       const f = this.state.arr.some(item => item===pathname)

       if(f){
           this.setState({tabFlag:true})
       }else{
           this.setState({tabFlag:false})
       }
   }
   checkTabBar = nextProps =>{
    const{ pathname }=nextProps && nextProps.location || this.props.location
    const f = this.state.tab_bar_arr.some(item => item==pathname)

    if(f){
        this.setState({tabBarFlag:false})
    }else{
        this.setState({tabBarFlag:true})
    }
}

    checkHomeToHot = nextProps =>{
        const{ pathname }=nextProps && nextProps.location || this.props.location
        const{push,replace}=nextProps && nextProps.history || this.props.history
        if(pathname=='/home'){
            push('/home/hot')
        }
    }
   
    
    render(){
        const {tabFlag,title,tabBarFlag} = this.state;
        const {pathname} = this.props.location;
        return(
            <div className='layout'>
                <Tab tabFlag={tabFlag} title={title[pathname]} {...this.props}></Tab>
                <Switch>
                    <Redirect from='/' to='/home' exact></Redirect>
                    <Route path='/recommend' component={Recommend}></Route>
                    <Route path='/category' component={Category}></Route>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/shopcar' component={ShopCar}></Route>
                    <Route path='/mine' component={Mine}></Route>
                </Switch>
                {tabBarFlag && <TabBar></TabBar>}
            </div>
        )
    }
}


export default withRouter(LayOut)