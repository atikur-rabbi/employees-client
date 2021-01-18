import { Layout, Menu, Breadcrumb, Divider } from 'antd'
import DatePicker from '../components/DatePicker'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Link from 'next/link'
import HeaderBlock from '../components/Header'
import FooterBlock from '../components/Footer'

const { Header, Footer, Content } = Layout;

export default function Employee() { 
  return (
    <Layout className="layout">
    <HeaderBlock/> 
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}/>
      <div className="site-layout-content">
        <h1>This an Employee administrator App</h1>
        <Divider/>
        <h1>Go to Manage tab to see all employes</h1>
        <Divider/>
        <h1>Go to Hire tab to hire a new employee</h1>
      </div>
    </Content>
    <FooterBlock/> 
  </Layout>
  )
}