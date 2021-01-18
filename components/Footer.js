import { Button, Layout, Menu, Breadcrumb, Table, Tag, Space } from 'antd'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Link from 'next/link'

const { Footer } = Layout;

export default function FooterBlock() {
    return (
      <>
        <Footer style={{ textAlign: 'center' }}>
        <Link href="/about">
                <a>About me..     </a>
        </Link>
        Powered by PostBoy
        </Footer>
      </>
    );
  }
  