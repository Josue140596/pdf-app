import React from 'react';
// axios
import axios from 'axios';
// file-server

import { saveAs } from 'file-saver';

import { Form, Input, Button} from 'antd/lib';

import { UserOutlined, HomeOutlined, PhoneOutlined, SolutionOutlined } from '@ant-design/icons';


const createPDF = async (values) => {
  
    await axios.post('https://backend-pdf.herokuapp.com/create-pdf/temp', values)
    .then((res)=>{
        // console.log(res);
    });
  
    await axios({
        url: 'https://backend-pdf.herokuapp.com/create-pdf/send',
        method: "GET",
        responseType: "blob", 
       
      }).then((response) => {

          let pdfBlob = new Blob([response.data], {type:'application/pdf'});
          
        saveAs(pdfBlob, "account.pdf") 
        
        
      });
}



export const FormPdf = () => {



    return (
        <div className='sub-content-form'>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={createPDF}
            >
                <Form.Item
                    name="Name"
                    label='Name'
                    rules={[{ required: true, message: 'Please input your Name!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
                </Form.Item>
                <Form.Item
                    name="Address"
                    label='Address'
                    rules={[{ required: true, message: 'Please input your Address!' }]}
                >
                    <Input
                        prefix={<HomeOutlined  className="site-form-item-icon" />}
                        placeholder="Address"
                    />
                </Form.Item>
               

                <Form.Item
                    name="accountN"
                    label='Account Number'
                    rules={[{ required: true, message: 'Please input your Account Number!' }]}
                >
                    <Input
                        prefix={<SolutionOutlined  className="site-form-item-icon" />}
                        placeholder="Account Number"
                    />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label='Phone'
                    rules={[{ required: true, message: 'Please input your phone!' }]}
                >
                    <Input
                        prefix={<PhoneOutlined  className="site-form-item-icon" />}
                        placeholder="Phone"
                    />
                </Form.Item>
               

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Create PDF
                     </Button>
     
                </Form.Item>
            </Form>
        </div>

    )
}
