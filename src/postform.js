import React from 'react'
import store from './app/store';
import { Select,Button,Drawer,Input,Form,Row,Upload, message,Layout} from "antd";
import {InboxOutlined} from '@ant-design/icons'
import {POST} from './actiontypes';
const { Dragger } = Upload;
const DATA='jwt';
const { Header} = Layout;
const object = (localStorage.getItem(DATA))?(JSON.parse(localStorage.getItem(DATA))['objectId']):'';
const styles = { 
                height: '1024px',
  };
  
const props = {
  name: 'file',
  multiple: true,
  action: `   https://api.backendless.com/7CEDE0AF-B5CF-6CD4-FFDB-E4BFD661BF00/840E0AA6-1F6D-462A-9CB3-FD3ACB51B542/files/img/${object}-jpg?overwrite=true`,
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};



//text area
const { TextArea } = Input;

class Postform extends React.Component{
    result=(values)=>{
        store.dispatch({type: POST, payload: values});   
        console.log(values);

}
    state = { visible: false };

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };

    onClose = () => {
      this.setState({
        visible: false,
      });
    };
   
    render(){
      function fileUpload(){
        return `   https://api.backendless.com/43A22E39-9977-4DB5-A4BF-1FF01CA827AD/DDAF60F8-B9C5-4B2D-9A35-CC6ABA68EF7E/files/img/${object}-jpg`
//https://api.backendless.com/43A22E39-9977-4DB5-A4BF-1FF01CA827AD/DDAF60F8-B9C5-4B2D-9A35-CC6ABA68EF7E/data/postdata

      }
        return(
          <Layout>
          <Header style={{backgroundColor: 'white',marginTop:'50px'}}>
                    <h1>Posts</h1>
          <Select  style={{ float: 'right',marginTop:'-50px',width:'35%' }} placeholder="search" > </Select>
          <Button style={{float: 'right',marginTop:'-50px'}}type="primary"  onClick={this.showDrawer}>create</Button>
          </Header>
          <Drawer
          style={styles}
          width={450}
title="Create"
placement={this.state.placement}
closable={true}
onClose={this.onClose}
visible={this.state.visible}
destroyOnClose={true}
>
            <Form
            name="basic"
            layout={'vertical'}
            onFinish={this.result}>
           <Form.Item
       label="Blog title"
       name="blog_title" 
      
       rules={[{ required: true, message: 'Please give title!' }]}
     >
       <Input type='text' placeholder='Title'/>
     </Form.Item>
           <Form.Item
       label="Cover image"
       name="posts_Image"
       type='image'
       getValueFromEvent={fileUpload}
       rules={[{ required: true, message: 'Please upload image!' }]}
     >
      
       
       <Dragger {...props} height={200} type='file' placeholder='Cover Image'
       accept="image/png,image/jpeg" name="posts_Image">
    <p className="ant-upload-drag-icon">
        {/* {<Icon type="inbox" />  */}
      <InboxOutlined/>
    </p>
    <p className="ant-upload-text">Cover Image</p>
    <p className="ant-upload-hint">
     image format .jpg .png
    </p>
  </Dragger> 
       
   
     </Form.Item>

     <Form.Item
       label="Content"
       name="Blog_Content"
       rules={[{ required: true, message: 'Please give content!' }]}
     >
       <TextArea rows={4} placeholder='Blog content'/>
     </Form.Item>
         <Form.Item>
         <Row >
         <Button style={{marginLeft:'200px'}} onClick={this.onClose} >Cancel</Button> 
         <Button type='primary' style={{marginLeft:'20px'}} htmlType="submit" onClick={this.onClose}>Save</Button>
         
          </Row>
         </Form.Item>
         </Form>
         </Drawer>   
         </Layout>
        )
    }

}

export default Postform
