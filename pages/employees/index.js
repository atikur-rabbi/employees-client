import { Button, Layout, Menu, Breadcrumb, Table, Tag, Space } from 'antd'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {deleteEmp} from '../../utils/fetch_fun'
import HeaderBlock from '../../components/Header'
import FooterBlock from '../../components/Footer'

const {Header, Footer, Content } = Layout;


export async function getServerSideProps() {
  console.log('fetching..')
  try {
    const res = await fetch(`https://employees-server.vercel.app/api/Employee`, {method: 'GET'})
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

export default function Employees(props) {
  const router = useRouter()
  const data = props.data
  // NOTE: This are the colomn of the table
  const columns = [ 
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
      },
      {
        title: 'First name',
        dataIndex: 'first_name',
        key: 'first_name',
      },
      {
        title: 'Last name',
        dataIndex: 'last_name',
        key: 'last_name',
      },
      {
        title: 'Activity',
        dataIndex: 'is_active',
        key: 'is_active',
        render: text => <a>{text.toString()}</a>,
      },
      {
        title: 'Date of birth',
        dataIndex: 'date_of_birth',
        key: 'date_of_birth',
      },
      {
        title: 'Actions',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button size="small" type="primary" onClick={()=>router.push('/employees/' + text.id)}>
              Edit
            </Button>
            <Button size="small" type="primary" onClick={()=>deleteEmp(text.id)}>
              Delete
            </Button>
          </Space>
        ),
      },
    ];
  return (
    <Layout className="layout">
    <HeaderBlock />  
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}/>

      <div className="site-layout-content">
      <Table columns={columns} dataSource={data} /> 
      </div>
    </Content>
    <FooterBlock/>  
  </Layout>
  )
}
