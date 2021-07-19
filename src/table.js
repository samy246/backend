import { Table,Button,Popconfirm } from 'antd';
import {connect} from 'react-redux';
import store from "./app/store";
import {TABLE} from './actiontypes'
import React from 'react'
import Moment from 'react-moment'
import {  DeleteFilled} from '@ant-design/icons';


class Basictable extends React.Component{
  
    componentDidMount() {
        store.dispatch({type:TABLE});
        
    }
    
    render(){
      
  const columns = [
    {
      key: 'blog_title',
      title: 'Post title',
      dataIndex: 'blog_title',
     
      
    },
    {
      key:'created',
      title: 'Created at',
      dataIndex: 'created',
      render: (created)=><Moment format ='YYYY-MM-DD h:mm:ss'>{created}</Moment>
    },
    {
      key: 'updated',
      title: 'Updated at',
      dataIndex: 'updated',
      render: (updated)=><Moment format ='YYYY-MM-DD h:mm:ss'>{updated}</Moment>
   
   
     
    },
    {
      key:'delete',
      render: ()=> <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
     <DeleteFilled style={{ color: 'red' }}/>  <Button type='primary' style={{marginLeft:'15px'}}>publish</Button>
    </Popconfirm>,
     
      
    },
    
  ];
  
  
return(

    <div>

  <Table dataSource={this.props.post_data} columns={columns} pagination={{ pageSize: 4 }} 
  />
  </div>

    )
  }
}
const mapStateToProps = state =>{
  return{
      post_data:state.post_data,
      
  };
};

export default connect(mapStateToProps)(Basictable);
