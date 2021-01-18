import { Button, Layout, Menu, Breadcrumb, Table, Tag, Space } from 'antd'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Link from 'next/link'

const {Header} = Layout;

export default function HeaderBlock(Selectkey) {
    return (
      <>
        <Head>
            <title>Postem</title>
        </Head>
        <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[Selectkey]}>
            <Menu.Item key="1" >
            <Link href="/">
                <a> Postem </a>
            </Link>
            </Menu.Item>
            <Menu.Item key="2">
            <Link href="/employees">
                <a> Employees </a>
            </Link>
            </Menu.Item>
            <Menu.Item key="3" >
            <Link href="/employees/hire">
                <a> Hire </a>
            </Link>
            </Menu.Item>
        </Menu>
        </Header>
      </>
    );
  }
  