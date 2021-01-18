import { Form, Select, Input, Button, Layout, Menu, Breadcrumb,  DatePicker } from 'antd'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {useState, useEffect, useReducer} from 'react'
import {getEmpId,updateEmp} from '../../utils/fetch_fun'
import HeaderBlock from '../../components/Header'
import FooterBlock from '../../components/Footer'

const { Header, Footer, Content } = Layout;
const FormItem = Form.Item
const Option = Select.Option
import moment from 'moment';

export async function getServerSideProps(context) { 
  console.log('fetching..')
  try {
    const res = await fetch(`https://employees-server.vercel.app/api/Employee/${context.params.id}`, {method: 'GET'})
    const data = await res.json()
    if(!data)
    return {
      notFound: true,
    }
    return {
      props:{
        data,
      },
    }}catch(e) {
        console.log(e)
      }
}



export default function Edit(props) {

  const flag = "true"
  const data = props.data.[0]
  const [body,  setBody ] = useState({First:data.first_name,Last:data.last_name,Act:data.is_active,Date:data.date_of_birth,Id:data.id})
  const dateFormat = 'YYYY/MM/DD';

  function changeAct(value) {
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
            <Input defaultValue ={data.first_name} onChange={(e)=>setBody({...body,First:e.target.value})}/>
          </Form.Item>
          <Form.Item label="Last name">
            <Input defaultValue ={data.last_name} onChange={(e)=>setBody({...body,Last:e.target.value})}/>
          </Form.Item>
          <Form.Item label="Activity">
            <Select defaultValue={data.is_active.toString()} onChange={changeAct}> 
              <Option value="true" >Active</Option>
              <Option value="false">Not Active</Option>
            </Select>
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker defaultValue={moment(data.date_of_birth, dateFormat)} format={dateFormat}  onChange={changeDate} />
          </Form.Item>
        </Form>
      </div>
      <Button size="large" type="primary" disabled = {!body.First||!body.Last||!body.Act.toString()||!body.Date} onClick={()=>updateEmp(body)}>
          Update
      </Button>
    </Content>
    <FooterBlock/> 
  </Layout>
  )
}


// WHY: why does handle event read value but setState doesnt?
