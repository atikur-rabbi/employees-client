import { Form, Select, Input, Button, Layout, Menu, Breadcrumb,  DatePicker } from 'antd'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {useState, useEffect, useReducer} from 'react'
import {createEmp,updateEmp,deleteEmp,deleteAllEmp} from '../../utils/fetch_fun'
import HeaderBlock from '../../components/Header'
import FooterBlock from '../../components/Footer'

const { Header, Footer, Content } = Layout;
const FormItem = Form.Item
const Option = Select.Option



export default function Hire(props) {
  const router = useRouter()
  const [body,  setBody ] = useState({First:'',Last:'',Act:'',Date:''})

// NOTE: line:94 if any of the form's inputs are blank, Hire button is disabled


  function handleChange(value) {
    setBody({...body,Act:value})
  }
  function changeDate(date, dateString) {
    setBody({...body,Date:dateString})
  }

  return (
    <Layout className="layout">
    <HeaderBlock/>  
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}/>
      <div className="site-layout-content">
        <Form labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
        >
          <Form.Item label="First name">
            <Input onChange={(e)=>setBody({...body,First:e.target.value})}/>
          </Form.Item>
          <Form.Item label="Last name">
            <Input onChange={(e)=>setBody({...body,Last:e.target.value})}/>
          </Form.Item>
          <Form.Item label="Activity">
            <Select onChange={handleChange}> 
              <Option value="true" >Active</Option>
              <Option value="false">Not Active</Option>
            </Select>
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker onChange={changeDate} />
          </Form.Item>
        </Form>
      </div>
      <Button size="large" type="primary" disabled = {!body.First||!body.Last||!body.Act||!body.Date} onClick={()=>createEmp(body)}>
          Hire
      </Button>
    </Content>
    <FooterBlock/> 
  </Layout>
  )
}


// WHY: why does handle event read value but setState doesnt?
