import React from 'react'
import {Layout} from "antd";
import Basictable from './table';
import HeadLayout from './layout';
import Postform from './postform';
const { Content} = Layout;


class Posts extends React.Component{

    render(){
        return(
          <div>
          <HeadLayout/>
            <Layout>
            <Postform/>
              
                   <Content>
                     <Basictable/>
                   </Content>
                 
              
            </Layout>
            </div>
        );
    }
}
export default Posts
