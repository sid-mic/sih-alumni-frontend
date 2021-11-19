import React , { Component } from 'react';
import EditProfile from '../components/EditProfile';
import News from '../components/News';
import SidebarMobile from '../components/SidebarMobile';
import { WelcomeHero } from "../components/WelcomeHero";


class Dashboard extends Component {
    
    constructor(props) {
        super(props);
        this.setModuleType = this.setModuleType.bind(this);

    }
    

   state = {
       moduletypes: [
           {
               id: 1,
               type: 'Home',
               
           },
           {
               id: 2,
               type: 'Project'
           },
           {
               id: 3,
               type: 'Resources'
           },
           {
               id: 4,
               type: 'Profile'

           }
       ],
       selectedmoduletype:0,
   }
   
   setModuleType(selectedtype) {
       
        this.setState({selectedmoduletype : selectedtype})
   }
   render() {
       if(this.state.selectedmoduletype === 1){
        return(
            <>
            <SidebarMobile moduletypes={ this.state.moduletypes } selectedtype={this.setModuleType}/>
             <div className="flex flex-col min-h-screen">
            <div className="flex  flex-wrap">
        <div className="container min-h-screen bg-gray-100 pt-0 md:ml-60">
          <WelcomeHero h1="Welcome, " h2="Bhuvanesh." />
          <News />
        </div>
      </div>
    </div>
              
            </>
           );
        }
        if(this.state.selectedmoduletype === 2){
            return(
                <SidebarMobile moduletypes = { this.state.moduletypes } selectedtype={ this.setModuleType } />
            );
        }
        if(this.state.selectedmoduletype === 3){
            return(
                <>
                 <SidebarMobile moduletypes = { this.state.moduletypes } selectedtype={ this.setModuleType } />
                <div className="flex flex-col min-h-screen">
                     <div className="flex  flex-wrap">
                         <div className="container min-h-screen bg-gray-100 pt-0 md:ml-60">
                             <WelcomeHero h1="RESOURCES" />
                          </div>
                          </div>
                         </div>
            </>
            );
        }
        if(this.state.selectedmoduletype === 4){
            return(
                <>
                <SidebarMobile moduletypes = { this.state.moduletypes } selectedtype={ this.setModuleType } />
                <div className="flex flex-col min-h-screen">
                     <div className="flex  flex-wrap">
                         <div className="container min-h-screen bg-gray-100 pt-0 md:ml-60">
                              <WelcomeHero h1="PROFILE" />
                              <EditProfile />
                              </div>
                              </div>
                              </div>
                </>
                );
            }
        
       else{
           return(
            <SidebarMobile moduletypes={ this.state.moduletypes } selectedtype={this.setModuleType}/>
           );
       }
       
   }
}
export default Dashboard;